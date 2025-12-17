<template>
  <div class="column-management">
    <!-- Row選択 -->
    <div class="mb-3">
      <label class="form-label small fw-bold" style="color: var(--text-primary)">
        編集するRowを選択
      </label>
      <select v-model="selectedRowId" class="form-select">
        <option :value="null">-- Rowを選択してください --</option>
        <option v-for="(row, index) in rows" :key="row.id" :value="row.id">
          Row {{ index + 1 }} ({{ row.columns.length }} columns)
        </option>
      </select>
    </div>

    <!-- Column選択 -->
    <div v-if="selectedRow" class="mb-3">
      <label class="form-label small fw-bold" style="color: var(--text-primary)">
        編集するColumnを選択
      </label>
      <select v-model="selectedColumnId" class="form-select">
        <option :value="null">-- Columnを選択してください --</option>
        <option v-for="(column, index) in selectedRow.columns" :key="column.id" :value="column.id">
          Column {{ index + 1 }}
        </option>
      </select>
    </div>

    <!-- Column設定 -->
    <div v-if="selectedColumn" class="glass-card p-3">
      <h3 class="h6 mb-3" style="color: var(--text-primary); font-weight: 600">
        Column {{ selectedColumnIndex + 1 }} の設定
      </h3>

      <!-- カラム幅設定 -->
      <div class="mb-4">
        <h4 class="small fw-bold mb-2" style="color: var(--text-primary)">カラム幅</h4>
        <div class="row g-2">
          <div class="col-6 col-md-4" v-for="bp in breakpoints" :key="bp.key">
            <label class="form-label small mb-1">{{ bp.label }}</label>
            <select v-model.number="editingColumn.width[bp.key]" class="form-select form-select-sm">
              <option :value="1">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}1</option>
              <option :value="2">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}2</option>
              <option :value="3">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}3</option>
              <option :value="4">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}4</option>
              <option :value="5">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}5</option>
              <option :value="6">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}6</option>
              <option :value="7">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}7</option>
              <option :value="8">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}8</option>
              <option :value="9">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}9</option>
              <option :value="10">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}10</option>
              <option :value="11">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}11</option>
              <option :value="12">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}12</option>
              <option value="auto">col-{{ bp.key === 'xs' ? '' : bp.key + '-' }}auto</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Offset設定 -->
      <div class="mb-4">
        <h4 class="small fw-bold mb-2" style="color: var(--text-primary)">Offset（左余白）</h4>
        <div class="row g-2">
          <div class="col-6 col-md-4" v-for="bp in offsetBreakpoints" :key="bp.key">
            <label class="form-label small mb-1">{{ bp.label }}</label>
            <select v-model.number="editingColumn.offset[bp.key]" class="form-select form-select-sm">
              <option :value="0">なし</option>
              <option :value="1">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}1</option>
              <option :value="2">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}2</option>
              <option :value="3">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}3</option>
              <option :value="4">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}4</option>
              <option :value="5">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}5</option>
              <option :value="6">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}6</option>
              <option :value="7">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}7</option>
              <option :value="8">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}8</option>
              <option :value="9">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}9</option>
              <option :value="10">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}10</option>
              <option :value="11">offset-{{ bp.key === 'xs' ? '' : bp.key + '-' }}11</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Order設定 -->
      <div class="mb-3">
        <h4 class="small fw-bold mb-2" style="color: var(--text-primary)">Order（表示順）</h4>
        <div class="row g-2">
          <div class="col-6 col-md-4">
            <label class="form-label small mb-1">デフォルト (xs)</label>
            <select v-model="editingColumn.order.xs" class="form-select form-select-sm">
              <option :value="0">通常</option>
              <option value="first">order-first</option>
              <option value="last">order-last</option>
              <option :value="1">order-1</option>
              <option :value="2">order-2</option>
              <option :value="3">order-3</option>
              <option :value="4">order-4</option>
              <option :value="5">order-5</option>
            </select>
          </div>
        </div>
      </div>

      <!-- プレビュー -->
      <div class="alert alert-info mb-3">
        <strong>適用されるクラス:</strong>
        <div class="mt-2">
          <code class="d-inline-block px-2 py-1 bg-white rounded">{{ previewClasses }}</code>
        </div>
      </div>

      <!-- ボタン -->
      <div class="d-flex gap-2">
        <button @click="applyChanges" class="btn btn-primary-custom flex-grow-1">
          ✓ 適用
        </button>
        <button @click="cancelChanges" class="btn btn-outline-secondary">
          キャンセル
        </button>
      </div>
    </div>

    <!-- 未選択時のメッセージ -->
    <div v-else-if="!selectedRow" class="alert alert-info">
      Rowを選択してください
    </div>
    <div v-else-if="!selectedColumn" class="alert alert-info">
      Columnを選択してください
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  rows: {
    type: Array,
    required: true
  },
  generateColumnClasses: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['update-column'])

const selectedRowId = ref(null)
const selectedColumnId = ref(null)
const editingColumn = ref(null)

const breakpoints = [
  { key: 'xs', label: 'XS (< 576px)' },
  { key: 'sm', label: 'SM (≥ 576px)' },
  { key: 'md', label: 'MD (≥ 768px)' },
  { key: 'lg', label: 'LG (≥ 992px)' },
  { key: 'xl', label: 'XL (≥ 1200px)' },
  { key: 'xxl', label: 'XXL (≥ 1400px)' }
]

const offsetBreakpoints = [
  { key: 'xs', label: 'デフォルト (xs)' },
  { key: 'md', label: 'MD (≥ 768px)' },
  { key: 'lg', label: 'LG (≥ 992px)' }
]

const selectedRow = computed(() => {
  return props.rows.find((r) => r.id === selectedRowId.value) || null
})

const selectedColumn = computed(() => {
  if (!selectedRow.value) return null
  return selectedRow.value.columns.find((c) => c.id === selectedColumnId.value) || null
})

const selectedColumnIndex = computed(() => {
  if (!selectedRow.value || !selectedColumn.value) return -1
  return selectedRow.value.columns.findIndex((c) => c.id === selectedColumnId.value)
})

const previewClasses = computed(() => {
  if (!editingColumn.value) return ''
  return props.generateColumnClasses(editingColumn.value)
})

// Column選択時に編集用データをコピー
watch(selectedColumn, (newColumn) => {
  if (newColumn) {
    editingColumn.value = JSON.parse(JSON.stringify(newColumn))
  } else {
    editingColumn.value = null
  }
})

// Row選択が変わったらColumnをリセット
watch(selectedRowId, () => {
  selectedColumnId.value = null
})

const applyChanges = () => {
  if (!editingColumn.value || !selectedRowId.value || !selectedColumnId.value) return

  emit('update-column', {
    rowId: selectedRowId.value,
    columnId: selectedColumnId.value,
    columnData: editingColumn.value
  })
}

const cancelChanges = () => {
  if (selectedColumn.value) {
    editingColumn.value = JSON.parse(JSON.stringify(selectedColumn.value))
  }
}
</script>

<style scoped>
.alert-info {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 8px;
  padding: 12px;
  color: var(--text-primary);
}

.alert-info code {
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.form-select {
  border-color: var(--border-color);
}

.form-select:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 0.2rem rgba(14, 165, 233, 0.25);
}
</style>
