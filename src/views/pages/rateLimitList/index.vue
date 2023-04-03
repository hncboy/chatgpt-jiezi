<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { RateLimitVO } from './types/types'
import api from './api'
import { CrudTable } from '@/components/index.js'

const $table = ref<any>(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref<any>({})
/** 补充参数（可选） */
const extraParams = ref<any>({})

const columns: DataTableColumns<RateLimitVO> = [
  { title: 'ip', key: 'ip', width: 80 },
  { title: 'ip限流规则', key: 'ipLimitRule', width: 80, ellipsis: { tooltip: true } },
  { title: '全局限流规则', key: 'globalLimitRule', width: 80, ellipsis: { tooltip: true } },
  {
    title: '是否被 ip 限流',
    key: 'isIpLimited',
    width: 80,
    render(row) {
      if (row.isIpLimited)
        return h('span', '是')
      return h('span', '否')
    },
  },
  {
    title: '是否被全局限流',
    key: 'isGlobalLimited',
    width: 80,
    render(row) {
      if (row.isGlobalLimited)
        return h('span', '是')
      return h('span', '否')
    },
  },
  { title: 'ip 限制时间内发送次数', key: 'alreadySendCount', width: 80, ellipsis: { tooltip: true } },
  {
    title: '下次可以发送消息的时间',
    key: 'nextSendTime',
    width: 80,
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
  <CommonPage show-footer title="限流记录">
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :is-pagination="false"
      :columns="columns"
      :get-data="api.getRateLimitListData"
      @on-checked="onChecked"
    />
  </CommonPage>
</template>
