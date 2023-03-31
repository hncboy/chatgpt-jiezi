<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { SensitiveWordVO } from './types/types'
import api from './api'
import { CrudTable, QueryBarItem } from '@/components/index.js'
import { formatDateTime } from '@/utils'

const $table = ref<any>(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref<any>({})
/** 补充参数（可选） */
const extraParams = ref<any>({})

const columns: DataTableColumns<SensitiveWordVO> = [

  { title: 'ID', key: 'id', width: 80, ellipsis: { tooltip: true } },
  { title: '敏感词', key: 'word', width: 80, ellipsis: { tooltip: true } },
  {
    title: '状态',
    key: 'status',
    width: 60,
    render(row) {
      if (row.status === 1)

        return h('span', '启用')

      else

        return h('span', '停用')
    },
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 150,
    render(row) {
      return h('span', formatDateTime(row.createTime))
    },
  },
  {
    title: '更新时间',
    key: 'updateTime',
    width: 150,
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
  <CommonPage show-footer title="敏感词管理">
    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.getSensitiveWordData"
      @on-checked="onChecked"
    >
      <template #queryBar>
        <QueryBarItem label="敏感词" :label-width="80">
          <n-input
            v-model:value="queryItems.word"
            type="text"
            placeholder="请输入敏感词"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
      </template>
    </CrudTable>
  </CommonPage>
</template>
