# Bootstrap 5 学習ページの技術選定と実装方針

## 採用する技術スタック

**Vue + Vue Router + Bootstrap 5**

### 選定理由
1. ルーティング機能により複数ページの管理が容易
2. コンポーネント化により再利用性が高い
3. 学習コンテンツとして、Bootstrapの使い方とVueとの統合方法の両方を示せる
4. Viteによるセットアップが簡単

## デメリットと対策

### 1. ビルド環境のセットアップ

**必要なもの：**
- Node.js / npm
- Vite（バンドラー）
- 開発サーバー

**対策：**
`npm create vue@latest` コマンドで自動セットアップが可能なため、実際の手間は少ない

### 2. Bootstrap 5のJavaScript機能との統合

**問題が起きる機能：**
- Modal（モーダルダイアログ）
- Dropdown（ドロップダウンメニュー）
- Tooltip / Popover
- Collapse（アコーディオン）
- Carousel（カルーセル）

**問題の原因：**
Bootstrap の `data-bs-*` 属性を使った方法が、Vueの動的なDOM更新と競合する可能性がある

## 実装方針

### 基本方針
- 通常は **BootstrapVueNext** や **Vue的なアプローチ** を使う
- Bootstrap本来の使い方を説明するページでは、そのページだけ特別な対応をする
- 両方の実装パターンを示すことで、学習コンテンツとしての価値を高める

### 解決策

#### 1. BootstrapVueNext を使う（推奨）
```bash
npm install bootstrap-vue-next
```
Vueコンポーネントとして Bootstrap の機能を使用

#### 2. Bootstrap JavaScript を直接制御する
```javascript
import { Modal } from 'bootstrap'

// Vueコンポーネント内
const showModal = () => {
  const modalElement = document.getElementById('myModal')
  const modal = new Modal(modalElement)
  modal.show()
}
```

#### 3. CSSのみを使う
```javascript
// Bootstrap の CSS だけインポート
import 'bootstrap/dist/css/bootstrap.min.css'
```
JavaScript機能が必要な部分はVue側で実装（例：`v-if`でモーダル制御）

## 実装例

### 特定のコンポーネントでのみ直接制御
```vue
<template>
  <div>
    <h2>Bootstrap Modal の基本的な使い方</h2>
    <button @click="showModal" class="btn btn-primary">
      モーダルを開く
    </button>
    
    <div ref="modalRef" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- モーダルの内容 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Modal } from 'bootstrap'

const modalRef = ref(null)
let modalInstance = null

onMounted(() => {
  // Vueがマウントされた後にBootstrapのインスタンスを作成
  modalInstance = new Modal(modalRef.value)
})

onUnmounted(() => {
  // コンポーネント破棄時にクリーンアップ
  if (modalInstance) {
    modalInstance.dispose()
  }
})

const showModal = () => {
  modalInstance.show()
}
</script>
```

### data-bs-*属性を使った例を示すページ
```vue
<template>
  <div>
    <h2>data-bs-*属性を使った方法（HTML的な使い方）</h2>
    <div v-html="sampleCode" ref="sampleContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sampleCode = `
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    モーダルを開く
  </button>
  <div class="modal fade" id="exampleModal">
    <!-- ... -->
  </div>
`

const sampleContainer = ref(null)

onMounted(() => {
  // この部分だけBootstrapのJavaScriptを初期化
  // 必要に応じて処理を追加
})
</script>
```

## 推奨ページ構成
```
/components
  ├─ BootstrapModal.vue      # Bootstrap本来の使い方の例
  └─ VueModal.vue            # Vueでの実装例
  
/pages
  ├─ ModalBasic.vue          # 基本的な使い方（data-bs-*を使用）
  ├─ ModalVue.vue            # Vueでの使い方
  └─ ModalComparison.vue     # 比較ページ
```

## メリット

1. **学習コンテンツとしての充実**
   - Bootstrap公式ドキュメント通りの使い方を示せる
   - Vue環境での推奨される使い方を示せる
   - 両方の違いと使い分けを学べる

2. **技術的な問題の回避**
   - ページごとに適切な実装方法を選択できる
   - ライフサイクル管理を適切に行える

3. **拡張性**
   - 必要に応じて新しいコンポーネントやページを追加しやすい
   - コンポーネントの再利用が容易

## セットアップ手順
```bash
# プロジェクト作成
npm create vue@latest

# 依存関係のインストール
cd project-name
npm install

# Bootstrap 5 のインストール
npm install bootstrap

# BootstrapVueNext のインストール（オプション）
npm install bootstrap-vue-next

# 開発サーバー起動
npm run dev
```