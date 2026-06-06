# 林木种苗学入门学习站

一个基于 Next.js、React、TypeScript 和 Tailwind CSS 的轻量级科普学习网站，用于快速复习林木种苗学基础概念。

## 运行方式

```bash
npm install
npm run dev
```

启动后访问命令行提示的本地地址，通常是 `http://localhost:3000`。

## 当前功能

- 首页知识卡片学习
- 简单自测题

## 项目结构

```txt
src/
  app/
    page.tsx
    quiz/page.tsx
  components/
    Header.tsx
    TopicCard.tsx
    QuizCard.tsx
  data/
    topics.ts
    quiz.ts
```

当前版本为 MVP，未包含术语词典、知识图谱、多页面详情、学习路径或后台管理功能。
