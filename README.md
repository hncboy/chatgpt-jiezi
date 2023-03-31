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

### 修改配置

## 请求地址

从根目录 /public/proxy-config.ts 文件中修改不同环境中的请求路径

## 修改配色

从根目录 /public/theme.json 文件中修改基础配色

## 修改图标 本项目图标使用 iconify 图标

首先去图标库地址：[icones](https://icones.js.org/) 找合适的图标

### 1. 结合 unocss 使用

```html
<i i-carbon-sun /> <i class="i-carbon-sun" />
```

### 2. 结合插件 unplugin-icons 自定义标签使用

`<icon-[iconify图标名称]`

```html
<icon-ant-design:fullscreen-exit-outlined /> <icon-ant-design:fullscreen-outlined />
```

这种方式还支持自定义 svg 图标，本项目自定义 svg 图标固定放在 src/assets/svg 下

`<icon-custom-[svg图标文件名]`

```
<icon-custom-logo />
```

具体配置参看 build/plugin/unplugin.js

### 3. 结合 Naive UI 的 NIcon 组件封装使用

```html
<!-- iconify图标 -->
<TheIcon icon="material-symbols:delete-outline" />
<!-- 自定义svg图标 -->
<TheIcon icon="logo" type="custom" />
```

封装组件参看 src/components/icon

参考 https://juejin.cn/post/7095460309673967646

## UnoCss

[保熟的 UnoCSS 使用指北，优雅使用 antfu 大佬的原子化 CSS](https://juejin.cn/post/7142466784971456548)
