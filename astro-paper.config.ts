import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://yaoguangyis.github.io/",
    title: "数字书房",
    description: "Yaoguangyis 的数字书房，收录 Agent 作品、学习笔记与可复用的技能。",
    author: "Yaoguangyis",
    profile: "https://github.com/Yaoguangyis",
    ogImage: "study-og.png",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Yaoguangyis/agent-study/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/Yaoguangyis" },
  ],
  shareLinks: [
  ],
});
