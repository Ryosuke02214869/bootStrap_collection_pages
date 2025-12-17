<template>
  <div class="grid-preview">
    <!-- ブレークポイント切り替え -->
    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
      <div class="btn-group btn-group-sm" role="group">
        <button
          v-for="bp in breakpoints"
          :key="bp.value"
          @click="currentBreakpoint = bp.value"
          :class="['btn', currentBreakpoint === bp.value ? 'btn-primary' : 'btn-outline-secondary']"
          style="min-width: 80px"
        >
          {{ bp.icon }} {{ bp.label }}
        </button>
      </div>

      <div class="form-check form-check-inline">
        <input
          v-model="showGridLines"
          type="checkbox"
          class="form-check-input"
          id="gridLinesCheck"
        />
        <label class="form-check-label small" for="gridLinesCheck">グリッド線表示</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          v-model="showClassNames"
          type="checkbox"
          class="form-check-input"
          id="classNamesCheck"
        />
        <label class="form-check-label small" for="classNamesCheck">クラス名表示</label>
      </div>
    </div>

    <!-- プレビューエリア -->
    <div
      class="preview-container"
      :style="{
        maxWidth: currentBreakpoint === 'xs' ? '400px' : currentBreakpoint === 'sm' ? '576px' : currentBreakpoint === 'md' ? '768px' : currentBreakpoint === 'lg' ? '992px' : currentBreakpoint === 'xl' ? '1200px' : '100%',
        margin: '0 auto',
        transition: 'all 0.3s ease'
      }"
    >
      <div :class="[containerType, { 'grid-lines': showGridLines }]">
        <!-- Rowがない場合 -->
        <div v-if="rows.length === 0" class="empty-state">
          <p style="color: var(--text-secondary); text-align: center; padding: 40px">
            Rowを追加してください
          </p>
        </div>

        <!-- Rows -->
        <div v-for="(row, rowIndex) in rows" :key="row.id" :class="getRowClasses(row)" class="mb-3">
          <!-- Columnがない場合 -->
          <div v-if="row.columns.length === 0" class="col-12">
            <div class="preview-col-empty">このRowにはColumnがありません</div>
          </div>

          <!-- Columns -->
          <div
            v-for="(column, colIndex) in row.columns"
            :key="column.id"
            :class="getColumnClasses(column)"
          >
            <div class="preview-col">
              <div class="preview-col-content">
                <span class="preview-col-label">Col {{ colIndex + 1 }}</span>
                <span v-if="showClassNames" class="preview-col-classes">
                  {{ getColumnClasses(column) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 現在のブレークポイント情報 -->
    <div class="mt-3 text-center small" style="color: var(--text-secondary)">
      現在のプレビュー:
      {{
        breakpoints.find((b) => b.value === currentBreakpoint)?.label || currentBreakpoint
      }}
      ({{ breakpoints.find((b) => b.value === currentBreakpoint)?.description }})
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  rows: {
    type: Array,
    required: true
  },
  containerType: {
    type: String,
    default: 'container'
  },
  generateRowClasses: {
    type: Function,
    required: true
  },
  generateColumnClasses: {
    type: Function,
    required: true
  }
})

const currentBreakpoint = ref('lg')
const showGridLines = ref(false)
const showClassNames = ref(true)

const breakpoints = [
  { value: 'xs', label: 'Mobile', icon: '📱', description: '< 576px' },
  { value: 'sm', label: 'Tablet', icon: '📱', description: '≥ 576px' },
  { value: 'md', label: 'Tablet', icon: '💻', description: '≥ 768px' },
  { value: 'lg', label: 'Desktop', icon: '💻', description: '≥ 992px' },
  { value: 'xl', label: 'Desktop', icon: '🖥️', description: '≥ 1200px' },
  { value: 'xxl', label: 'Wide', icon: '🖥️', description: '≥ 1400px' }
]

const getRowClasses = (row) => {
  return props.generateRowClasses(row)
}

const getColumnClasses = (column) => {
  return props.generateColumnClasses(column)
}
</script>

<style scoped>
.preview-container {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  min-height: 200px;
}

.grid-lines {
  background-image: repeating-linear-gradient(
      90deg,
      rgba(14, 165, 233, 0.1) 0,
      rgba(14, 165, 233, 0.1) 1px,
      transparent 1px,
      transparent calc(100% / 12)
    ),
    repeating-linear-gradient(
      0deg,
      rgba(14, 165, 233, 0.1) 0,
      rgba(14, 165, 233, 0.1) 1px,
      transparent 1px,
      transparent 40px
    );
  background-size: 100% 100%;
}

.preview-col {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 8px;
  padding: 16px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-col-content {
  text-align: center;
  color: white;
}

.preview-col-label {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

.preview-col-classes {
  display: block;
  font-size: 0.75rem;
  opacity: 0.9;
  font-family: 'Consolas', 'Monaco', monospace;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 4px;
}

.preview-col-empty {
  background: var(--bg-secondary);
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: var(--text-secondary);
}

.empty-state {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: var(--primary-blue);
  border-color: var(--primary-blue);
  color: white;
}

.btn-outline-secondary {
  border-color: var(--border-color);
  color: var(--text-secondary);
  background: var(--bg-card);
}

.btn-outline-secondary:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.form-check-input:checked {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
}
</style>
