# 数字书房

Yaoguangyis 的 Agent 作品、学习笔记与技能手册。暖白纸色、墨黑文字、青绿色点缀，中文阅读优先。

基于 [AstroPaper](https://github.com/satnaing/astro-paper)，保留上游 MIT 许可，参考其成熟的 Markdown、静态搜索和无障碍基础。Quartz 仅作为笔记组织方式的参考，没有复制其代码。

## 本地使用

需要 Node.js 24（上游最低要求 22.12）。

```sh
npm ci
npm run dev
```

访问终端显示的地址及 `/agent-study/` 路径。

```sh
npm run build
node scripts/check-output.mjs
npm run preview
```

搜索索引在构建时生成。无需在线数据库、账户系统或 API 密钥。

## 写入自己的内容

在 `src/content/posts/` 新建 Markdown 文件：

```yaml
---
title: "我的第一篇笔记"
description: "这篇记录想解决什么问题。"
pubDatetime: 2026-10-15T02:00:00Z
kind: note
sample: false
draft: false
tags: [学习记录]
---
```

`kind` 的值为 `note`（笔记）、`project`（作品）或 `skill`（技能）。`sample: true` 显示示例标记；真实内容改为 `false`。`draft: true` 不发布该条目。首页自动读取最近两件作品、四篇笔记和三个技能。

目前所有内容都明确标为示例，不代表作者已经完成这些项目。可直接修改或删除示例文件。关于页在 `src/content/pages/about.md`，站点名称和账户地址在 `astro-paper.config.ts`，首页布局在 `src/pages/index.astro`，视觉样式在 `src/styles/study.css` 和 `src/styles/theme.css`。

## 发布到 GitHub Pages

目标仓库：`Yaoguangyis/agent-study`。配置为 `site: https://yaoguangyis.github.io/` 与 `base: /agent-study`，请保留仓库名，否则需要一起调整 `astro.config.ts`。

1. 在 GitHub 创建 `agent-study` 仓库。GitHub 免费账户通常需使用公开仓库启用 Pages。
2. 上传本项目源码（包含隐藏目录 `.github`），将默认分支设为 `main`。
3. 打开仓库 **Settings → Pages → Build and deployment → Source → GitHub Actions**。
4. 推送至 `main` 或在 Actions 手动运行 **Deploy digital study**。
5. 等待部署成功后，访问 `https://yaoguangyis.github.io/agent-study/`。这个地址是部署目标，配置完成前不代表已经上线。

工作流会安装锁定依赖、类型检查、静态构建、生成中文搜索索引，然后上传并部署 `dist/`。以后更新 Markdown 并推送到 `main` 即可自动发布。

## 许可

上游 AstroPaper 代码遵循仓库中的 `LICENSE`。复用或分发时保留该许可及作者声明。
