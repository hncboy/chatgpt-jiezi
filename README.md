# 介绍

基于的 [chatgpt-web 2.10.8](https://github.com/Chanzhaoyu/chatgpt-web/releases/tag/v2.10.8) 版本，可以在不改动客户端的情况下增加管理端的功能

- [客户端 chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web)
- [后台 chatgpt-web-java](https://github.com/hncboy/chatgpt-web-java)

## 地址

- 客户端：https://front.stargpt.top/ 密码：stargpt
- 管理端：https://admin.stargpt.top/ 账号密码 admin-admin

## 功能

### 消息记录

展示消息的列表，问题和回答各是一条消息。通过父消息 id 关联上一条消息。父消息和当前消息一定是同一个聊天室的。

![](pics/chat_message_1.png)

### 限流记录

查看各个 ip 的限流记录，只记录在限流时间范围的限流次数。

![](pics/rate_limit_1.png)

### 聊天室管理

查看聊天室。这里的聊天室和客户端左边的对话不是同一个概念。在同一个窗口中，我们既可以选择关联上下文发送后者不关联上下文发送。如果不关联上下文发送每次发送消息都会产生一个聊天室。

![](pics/chat_room_1.png)

### 敏感词管理

查看敏感词列表，目前只提供了查询的功能，后期可以增加管理。

![](pics/sensitive_word_1.png)

# 构建运行

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

# Commit（add+husky+commitlint）
pnpm commit
```

# 修改配置

## 请求地址

从根目录 .env 文件中修改不同环境中的请求路径
开发环境从 .env.development 中修改 VITE_BASE_URL
构建环境从 .env.production 中修改 VITE_BASE_URL

## 修改配色

从根目录 /public/theme.json 文件中修改基础配色

## 修改图标

本项目图标使用 iconify 图标

首先去图标库地址：[icones](https://icones.js.org/) 找合适的图标

1. 结合 unocss 使用

```html
<i i-carbon-sun /> <i class="i-carbon-sun" />
```

2. 结合插件 unplugin-icons 自定义标签使用

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

3. 结合 Naive UI 的 NIcon 组件封装使用

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

# 联系

<div style="display: flex; align-items: center; gap: 20px;">
  <div style="text-align: center">
    <img style="max-width: 100%" src="pics/qq_group.png" alt="QQ" />
    <p>631171246</p>
  </div>
</div>


# 赞助

如果觉得项目对你有帮助的，条件允许的话可以点个 Star 或者在赞助一小点。感谢支持~

<div style="display: flex; align-items: center; gap: 20px;">
  <div style="text-align: center">
    <img style="max-width: 100%" src="pics/wechat_pay.png" alt="微信" />
    <p>微信支付</p>
  </div>
  <div style="text-align: center">
    <img style="max-width: 100%" src="pics/zhifubao_pay.png" alt="支付宝" />
    <p>支付宝</p>
  </div>
</div>

## License

MIT © [hncboy](LICENSE)
