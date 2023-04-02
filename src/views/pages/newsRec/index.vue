<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { ChatMessageVO } from './types/types'
import api from './api'
import { CrudTable, QueryBarItem } from '@/components/index.js'
import { formatDateTime } from '@/utils'

const $table = ref<any>(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref<any>({})
/** 补充参数（可选） */
const extraParams = ref<any>({})

const columns: DataTableColumns<ChatMessageVO> = [

  { title: '消息ID', key: 'messageId', width: 80, ellipsis: { tooltip: true } },
  { title: '父级消息 id', key: 'parentMessageId', width: 80, ellipsis: { tooltip: true } },
  // { title: '父级回答消息 id', key: 'parentAnswerMessageId', width: 80, ellipsis: { tooltip: true } },
  // { title: '父级问题消息 id', key: 'parentQuestionMessageId', width: 80, ellipsis: { tooltip: true } },
  // { title: '上下文数量', key: 'contextCount', width: 60 },
  { title: '问题上下文数量', key: 'questionContextCount', width: 50 },
  {
    title: '类型',
    key: 'messageType',
    width: 40,
    render(row) {
      if (row.messageType === 'ANSWER')

        return h('span', '回答')

      else

        return h('span', '问题')
    },
  },
  { title: '聊天室 id', key: 'chatRoomId', width: 60, ellipsis: { tooltip: true } },
  // { title: '对话 id', key: 'conversationId', width: 80, ellipsis: { tooltip: true } },
  {
    title: 'API 类型',
    key: 'apiType',
    width: 50,
    render(row) {
      if (row.apiType === 'ChatGPTAPI')

        return h('span', 'ApiKey')

      else

        return h('span', 'AccessToken')
    },
  },
  { title: 'IP地址', key: 'ip', width: 60 },
  { title: '消息内容', key: 'content', width: 80, ellipsis: { tooltip: false, expandTrigger: 'click', lineClamp: '1' } },
  { title: '错误响应数据', key: 'responseErrorData', width: 50, ellipsis: { tooltip: false, expandTrigger: 'click', lineClamp: '1' } },
  // { title: '输入 Tokens', key: 'promptTokens', width: 50 },
  // { title: '累计 Tokens', key: 'totalTokens', width: 50 },
  {
    title: '消息状态',
    key: 'status',
    width: 50,
    render(row) {
      if (row.status === 'INIT')

        return h('span', '初始化')

      else if (row.status === 'PART_SUCCESS')

        return h('span', '部分成功')

      else if (row.status === 'COMPLETE_SUCCESS')

        return h('span', '全部成功')

      else if (row.status === 'ERROR')

        return h('span', '发送失败')
    },
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 50,
    render(row) {
      return h('span', formatDateTime(row.createTime))
    },
  },
  /* {
    title: '更新时间',
    key: 'updateTime',
    width: 80,
    render(row) {
      return h('span', formatDateTime(row.updateTime))
    },
  }, */
]

// 选中事件
function onChecked(rowKeys: string[]) {
  if (rowKeys.length)
    window.$message?.info(`选中${rowKeys.join(' ')}`)
}

onMounted(() => {
  $table.value?.handleSearch()
})
</script>

<template>
  <CommonPage show-footer title="消息记录">
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.getChatMessageData"
      @on-checked="onChecked"
    >
      <template #queryBar>
        <QueryBarItem label="IP地址" :label-width="80">
          <n-input
            v-model:value="queryItems.ip"
            type="text"
            placeholder="请输入IP地址"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
        <QueryBarItem label="聊天室ID" :label-width="80">
          <n-input
            v-model:value="queryItems.chatRoomId"
            type="text"
            placeholder="请输入聊天室ID"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
        <QueryBarItem label="消息内容" :label-width="80">
          <n-input
            v-model:value="queryItems.content"
            type="text"
            placeholder="请输入消息内容"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
      </template>
    </CrudTable>
  </CommonPage>
</template>
