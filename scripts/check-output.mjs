import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { resolve, join } from "node:path";
import assert from "node:assert/strict";

const root = resolve("dist");
const base = "/agent-study";
const errors = [];
let pages = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) walk(file);
    else if (name.endsWith(".html")) {
      pages++;
      const html = readFileSync(file, "utf8");
      for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        const raw = match[1].replaceAll("&amp;", "&");
        if (/^(?:[a-z]+:|\/\/|#)/i.test(raw)) continue;
        const url = new URL(raw, `https://example.test${base}/${file.slice(root.length + 1).replaceAll("\\", "/")}`);
        const path = decodeURIComponent(url.pathname);
        if (!(path === base || path.startsWith(`${base}/`))) {
          errors.push(`${file}: URL omits repository path: ${raw}`);
          continue;
        }
        const target = resolve(root, `.${path.slice(base.length) || "/"}`);
        if (!existsSync(target) && !existsSync(join(target, "index.html"))) errors.push(`${file}: missing ${raw}`);
      }
    }
  }
}
assert.ok(existsSync(root), "Run npm run build before checking output");
walk(root);
for (const path of ["index.html", "projects/index.html", "skills/index.html", "posts/index.html", "search/index.html", "pagefind/pagefind.js", "study-og.png"]) {
  if (!existsSync(join(root, path))) errors.push(`Missing required output: ${path}`);
}
assert.deepEqual(errors, [], errors.join("\n"));
console.log(`Verified ${pages} HTML pages: internal links and asset paths resolve under ${base}/.`);
