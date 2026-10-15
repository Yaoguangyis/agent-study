import sharp from "sharp";
import { writeFileSync } from "node:fs";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f8f7f2"/>
<g stroke="#dedfd5" stroke-width="1"><path d="M72 100H1128M72 530H1128"/></g>
<text x="78" y="78" fill="#28665f" font-family="sans-serif" font-size="22">Yaoguangyis</text>
<text x="75" y="290" fill="#252925" font-family="SimSun,serif" font-size="84">数字书房</text>
<text x="80" y="375" fill="#626a64" font-family="Microsoft YaHei,sans-serif" font-size="28">Agent 作品、学习笔记与技能手册</text>
<g transform="translate(850 218) rotate(-7)" fill="none" stroke="#28665f" stroke-width="3"><path d="M0 0L90 16L180 0V155L90 171L0 155ZM90 16V171"/><path d="M20 35L65 43M20 56L65 64M20 78L58 85M112 48L156 40M112 71L156 63M112 94L144 88" opacity=".5"/></g>
<text x="80" y="573" fill="#626a64" font-family="monospace" font-size="18">yaoguangyis.github.io/agent-study</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/study-og.png");
writeFileSync("public/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#f8f7f2"/><path d="M12 15L32 20L52 15V47L32 52L12 47ZM32 20V52" fill="none" stroke="#28665f" stroke-width="3" stroke-linejoin="round"/></svg>`);
console.log("Created original book cover and favicon.");
