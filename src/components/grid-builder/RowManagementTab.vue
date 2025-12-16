<template>
  <div class="row-management">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="h6 mb-0" style="color: var(--text-primary); font-weight: 600">Row一覧</h3>
      <button @click="$emit('add-row')" class="btn btn-sm btn-primary-custom">
        + Row追加
      </button>
    </div>

    <div v-if="rows.length === 0" class="alert alert-info">
      Rowがありません。「+ Row追加」ボタンでRowを追加してください。
    </div>

    <div v-for="(row, index) in rows" :key="row.id" class="row-item glass-card p-3 mb-2">
      <div class="d-flex justify-content-between align-items-start mb-2">
        <div class="d-flex align-items-center gap-2">
          <span style="font-weight: 600; color: var(--text-primary)">Row {{ index + 1 }}</span>
          <span class="badge bg-secondary small">{{ row.columns.length }} Columns</span>
        </div>
        <div class="btn-group btn-group-sm">
          <button
            @click="$emit('move-row-up', row.id)"
            :disabled="index === 0"
            class="btn btn-outline-secondary"
            title="上へ"
          >
            ↑
          </button>
          <button
            @click="$emit('move-row-down', row.id)"
            :disabled="index === rows.length - 1"
            class="btn btn-outline-secondary"
            title="下へ"
          >
            ↓
          </button>
          <button @click="$emit('delete-row', row.id)" class="btn btn-outline-danger" title="削除">
            ×
          </button>
        </div>
      </div>

      <!-- Row設定情報 -->
      <div class="row-info small" style="color: var(--text-secondary)">
        <div>
          <strong>Gutter:</strong> {{ row.gutter }} | <strong>Align:</strong>
          {{ row.alignItems }} |
          <strong>Justify:</strong> {{ row.justifyContent }}
        </div>
      </div>

      <!-- Column一覧 -->
      <div v-if="row.columns.length > 0" class="mt-2">
        <div class="columns-list">
          <div
            v-for="(column, colIndex) in row.columns"
            :key="column.id"
            class="column-item"
            style="
              background: var(--bg-secondary);
              padding: 8px 12px;
              border-radius: 6px;
              margin-bottom: 4px;
              font-size: 0.875rem;
            "
          >
            <div class="d-flex justify-content-between align-items-center">
              <span style="color: var(--text-primary)">
                Col {{ colIndex + 1 }}: {{ formatColumnWidth(column) }}
              </span>
              <button
                @click="$emit('delete-column', row.id, column.id)"
                class="btn btn-sm btn-outline-danger"
                style="padding: 0 8px; font-size: 0.75rem"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Column追加ボタン -->
      <button
        @click="$emit('add-column', row.id)"
        class="btn btn-sm btn-outline-primary w-100 mt-2"
      >
        + Column追加
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rows: {
    type: Array,
    required: true
  }
})

defineEmits(['add-row', 'delete-row', 'move-row-up', 'move-row-down', 'add-column', 'delete-column'])

const formatColumnWidth = (column) => {
  const widths = Object.entries(column.width)
    .filter(([breakpoint, size]) => size && size !== 12)
    .map(([breakpoint, size]) => {
      if (breakpoint === 'xs') return `col-${size}`
      return `col-${breakpoint}-${size}`
    })
  return widths.length > 0 ? widths.join(' ') : 'col-12'
}
</script>

<style scoped>
.row-item {
  transition: all 0.2s ease;
}

.row-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-glow);
}

.btn-outline-secondary,
.btn-outline-danger,
.btn-outline-primary {
  font-size: 0.875rem;
}

.btn-outline-secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.alert-info {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 8px;
  padding: 12px;
  color: var(--text-primary);
}
</style>
