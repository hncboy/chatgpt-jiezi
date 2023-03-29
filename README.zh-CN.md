<p align="center">
  <a href="https://github.com/hncboy/chatgpt-web-admin">
    <img alt="Vue Naive Admin Logo" width="200" src="./src/assets/svg/logo.svg">
  </a>
</p>

<p align='center'>
  <b>简体中文</b> | 
  <a href="https://github.com/hncboy/chatgpt-web-admin">English</a>
</p>

### 简介

灿哥来写

### 快速开始

```shell
# 推荐配置git autocrlf 为 false（本项目规范使用lf换行符，此配置是为防止git自动将源文件转换为crlf）
# 不清楚为什么要这样做的请参考这篇文章：https://www.freesion.com/article/4532642129
git config --global core.autocrlf false

# 克隆项目
git clone https://github.com/hncboy/chatgpt-web-admin

# 进入项目目录
cd chatgpt-web-admin

# 安装依赖(建议使用pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # 装了可忽略
pnpm i # 或者 npm i

# 启动
pnpm dev
```

### 构建发布

```shell
# 构建测试环境
pnpm build:test

# 构建github pages环境
pnpm build:github

# 构建生产环境
pnpm build
```

### 其他指令

```shell
# eslint代码格式检查
pnpm lint

# 代码检查并修复
pnpm lint:fix

# 预览发布包效果（需先执行构建指令）
pnpm preview

# 提交代码（husky+commitlint）
pnpm cz
```
