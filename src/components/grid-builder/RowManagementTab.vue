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
      <div class="row-info small mb-2" style="color: var(--text-secondary)">
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
            class="column-item-container mb-2"
          >
            <!-- Column ヘッダー -->
            <div
              @click="toggleColumnExpand(row.id, column.id)"
              class="column-item-header"
              style="
                background: var(--bg-secondary);
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.875rem;
                cursor: pointer;
                user-select: none;
              "
            >
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-2">
                  <span>{{ isColumnExpanded(row.id, column.id) ? '▼' : '▶' }}</span>
                  <span style="color: var(--text-primary); font-weight: 500">
                    Col {{ colIndex + 1 }}
                  </span>
                  <span class="small" style="color: var(--text-secondary)">
                    {{ formatColumnWidth(column) }}
                  </span>
                </div>
                <button
                  @click.stop="$emit('delete-column', row.id, column.id)"
                  class="btn btn-sm btn-outline-danger"
                  style="padding: 0 8px; font-size: 0.75rem"
                >
                  ×
                </button>
              </div>
            </div>

            <!-- Column 編集エリア（展開時） -->
            <div v-if="isColumnExpanded(row.id, column.id)" class="column-edit-area mt-2 p-3" style="background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color)">
              <h4 class="small fw-bold mb-2" style="color: var(--text-primary)">カラム幅設定</h4>
              <div class="row g-2">
                <div class="col-6 col-md-4 col-lg-2" v-for="bp in breakpoints" :key="bp.key">
                  <label class="form-label small mb-1" style="font-size: 0.75rem">{{ bp.label }}</label>
                  <input
                    type="number"
                    :value="column.width[bp.key] === 'auto' ? '' : column.width[bp.key]"
                    @input="updateColumnWidth(row.id, column.id, bp.key, $event.target.value)"
                    min="1"
                    max="12"
                    class="form-control form-control-sm"
                    :placeholder="column.width[bp.key] === 'auto' ? 'auto' : ''"
                  />
                </div>
              </div>
              <div class="mt-2 small" style="color: var(--text-secondary)">
                💡 1-12の数値を入力、または空欄で自動幅
              </div>
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
import { ref } from 'vue'

const props = defineProps({
  rows: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add-row', 'delete-row', 'move-row-up', 'move-row-down', 'add-column', 'delete-column', 'update-column'])

// 展開されたカラムを管理
const expandedColumns = ref(new Set())

const breakpoints = [
  { key: 'xs', label: 'XS' },
  { key: 'sm', label: 'SM' },
  { key: 'md', label: 'MD' },
  { key: 'lg', label: 'LG' },
  { key: 'xl', label: 'XL' },
  { key: 'xxl', label: 'XXL' }
]

const formatColumnWidth = (column) => {
  const widths = Object.entries(column.width)
    .filter(([breakpoint, size]) => size && size !== 12)
    .map(([breakpoint, size]) => {
      if (breakpoint === 'xs') return `col-${size}`
      return `col-${breakpoint}-${size}`
    })
  return widths.length > 0 ? widths.join(' ') : 'col-12'
}

const toggleColumnExpand = (rowId, columnId) => {
  const key = `${rowId}-${columnId}`
  if (expandedColumns.value.has(key)) {
    expandedColumns.value.delete(key)
  } else {
    expandedColumns.value.add(key)
  }
}

const isColumnExpanded = (rowId, columnId) => {
  return expandedColumns.value.has(`${rowId}-${columnId}`)
}

const updateColumnWidth = (rowId, columnId, breakpoint, value) => {
  const row = props.rows.find((r) => r.id === rowId)
  if (!row) return

  const column = row.columns.find((c) => c.id === columnId)
  if (!column) return

  // 空文字の場合は12、数値の場合はそのまま
  const numValue = value === '' ? 12 : parseInt(value)

  // 1-12の範囲チェック
  if (numValue < 1 || numValue > 12) return

  // Columnデータをコピーして更新
  const updatedColumn = {
    ...column,
    width: {
      ...column.width,
      [breakpoint]: numValue
    }
  }

  emit('update-column', {
    rowId,
    columnId,
    columnData: updatedColumn
  })
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

.column-item-header {
  transition: background 0.2s ease;
}

.column-item-header:hover {
  background: var(--bg-primary) !important;
}

.column-edit-area {
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-control-sm {
  border-color: var(--border-color);
}

.form-control-sm:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 0.2rem rgba(14, 165, 233, 0.25);
}
</style>
