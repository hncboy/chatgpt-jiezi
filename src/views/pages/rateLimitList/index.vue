<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { ApifoxModel } from './types/types'
import api from './api'
import { CrudTable } from '@/components/index.js'
import { formatDateTime } from '@/utils'

const $table = ref<any>(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref<any>({})
/** 补充参数（可选） */
const extraParams = ref<any>({})

const columns: DataTableColumns<ApifoxModel> = [

  { title: 'IP地址', key: 'ip', width: 80 },
  { title: '时间内已经发送次数', key: 'alreadySendCount', width: 80, ellipsis: { tooltip: true } },
  {
    title: '是否被限流',
    key: 'isLimited',
    width: 80,
    render(row) {
      if (row.isLimited)

        return h('span', '是')

      else

        return h('span', '否')
    },
  },
  { title: '限流规则', key: 'limitRule', width: 80, ellipsis: { tooltip: true } },
  {
    title: '下次可以发送消息的时间',
    key: 'nextSendTime',
    width: 80,
    render(row) {
      return h('span', formatDateTime(row.nextSendTime))
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
  <CommonPage show-footer title="限流记录">
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.getRateLimitListData"
      @on-checked="onChecked"
    />
  </CommonPage>
</template>
