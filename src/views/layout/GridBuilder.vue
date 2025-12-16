<template>
  <div class="min-vh-100">
    <!-- ヘッダー -->
    <header class="glass-card mb-3" style="border-radius: 0 0 24px 24px">
      <div class="container py-3">
        <nav aria-label="breadcrumb" class="mb-2">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <router-link to="/" style="color: var(--primary-blue)">ホーム</router-link>
            </li>
            <li class="breadcrumb-item">
              <span style="color: var(--text-secondary)">レイアウト</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Grid Builder
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🛠️ Grid Builder
        </h1>
        <p class="mb-0 small" style="color: var(--text-secondary)">
          GUIでBootstrapグリッドレイアウトを構築できるインタラクティブツール
        </p>
      </div>
    </header>

    <div class="container-fluid pb-4">
      <!-- 設定セクション（折りたたみ可能） -->
      <section class="glass-card mb-3">
        <div class="p-3">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="h5 mb-0" style="color: var(--text-primary); font-weight: 600">
              ⚙️ 設定
            </h2>
            <button
              @click="settingsSectionCollapsed = !settingsSectionCollapsed"
              class="btn btn-sm btn-outline-secondary"
            >
              {{ settingsSectionCollapsed ? '設定を開く ▶' : '設定を閉じる ▼' }}
            </button>
          </div>
        </div>

        <!-- 設定コンテンツ -->
        <div v-if="!settingsSectionCollapsed" class="border-top">
          <!-- タブ -->
          <ul class="nav nav-tabs px-3 pt-3" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                :class="['nav-link', { active: activeTab === 'rows' }]"
                @click="activeTab = 'rows'"
                type="button"
              >
                Row管理
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                :class="['nav-link', { active: activeTab === 'presets' }]"
                @click="activeTab = 'presets'"
                type="button"
              >
                プリセット
              </button>
            </li>
          </ul>

          <!-- タブコンテンツ -->
          <div class="tab-content p-3">
            <!-- Row管理タブ -->
            <div v-if="activeTab === 'rows'" class="tab-pane active">
              <RowManagementTab
                :rows="state.rows"
                @add-row="addRow"
                @delete-row="deleteRow"
                @move-row-up="moveRowUp"
                @move-row-down="moveRowDown"
                @add-column="addColumn"
                @delete-column="deleteColumn"
              />
            </div>

            <!-- プリセットタブ -->
            <div v-if="activeTab === 'presets'" class="tab-pane active">
              <div class="presets-tab">
                <h3 class="h6 mb-3" style="color: var(--text-primary); font-weight: 600">
                  プリセットから選択
                </h3>
                <div class="row g-3">
                  <div
                    v-for="preset in presets"
                    :key="preset.id"
                    class="col-12 col-md-6 col-lg-4"
                  >
                    <div
                      @click="applyPreset(preset.id)"
                      class="preset-card glass-card p-3"
                      style="cursor: pointer"
                    >
                      <div class="d-flex align-items-center gap-2 mb-2">
                        <span style="font-size: 24px">{{ preset.icon }}</span>
                        <h4 class="h6 mb-0" style="color: var(--text-primary)">
                          {{ preset.title }}
                        </h4>
                      </div>
                      <p class="small mb-0" style="color: var(--text-secondary)">
                        {{ preset.description }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <button @click="resetGrid" class="btn btn-outline-danger">
                    🔄 リセット
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- プレビューセクション -->
      <section class="glass-card p-4 mb-3">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          👁️ プレビュー
        </h2>
        <GridPreview
          :rows="state.rows"
          :container-type="state.settings.containerType"
          :generate-row-classes="generateRowClasses"
          :generate-column-classes="generateColumnClasses"
        />
      </section>

      <!-- コード表示セクション -->
      <section>
        <CodeViewer :html-code="generateHTMLCode" />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGridBuilder } from '../../composables/useGridBuilder'
import RowManagementTab from '../../components/grid-builder/RowManagementTab.vue'
import GridPreview from '../../components/grid-builder/GridPreview.vue'
import CodeViewer from '../../components/grid-builder/CodeViewer.vue'

const {
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
} = useGridBuilder()

const activeTab = ref('rows')

const presets = [
  {
    id: 'two-column-50-50',
    icon: '⚖️',
    title: '2カラム（50:50）',
    description: '均等な2カラムレイアウト'
  },
  {
    id: 'two-column-66-33',
    icon: '📰',
    title: '2カラム（66:33）',
    description: 'メイン＋サイドバー'
  },
  {
    id: 'three-column',
    icon: '🎯',
    title: '3カラム',
    description: '均等な3カラムレイアウト'
  },
  {
    id: 'sidebar-left',
    icon: '📂',
    title: 'サイドバー（左）',
    description: '左サイドバー＋メインコンテンツ'
  },
  {
    id: 'card-grid',
    icon: '🎴',
    title: 'カードグリッド',
    description: '4列のカードグリッド'
  }
]
</script>

<style scoped>
.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '›';
  color: var(--text-secondary);
}

.nav-tabs {
  border-bottom: 2px solid var(--border-color);
}

.nav-tabs .nav-link {
  border: none;
  color: var(--text-secondary);
  padding: 12px 20px;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
}

.nav-tabs .nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
  border-bottom-color: var(--border-color);
}

.nav-tabs .nav-link.active {
  color: var(--primary-blue);
  background: transparent;
  border-bottom-color: var(--primary-blue);
  font-weight: 600;
}

.preset-card {
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.preset-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow-glow);
  border-color: var(--primary-blue);
}
</style>
