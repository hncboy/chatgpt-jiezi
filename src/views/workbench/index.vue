<script setup lang="ts">
import { onMounted } from 'vue'
import busuanziScript from 'busuanzi.pure.js'
import { useUserStore } from '@/store'

onMounted(() => {
  busuanziScript.fetch()
})

const userStore = useUserStore()
</script>

<template>
  <AppPage :show-footer="true" min-w-375>
    <div flex-1 min-w-375>
      <n-watermark
        content="StarGPT"
        cross
        selectable
        :font-size="16"
        :line-height="16"
        :width="192"
        :height="128"
        :x-offset="12"
        :y-offset="28"
        :rotate="-15"
      >
        <n-card rounded-10>
          <div flex items-center>
            <img rounded-full width="60" :src="userStore.avatar">
            <div ml-20>
              <p text-16>
                Hello, {{ userStore.name }} ！
              </p>
              <span id="busuanzi_container_site_pv" style="display:none">
                本站总访问量
                <span id="busuanzi_value_site_pv" />次
                <span class="post-meta-divider">|</span>
              </span>
              <span id="busuanzi_container_site_uv" style="display:none">
                本站访客数
                <span id="busuanzi_value_site_uv" />人次
              </span>
              <n-gradient-text
                mt-5 text-12 op-60
                gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
              />
            </div>
          </div>
        </n-card>
      </n-watermark>

      <n-card title="项目" size="small" :segmented="true" mt-15 rounded-10>
        <div flex flex-wrap justify-start>
          <a href="https://github.com/Chanzhaoyu/chatgpt-web" target="_blank">
            <n-card
              w-350 flex-shrink-0 mt-10 mb-10 cursor-pointer
              hover:card-shadow
              title="ChatGPT Web"
              size="small"
            >
              <p op-60>
                ChatGPT Web 支持双模型，提供了两种非官方 ChatGPT API 方法
              </p>
              <div ml-auto items-center hidden md:flex>
                <n-statistic w-80>
                  <a href="https://github.com/Chanzhaoyu/chatgpt-web/stargazers">
                    <img allt="stars" src="https://img.shields.io/github/stars/Chanzhaoyu/chatgpt-web?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/Chanzhaoyu/chatgpt-web">
                    <img allt="forks" src="https://img.shields.io/github/watchers/Chanzhaoyu/chatgpt-web?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/Chanzhaoyu/chatgpt-web">
                    <img allt="forks" src="https://img.shields.io/github/forks/Chanzhaoyu/chatgpt-web?style=social">
                  </a>
                </n-statistic>
              </div>
            </n-card>
          </a>
          <a ml-20 href="https://github.com/hncboy/chatgpt-web-admin" target="_blank">
            <n-card
              w-350 flex-shrink-0 mt-10 mb-10 cursor-pointer
              hover:card-shadow
              title="ChatGPT Web Admin"
              size="small"
            >
              <p op-60>
                本管理端的github代码仓库地址! 包含四个模块 消息记录 限流记录 聊天室管理 敏感词管理!
              </p>
              <div ml-auto items-center hidden md:flex>
                <n-statistic w-80>
                  <a href="https://github.com/hncboy/chatgpt-web-admin/stargazers">
                    <img allt="stars" src="https://img.shields.io/github/stars/hncboy/chatgpt-web-admin?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/hncboy/chatgpt-web-admin">
                    <img allt="forks" src="https://img.shields.io/github/watchers/hncboy/chatgpt-web-admin?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/hncboy/chatgpt-web-admin">
                    <img allt="forks" src="https://img.shields.io/github/forks/hncboy/chatgpt-web-admin?style=social">
                  </a>
                </n-statistic>
              </div>
            </n-card>
          </a>
          <a ml-20 href="https://github.com/hncboy/chatgpt-web-java" target="_blank">
            <n-card
              w-350 flex-shrink-0 mt-10 mb-10 cursor-pointer
              hover:card-shadow
              title="ChatGPT Web Java"
              size="small"
            >
              <p op-60>
                本管理端的 Java 后台的github代码仓库地址! 基于的 chatgpt-web 2.10.8 版本!
              </p>
              <div ml-auto items-center hidden md:flex>
                <n-statistic w-80>
                  <a href="https://github.com/hncboy/chatgpt-web-java/stargazers">
                    <img allt="stars" src="https://img.shields.io/github/stars/hncboy/chatgpt-web-java?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/hncboy/chatgpt-web-java">
                    <img allt="forks" src="https://img.shields.io/github/watchers/hncboy/chatgpt-web-java?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/hncboy/chatgpt-web-java">
                    <img allt="forks" src="https://img.shields.io/github/forks/hncboy/chatgpt-web-java?style=social">
                  </a>
                </n-statistic>
              </div>
            </n-card>
          </a>
          <a ml-20 href="https://github.com/zclzone/vue-naive-admin" target="_blank">
            <n-card
              w-350 flex-shrink-0 mt-10 mb-10 cursor-pointer
              hover:card-shadow
              title="Vue Naive Admin"
              size="small"
            >
              <p op-60>
                一个基于 Vue3、Vite3、TypeScript、Pinia、Unocss、Naive UI 的轻量级后台管理模板
              </p>
              <div ml-auto items-center hidden md:flex>
                <n-statistic w-80>
                  <a href="https://github.com/zclzone/vue-naive-admin/stargazers">
                    <img allt="stars" src="https://img.shields.io/github/stars/zclzone/vue-naive-admin?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/zclzone/vue-naive-admin">
                    <img allt="forks" src="https://img.shields.io/github/watchers/zclzone/vue-naive-admin?style=social">
                  </a>
                </n-statistic>
                <n-statistic w-80 ml-20>
                  <a href="https://github.com/zclzone/vue-naive-admin">
                    <img allt="forks" src="https://img.shields.io/github/forks/zclzone/vue-naive-admin?style=social">
                  </a>
                </n-statistic>
              </div>
            </n-card>
          </a>
          <!-- <div w-300 h-0 />
          <div w-300 h-0 />
          <div w-300 h-0 />
          <div w-300 h-0 /> -->
        </div>
      </n-card>
    </div>
  </AppPage>
</template>
