import type { UIStrings } from "../types";
export default {
  nav: { home: "首页", posts: "笔记", tags: "主题", about: "关于", archives: "归档", search: "搜索" },
  post: {
    publishedAt: "发布于", updatedAt: "更新于", sharePostIntro: "分享这篇文章：",
    sharePostOn: "分享到 {{platform}}", sharePostViaEmail: "通过邮件分享", tagLabel: "相关主题",
    backToTop: "回到顶部", goBack: "返回", editPage: "编辑这篇内容", previousPost: "上一篇", nextPost: "下一篇",
  },
  pagination: { prev: "上一页", next: "下一页", page: "页" },
  home: { socialLinks: "也在这里", featured: "作品选集", recentPosts: "近期笔记", allPosts: "全部笔记" },
  footer: { copyright: "", allRightsReserved: "Yaoguangyis" },
  pages: {
    tagTitle: "主题", tagDesc: "这个主题下的所有内容", tagsTitle: "主题索引", tagsDesc: "沿着一个问题，找到相关的作品与笔记。",
    postsTitle: "学习笔记", postsDesc: "把概念拆开，把过程写下。这里也收录尚在推敲的问题。",
    archivesTitle: "内容归档", archivesDesc: "按时间整理的作品、笔记与技能。", searchTitle: "在书房里找一找", searchDesc: "搜索作品、学习笔记和技能内容。",
  },
  a11y: { skipToContent: "跳到正文", openMenu: "展开导航", closeMenu: "收起导航", toggleTheme: "切换明暗主题", searchPlaceholder: "输入关键词…", noResults: "没有找到相关内容", goToPreviousPage: "前往上一页", goToNextPage: "前往下一页" },
  notFound: { title: "页面未找到", message: "这一页似乎还没有写下。", goHome: "回到书房" },
} satisfies UIStrings;
