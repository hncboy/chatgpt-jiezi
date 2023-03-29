<script setup lang="ts">
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>

<template>
  <AppPage :show-footer="true" min-w-375>
    <div flex-1 min-w-375>
      <n-watermark
        :content="userStore.name"
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
              <n-gradient-text
                mt-5 text-12 op-60
                gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
              >
                啊吧啊吧啊吧,啊吧啊吧啊吧!
              </n-gradient-text>
            </div>
            <div ml-auto items-center hidden md:flex>
              <n-statistic label="待办" :value="4" w-80>
                <template #suffix>
                  / 10
                </template>
              </n-statistic>
              <!-- TODO start数图 -->
              <n-statistic label="Stars" w-80 ml-20>
                <a href="https://github.com/hncboy/chatgpt-web-admin">
                  <img allt="stars" src="https://badgen.net/github/stars/hncboy/chatgpt-web-admi">
                </a>
              </n-statistic>
              <n-statistic label="Forks" w-80 ml-20>
                <a href="https://github.com/hncboy/chatgpt-web-admin">
                  <img allt="forks" src="https://badgen.net/github/forks/hncboy/chatgpt-web-admin">
                </a>
              </n-statistic>
            </div>
          </div>
        </n-card>
      </n-watermark>

      <n-card title="项目" size="small" :segmented="true" mt-15 rounded-10>
        <template #header-extra>
          <n-button text type="primary">
            更多
          </n-button>
        </template>
        <div flex flex-wrap justify-around>
          <n-card
            v-for="i in 5"
            :key="i"
            w-300 flex-shrink-0 mt-10 mb-10 cursor-pointer
            hover:card-shadow
            title="ChatgptAdmin"
            size="small"
          >
            <p op-60>
              一个基于 Vue3、Vite3、TypeScript、Pinia、Unocss、Naive UI 的轻量级后台管理模板
            </p>
          </n-card>
          <div w-300 h-0 />
          <div w-300 h-0 />
          <div w-300 h-0 />
          <div w-300 h-0 />
        </div>
      </n-card>
    </div>
  </AppPage>
</template>
