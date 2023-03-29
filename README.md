<p align='center'>
  <b>English</b> | 
  <a href="https://github.com/hncboy/chatgpt-web-admin/blob/main/README.zh-CN.md">简体中文</a>
</p>

### Introduction

灿哥来写

### Getting Started

```shell
# Recommended setup git autocrlf 为 false
git config --global core.autocrlf false

# Clone Project
git clone https://github.com/hncboy/chatgpt-web-admin

cd chatgpt-web-admin

# Install dependencies(Recommended use pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # Installed and can be ignored
pnpm i # or npm i

# Start
pnpm dev
```

### Build and Release

```shell
# Test Environment
pnpm build:test

# Github Environment
pnpm build:github

# Prod Environment
pnpm build
```

### Other

```shell
# eslint check
pnpm lint

# eslint check and fix
pnpm lint:fix

# Preview（Need to build first）
pnpm preview

# Commit（husky+commitlint）
pnpm cz
```
