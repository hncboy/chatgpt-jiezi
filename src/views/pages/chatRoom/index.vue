<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { ChatRoomVO } from './types/types'
import api from './api'
import { CrudTable } from '@/components/index.js'
import { formatDateTime } from '@/utils'

const $table = ref<any>(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref<any>({})
/** 补充参数（可选） */
const extraParams = ref<any>({})

const columns: DataTableColumns<ChatRoomVO> = [

  { title: '聊天室 id', key: 'id', width: 50, ellipsis: { tooltip: true } },
  // { title: '对话ID', key: 'conversationId', width: 60, ellipsis: { tooltip: true } },
  // { title: '第一条消息ID', key: 'firstMessageId', width: 60, ellipsis: { tooltip: true } },
  { title: 'IP地址', key: 'ip', width: 80 },
  { title: '对话标题', key: 'title', width: 150, ellipsis: { tooltip: true } },
  {
    title: 'API 类型',
    key: 'apiType',
    width: 40,
    render(row) {
      if (row.apiType === 'ChatGPTAPI')

        return h('span', 'ApiKey')

      else

        return h('span', 'AccessToken')
    },
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 70,
    render(row) {
      return h('span', formatDateTime(row.createTime))
    },
  },
  {
    title: '更新时间',
    key: 'updateTime',
    width: 70,
    render(row) {
      return h('span', formatDateTime(row.updateTime))
    },
  },
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
  <CommonPage show-footer title="聊天室">
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.getChatRoomData"
      @on-checked="onChecked"
    />
  </CommonPage>
</template>
