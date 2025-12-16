<template>
  <div class="d-flex">
    <!-- サイドバー -->
    <div class="sidebar p-4" style="width: 280px;">
      <div class="mb-4 d-flex align-items-center gap-2">
        <div
          class="d-flex align-items-center justify-content-center"
          style="
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
            border-radius: 10px;
            color: white;
            font-weight: bold;
          "
        >
          SY
        </div>
        <span class="h5 mb-0" style="color: var(--text-primary); font-weight: 600">System</span>
      </div>

      <nav class="mt-4">
        <a href="#" class="sidebar-item active">
          <span>📊</span>
          <span>ダッシュボード</span>
        </a>
        <a href="#" class="sidebar-item">
          <span>📈</span>
          <span>アナリティクス</span>
        </a>
        <a href="#" class="sidebar-item">
          <span>👥</span>
          <span>ユーザー管理</span>
        </a>
        <a href="#" class="sidebar-item">
          <span>⚙️</span>
          <span>設定</span>
        </a>
        <a href="#" class="sidebar-item">
          <span>📁</span>
          <span>ファイル</span>
        </a>
      </nav>
    </div>

    <!-- メインコンテンツ -->
    <div class="flex-grow-1 p-4" style="overflow-y: auto; height: 100vh">
      <!-- ヘッダー -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h2 mb-0" style="color: var(--text-primary); font-weight: 700">
          ダッシュボード
        </h1>
        <div class="d-flex gap-3 align-items-center">
          <input
            type="search"
            class="form-control"
            placeholder="検索..."
            style="
              width: 300px;
              border: 1px solid var(--border-color);
              border-radius: 10px;
              background: var(--bg-card);
            "
          />
          <button class="btn btn-primary-custom px-4" style="border-radius: 10px">
            新規作成
          </button>
        </div>
      </div>

      <!-- 統計カード -->
      <div class="row g-4 mb-4">
        <div class="col-12 col-sm-6 col-lg-3" v-for="stat in stats" :key="stat.id">
          <div class="stat-card">
            <div class="d-flex justify-content-between align-items-start">
              <div
                class="stat-icon"
                :style="{ background: `linear-gradient(135deg, ${stat.color1}, ${stat.color2})` }"
              >
                <span style="filter: brightness(0) invert(1)">{{ stat.icon }}</span>
              </div>
              <span :class="['stat-change', stat.changeType]">
                {{ stat.change }}
              </span>
            </div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- グラフとアクティビティ -->
      <div class="row g-4">
        <!-- パフォーマンス推移 -->
        <div class="col-12 col-lg-8">
          <div class="glass-card p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h3 class="h5 mb-0" style="color: var(--text-primary); font-weight: 600">
                パフォーマンス推移
              </h3>
              <div class="btn-group btn-group-sm" role="group">
                <button type="button" class="btn btn-outline-secondary">日</button>
                <button type="button" class="btn btn-outline-secondary active">週</button>
                <button type="button" class="btn btn-outline-secondary">月</button>
                <button type="button" class="btn btn-outline-secondary">年</button>
              </div>
            </div>
            <div class="text-center py-5" style="color: var(--text-secondary)">
              <p>チャートデータを表示</p>
              <small>ここにChart.jsなどのグラフライブラリを統合できます</small>
            </div>
          </div>
        </div>

        <!-- 最近のアクティビティ -->
        <div class="col-12 col-lg-4">
          <div class="glass-card p-4">
            <h3 class="h5 mb-4" style="color: var(--text-primary); font-weight: 600">
              最近のアクティビティ
            </h3>
            <div v-for="activity in activities" :key="activity.id" class="activity-item">
              <div
                class="activity-icon"
                :style="{
                  background: `linear-gradient(135deg, ${activity.color1}, ${activity.color2})`
                }"
              >
                <span style="filter: brightness(0) invert(1)">{{ activity.icon }}</span>
              </div>
              <div class="activity-content">
                <div class="activity-title">{{ activity.title }}</div>
                <div class="activity-time">{{ activity.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  {
    id: 1,
    icon: '👤',
    value: '2,845',
    label: 'アクティブユーザー',
    change: '↑ 12%',
    changeType: 'positive',
    color1: '#667eea',
    color2: '#764ba2'
  },
  {
    id: 2,
    icon: '💰',
    value: '¥1.2M',
    label: '月間収益',
    change: '↑ 8%',
    changeType: 'positive',
    color1: '#f093fb',
    color2: '#f5576c'
  },
  {
    id: 3,
    icon: '📦',
    value: '156',
    label: '処理中のタスク',
    change: '↓ 3%',
    changeType: 'negative',
    color1: '#fa709a',
    color2: '#fee140'
  },
  {
    id: 4,
    icon: '⚡',
    value: '98.5%',
    label: 'システム稼働率',
    change: '↑ 18%',
    changeType: 'positive',
    color1: '#30cfd0',
    color2: '#330867'
  }
])

const activities = ref([
  {
    id: 1,
    icon: '✓',
    title: '新規ユーザー登録',
    time: '2分前',
    color1: '#0ea5e9',
    color2: '#06b6d4'
  },
  {
    id: 2,
    icon: '📄',
    title: 'レポート生成完了',
    time: '15分前',
    color1: '#8b5cf6',
    color2: '#a855f7'
  },
  {
    id: 3,
    icon: '⚠️',
    title: 'システムアラート',
    time: '1時間前',
    color1: '#f59e0b',
    color2: '#f97316'
  },
  {
    id: 4,
    icon: '↻',
    title: 'データ同期完了',
    time: '3時間前',
    color1: '#10b981',
    color2: '#059669'
  }
])
</script>

<style scoped>
.btn-group .btn {
  border-radius: 8px;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.btn-group .btn.active {
  background: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
}

.btn-outline-secondary {
  background: var(--bg-card);
}

.btn-outline-secondary:hover {
  background: var(--bg-secondary);
}
</style>
