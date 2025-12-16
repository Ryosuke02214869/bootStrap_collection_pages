import { ref, computed } from 'vue'

// Grid Builderの状態管理
export function useGridBuilder() {
  // グリッドの状態
  const state = ref({
    settings: {
      containerType: 'container',
      showGridLines: false,
      showClassNames: true,
      currentBreakpoint: 'lg'
    },
    rows: [
      {
        id: Date.now(),
        gutter: 'g-3',
        alignItems: 'start',
        justifyContent: 'start',
        columns: [
          {
            id: Date.now() + 1,
            width: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 },
            offset: { xs: 0, md: 0, lg: 0 },
            order: { xs: 0 }
          },
          {
            id: Date.now() + 2,
            width: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 },
            offset: { xs: 0, md: 0, lg: 0 },
            order: { xs: 0 }
          }
        ]
      }
    ]
  })

  // 設定セクションの折りたたみ状態
  const settingsSectionCollapsed = ref(false)

  // Row操作
  const addRow = () => {
    const newRow = {
      id: Date.now(),
      gutter: 'g-3',
      alignItems: 'start',
      justifyContent: 'start',
      columns: []
    }
    state.value.rows.push(newRow)
  }

  const deleteRow = (rowId) => {
    const index = state.value.rows.findIndex((r) => r.id === rowId)
    if (index !== -1) {
      state.value.rows.splice(index, 1)
    }
  }

  const moveRowUp = (rowId) => {
    const index = state.value.rows.findIndex((r) => r.id === rowId)
    if (index > 0) {
      const temp = state.value.rows[index]
      state.value.rows[index] = state.value.rows[index - 1]
      state.value.rows[index - 1] = temp
    }
  }

  const moveRowDown = (rowId) => {
    const index = state.value.rows.findIndex((r) => r.id === rowId)
    if (index !== -1 && index < state.value.rows.length - 1) {
      const temp = state.value.rows[index]
      state.value.rows[index] = state.value.rows[index + 1]
      state.value.rows[index + 1] = temp
    }
  }

  // Column操作
  const addColumn = (rowId) => {
    const row = state.value.rows.find((r) => r.id === rowId)
    if (!row) return

    const newColumn = {
      id: Date.now(),
      width: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 },
      offset: { xs: 0, md: 0, lg: 0 },
      order: { xs: 0 }
    }
    row.columns.push(newColumn)
  }

  const deleteColumn = (rowId, columnId) => {
    const row = state.value.rows.find((r) => r.id === rowId)
    if (!row) return

    const index = row.columns.findIndex((c) => c.id === columnId)
    if (index !== -1) {
      row.columns.splice(index, 1)
    }
  }

  // Bootstrapクラス名生成
  const generateColumnClasses = (column) => {
    const classes = []

    // Width classes
    Object.entries(column.width).forEach(([breakpoint, size]) => {
      if (size === 'auto') {
        classes.push(breakpoint === 'xs' ? 'col-auto' : `col-${breakpoint}-auto`)
      } else if (size !== 12 || breakpoint === 'xs') {
        classes.push(breakpoint === 'xs' ? `col-${size}` : `col-${breakpoint}-${size}`)
      }
    })

    // Offset classes
    Object.entries(column.offset).forEach(([breakpoint, size]) => {
      if (size > 0) {
        classes.push(breakpoint === 'xs' ? `offset-${size}` : `offset-${breakpoint}-${size}`)
      }
    })

    // Order classes
    Object.entries(column.order).forEach(([breakpoint, order]) => {
      if (order === 'first' || order === 'last') {
        classes.push(breakpoint === 'xs' ? `order-${order}` : `order-${breakpoint}-${order}`)
      } else if (order > 0) {
        classes.push(breakpoint === 'xs' ? `order-${order}` : `order-${breakpoint}-${order}`)
      }
    })

    return classes.join(' ')
  }

  // Rowクラス名生成
  const generateRowClasses = (row) => {
    const classes = ['row']

    if (row.gutter) {
      classes.push(row.gutter)
    }

    if (row.alignItems && row.alignItems !== 'start') {
      classes.push(`align-items-${row.alignItems}`)
    }

    if (row.justifyContent && row.justifyContent !== 'start') {
      classes.push(`justify-content-${row.justifyContent}`)
    }

    return classes.join(' ')
  }

  // HTMLコード生成
  const generateHTMLCode = computed(() => {
    const containerClass = state.value.settings.containerType
    let html = `<div class="${containerClass}">\n`

    state.value.rows.forEach((row) => {
      const rowClasses = generateRowClasses(row)
      html += `  <div class="${rowClasses}">\n`

      row.columns.forEach((column) => {
        const colClasses = generateColumnClasses(column)
        html += `    <div class="${colClasses}">\n`
        html += `      Column content\n`
        html += `    </div>\n`
      })

      html += `  </div>\n`
    })

    html += `</div>`

    return html
  })

  // プリセット適用
  const applyPreset = (presetName) => {
    const presets = {
      'two-column-50-50': {
        rows: [
          {
            id: Date.now(),
            gutter: 'g-3',
            alignItems: 'start',
            justifyContent: 'start',
            columns: [
              {
                id: Date.now() + 1,
                width: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 2,
                width: { xs: 12, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              }
            ]
          }
        ]
      },
      'two-column-66-33': {
        rows: [
          {
            id: Date.now(),
            gutter: 'g-3',
            alignItems: 'start',
            justifyContent: 'start',
            columns: [
              {
                id: Date.now() + 1,
                width: { xs: 12, sm: 12, md: 8, lg: 8, xl: 8, xxl: 8 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 2,
                width: { xs: 12, sm: 12, md: 4, lg: 4, xl: 4, xxl: 4 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              }
            ]
          }
        ]
      },
      'three-column': {
        rows: [
          {
            id: Date.now(),
            gutter: 'g-3',
            alignItems: 'start',
            justifyContent: 'start',
            columns: [
              {
                id: Date.now() + 1,
                width: { xs: 12, sm: 12, md: 4, lg: 4, xl: 4, xxl: 4 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 2,
                width: { xs: 12, sm: 12, md: 4, lg: 4, xl: 4, xxl: 4 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 3,
                width: { xs: 12, sm: 12, md: 4, lg: 4, xl: 4, xxl: 4 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              }
            ]
          }
        ]
      },
      'sidebar-left': {
        rows: [
          {
            id: Date.now(),
            gutter: 'g-4',
            alignItems: 'start',
            justifyContent: 'start',
            columns: [
              {
                id: Date.now() + 1,
                width: { xs: 12, sm: 12, md: 3, lg: 3, xl: 3, xxl: 3 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 2,
                width: { xs: 12, sm: 12, md: 9, lg: 9, xl: 9, xxl: 9 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              }
            ]
          }
        ]
      },
      'card-grid': {
        rows: [
          {
            id: Date.now(),
            gutter: 'g-3',
            alignItems: 'start',
            justifyContent: 'start',
            columns: [
              {
                id: Date.now() + 1,
                width: { xs: 12, sm: 6, md: 6, lg: 3, xl: 3, xxl: 3 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 2,
                width: { xs: 12, sm: 6, md: 6, lg: 3, xl: 3, xxl: 3 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 3,
                width: { xs: 12, sm: 6, md: 6, lg: 3, xl: 3, xxl: 3 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              },
              {
                id: Date.now() + 4,
                width: { xs: 12, sm: 6, md: 6, lg: 3, xl: 3, xxl: 3 },
                offset: { xs: 0, md: 0, lg: 0 },
                order: { xs: 0 }
              }
            ]
          }
        ]
      }
    }

    if (presets[presetName]) {
      state.value.rows = presets[presetName].rows
    }
  }

  // リセット
  const resetGrid = () => {
    state.value.rows = [
      {
        id: Date.now(),
        gutter: 'g-3',
        alignItems: 'start',
        justifyContent: 'start',
        columns: []
      }
    ]
  }

  return {
    state,
    settingsSectionCollapsed,
    addRow,
    deleteRow,
    moveRowUp,
    moveRowDown,
    addColumn,
    deleteColumn,
    generateColumnClasses,
    generateRowClasses,
    generateHTMLCode,
    applyPreset,
    resetGrid
  }
}
