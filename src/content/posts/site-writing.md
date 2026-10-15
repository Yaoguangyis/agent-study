---
title: "在这间书房里，新增第一篇笔记"
description: "一个 Markdown 文件，就是一页新的记录。"
pubDatetime: 2026-10-12T02:00:00Z
kind: note
sample: true
tags: [Markdown, 写作]
---

> 示例使用说明。网站基于 AstroPaper，内容以 Markdown 文件保存。

## 新建文件

在仓库的 `src/content/posts/` 目录里，新建一个英文文件名，例如 `my-first-note.md`。正文和标题可以使用中文。

## 写下文章信息

```yaml
---
title: "我的第一篇学习笔记"
description: "一句话说明这篇笔记在解决什么问题。"
pubDatetime: 2026-10-15T02:00:00Z
kind: note
sample: false
tags: [学习记录]
draft: false
---
```

`kind` 可以是 `note`、`project` 或 `skill`，分别对应笔记、作品和技能手册。未准备好的文章设为 `draft: true`，构建时不会作为公开文章展示。

## 预览与更新

在本地运行 `npm run dev` 预览页面；正式检查运行 `npm run build`。搜索索引在构建时生成。提交到 `main` 分支后，配置好的 GitHub Actions 会构建并部署。

## 示例内容怎样处理

把当前示例文件改写成自己的内容，并将 `sample` 改为 `false`。也可以直接删除不需要的示例。首页会根据内容类别自动更新列表。
