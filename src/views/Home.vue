<template>
  <div class="min-vh-100">
    <!-- ヘッダー -->
    <header class="glass-card mb-5" style="border-radius: 0 0 24px 24px">
      <div class="container py-5">
        <div class="text-center">
          <div
            class="d-inline-flex align-items-center justify-content-center mb-3"
            style="
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
              border-radius: 20px;
              color: white;
              font-weight: bold;
              font-size: 32px;
            "
          >
            B5
          </div>
          <h1 class="display-4 fw-bold mb-3" style="color: var(--text-primary)">
            Bootstrap 5 学習ページ
          </h1>
          <p class="lead" style="color: var(--text-secondary); max-width: 600px; margin: 0 auto">
            Bootstrap 5の各コンポーネントとユーティリティを学べる実践的なサンプル集です。<br />
            各ページでは実装例とコードサンプルを確認できます。
          </p>
        </div>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <div class="container pb-5">
      <!-- レイアウト系 -->
      <section class="mb-5">
        <h2 class="h3 mb-4 d-flex align-items-center gap-2" style="color: var(--text-primary)">
          <span
            class="d-inline-flex align-items-center justify-content-center"
            style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #667eea, #764ba2);
              border-radius: 10px;
              font-size: 20px;
            "
          >
            📐
          </span>
          <span class="fw-bold">レイアウト</span>
        </h2>
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="page in layoutPages" :key="page.path">
            <router-link :to="page.path" class="text-decoration-none">
              <div class="page-card glass-card p-4 h-100">
                <div class="d-flex align-items-start gap-3">
                  <span class="page-icon">{{ page.icon }}</span>
                  <div>
                    <h3 class="h6 fw-bold mb-2" style="color: var(--text-primary)">
                      {{ page.title }}
                    </h3>
                    <p class="small mb-0" style="color: var(--text-secondary)">
                      {{ page.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- コンポーネント系 - 基本 -->
      <section class="mb-5">
        <h2 class="h3 mb-4 d-flex align-items-center gap-2" style="color: var(--text-primary)">
          <span
            class="d-inline-flex align-items-center justify-content-center"
            style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #f093fb, #f5576c);
              border-radius: 10px;
              font-size: 20px;
            "
          >
            🧩
          </span>
          <span class="fw-bold">コンポーネント - 基本</span>
        </h2>
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="page in basicComponents" :key="page.path">
            <router-link :to="page.path" class="text-decoration-none">
              <div class="page-card glass-card p-4 h-100">
                <div class="d-flex align-items-start gap-3">
                  <span class="page-icon">{{ page.icon }}</span>
                  <div>
                    <h3 class="h6 fw-bold mb-2" style="color: var(--text-primary)">
                      {{ page.title }}
                    </h3>
                    <p class="small mb-0" style="color: var(--text-secondary)">
                      {{ page.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- コンポーネント系 - フォーム -->
      <section class="mb-5">
        <h2 class="h3 mb-4 d-flex align-items-center gap-2" style="color: var(--text-primary)">
          <span
            class="d-inline-flex align-items-center justify-content-center"
            style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #fa709a, #fee140);
              border-radius: 10px;
              font-size: 20px;
            "
          >
            📝
          </span>
          <span class="fw-bold">フォーム</span>
        </h2>
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="page in formComponents" :key="page.path">
            <router-link :to="page.path" class="text-decoration-none">
              <div class="page-card glass-card p-4 h-100">
                <div class="d-flex align-items-start gap-3">
                  <span class="page-icon">{{ page.icon }}</span>
                  <div>
                    <h3 class="h6 fw-bold mb-2" style="color: var(--text-primary)">
                      {{ page.title }}
                    </h3>
                    <p class="small mb-0" style="color: var(--text-secondary)">
                      {{ page.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- コンポーネント系 - ナビゲーション -->
      <section class="mb-5">
        <h2 class="h3 mb-4 d-flex align-items-center gap-2" style="color: var(--text-primary)">
          <span
            class="d-inline-flex align-items-center justify-content-center"
            style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #30cfd0, #330867);
              border-radius: 10px;
              font-size: 20px;
            "
          >
            🧭
          </span>
          <span class="fw-bold">ナビゲーション</span>
        </h2>
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="page in navigationComponents" :key="page.path">
            <router-link :to="page.path" class="text-decoration-none">
              <div class="page-card glass-card p-4 h-100">
                <div class="d-flex align-items-start gap-3">
                  <span class="page-icon">{{ page.icon }}</span>
                  <div>
                    <h3 class="h6 fw-bold mb-2" style="color: var(--text-primary)">
                      {{ page.title }}
                    </h3>
                    <p class="small mb-0" style="color: var(--text-secondary)">
                      {{ page.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- コンポーネント系 - JavaScript必須 -->
      <section class="mb-5">
        <h2 class="h3 mb-4 d-flex align-items-center gap-2" style="color: var(--text-primary)">
          <span
            class="d-inline-flex align-items-center justify-content-center"
            style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #0ea5e9, #06b6d4);
              border-radius: 10px;
              font-size: 20px;
            "
          >
            ⚡
          </span>
          <span class="fw-bold">JavaScript機能</span>
        </h2>
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="page in jsComponents" :key="page.path">
            <router-link :to="page.path" class="text-decoration-none">
              <div class="page-card glass-card p-4 h-100">
                <div class="d-flex align-items-start gap-3">
                  <span class="page-icon">{{ page.icon }}</span>
                  <div>
                    <h3 class="h6 fw-bold mb-2" style="color: var(--text-primary)">
                      {{ page.title }}
                    </h3>
                    <p class="small mb-0" style="color: var(--text-secondary)">
                      {{ page.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- ユーティリティ系 -->
      <section class="mb-5">
        <h2 class="h3 mb-4 d-flex align-items-center gap-2" style="color: var(--text-primary)">
          <span
            class="d-inline-flex align-items-center justify-content-center"
            style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #10b981, #059669);
              border-radius: 10px;
              font-size: 20px;
            "
          >
            🎨
          </span>
          <span class="fw-bold">ユーティリティ</span>
        </h2>
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="page in utilityPages" :key="page.path">
            <router-link :to="page.path" class="text-decoration-none">
              <div class="page-card glass-card p-4 h-100">
                <div class="d-flex align-items-start gap-3">
                  <span class="page-icon">{{ page.icon }}</span>
                  <div>
                    <h3 class="h6 fw-bold mb-2" style="color: var(--text-primary)">
                      {{ page.title }}
                    </h3>
                    <p class="small mb-0" style="color: var(--text-secondary)">
                      {{ page.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </div>

    <!-- フッター -->
    <footer class="glass-card mt-5 py-4" style="border-radius: 24px 24px 0 0">
      <div class="container text-center">
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5 学習ページ | Vue 3 + Vite + Bootstrap 5
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const layoutPages = ref([
  {
    path: '/layout/grid-samples',
    icon: '📊',
    title: 'Grid System - サンプル',
    description: 'Bootstrapグリッドシステムの基本とサンプル集'
  },
  {
    path: '/layout/grid-builder',
    icon: '🛠️',
    title: 'Grid Builder',
    description: 'GUIでグリッドレイアウトを構築できるツール'
  },
  {
    path: '/layout/containers',
    icon: '📦',
    title: 'Container & Breakpoints',
    description: 'コンテナとブレークポイントの使い方'
  },
  {
    path: '/layout/flexbox',
    icon: '↔️',
    title: 'Flexbox Utilities',
    description: 'Flexboxユーティリティクラス'
  }
])

const basicComponents = ref([
  {
    path: '/components/buttons',
    icon: '🔘',
    title: 'Buttons',
    description: 'ボタンのスタイルとバリエーション'
  },
  {
    path: '/components/cards',
    icon: '🎴',
    title: 'Cards',
    description: 'カードコンポーネントの使い方'
  },
  {
    path: '/components/badges',
    icon: '🏷️',
    title: 'Badges',
    description: 'バッジとラベル'
  },
  {
    path: '/components/alerts',
    icon: '⚠️',
    title: 'Alerts',
    description: 'アラートメッセージ'
  },
  {
    path: '/components/progress',
    icon: '📊',
    title: 'Progress Bars',
    description: 'プログレスバー'
  }
])

const formComponents = ref([
  {
    path: '/components/forms',
    icon: '📝',
    title: 'Forms',
    description: '基本的なフォーム要素'
  },
  {
    path: '/components/input-groups',
    icon: '🔤',
    title: 'Input Groups',
    description: '入力グループとアドオン'
  },
  {
    path: '/components/form-validation',
    icon: '✓',
    title: 'Form Validation',
    description: 'フォームバリデーション'
  }
])

const navigationComponents = ref([
  {
    path: '/components/navbar',
    icon: '🧭',
    title: 'Navbar',
    description: 'ナビゲーションバー'
  },
  {
    path: '/components/breadcrumb',
    icon: '🍞',
    title: 'Breadcrumb',
    description: 'パンくずリスト'
  },
  {
    path: '/components/pagination',
    icon: '📄',
    title: 'Pagination',
    description: 'ページネーション'
  },
  {
    path: '/components/tabs',
    icon: '📑',
    title: 'Tabs',
    description: 'タブナビゲーション'
  }
])

const jsComponents = ref([
  {
    path: '/components/modal',
    icon: '🪟',
    title: 'Modal',
    description: 'モーダルダイアログ'
  },
  {
    path: '/components/dropdown',
    icon: '▼',
    title: 'Dropdown',
    description: 'ドロップダウンメニュー'
  },
  {
    path: '/components/tooltip',
    icon: '💬',
    title: 'Tooltip',
    description: 'ツールチップ'
  },
  {
    path: '/components/popover',
    icon: '💭',
    title: 'Popover',
    description: 'ポップオーバー'
  },
  {
    path: '/components/collapse',
    icon: '📁',
    title: 'Collapse / Accordion',
    description: 'アコーディオンとコラプス'
  },
  {
    path: '/components/carousel',
    icon: '🎠',
    title: 'Carousel',
    description: 'カルーセル（スライダー）'
  },
  {
    path: '/components/offcanvas',
    icon: '🗂️',
    title: 'Offcanvas',
    description: 'オフキャンバスメニュー'
  }
])

const utilityPages = ref([
  {
    path: '/utilities/colors',
    icon: '🎨',
    title: 'Colors',
    description: 'カラーユーティリティ'
  },
  {
    path: '/utilities/spacing',
    icon: '📏',
    title: 'Spacing',
    description: 'マージンとパディング'
  },
  {
    path: '/utilities/typography',
    icon: '🔤',
    title: 'Typography',
    description: 'タイポグラフィ'
  },
  {
    path: '/utilities/borders',
    icon: '⬜',
    title: 'Borders',
    description: 'ボーダーと角丸'
  },
  {
    path: '/utilities/shadows',
    icon: '🌑',
    title: 'Shadows',
    description: 'シャドウエフェクト'
  }
])
</script>

<style scoped>
.page-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.page-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px var(--shadow-glow);
}

.page-icon {
  font-size: 28px;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

a {
  color: inherit;
}
</style>
