# Bootstrap 5 学習ページ - プロジェクト計画

## プロジェクト概要

Vue + Vue Router + Bootstrap 5を使用した、Bootstrap 5の学習用Webページ集を作成する。

## 現在の状態

- ✅ 技術選定完了（TECHNICAL_DESIGN.md参照）
- ⏳ プロジェクトセットアップ待ち
- ⏳ ページ構成の決定待ち

## 技術スタック（確定済み）

- **フレームワーク**: Vue 3
- **ルーティング**: Vue Router
- **UIフレームワーク**: Bootstrap 5
- **ビルドツール**: Vite
- **Vue統合**: BootstrapVueNext（一部のページ）

## フェーズ1: プロジェクトセットアップ

### 1.1 Vueプロジェクトの作成
```bash
npm create vue@latest
```

選択するオプション:
- ✅ TypeScript: No（またはYes - 後で決定）
- ✅ Vue Router: Yes
- ✅ ESLint: Yes（推奨）
- ⏭️ その他のオプションは必要に応じて

### 1.2 依存関係のインストール
```bash
cd bootStrap_collection_pages
npm install
npm install bootstrap
npm install bootstrap-vue-next  # オプション
```

### 1.3 Bootstrap 5の基本設定
- main.jsまたはmain.tsでBootstrapのCSSとJSをインポート
- App.vueの基本レイアウト設定
- ルーター設定の確認

## フェーズ2: ページ構成の決定

### 作成するページカテゴリ（案）

以下から選択・調整が必要:

#### A. レイアウト系
- [ ] Grid System（グリッドシステム）
- [ ] Container & Breakpoints（コンテナとブレークポイント）
- [ ] Flexbox Utilities（Flexboxユーティリティ）

#### B. コンポーネント系 - 基本
- [ ] Buttons（ボタン）
- [ ] Cards（カード）
- [ ] Badges（バッジ）
- [ ] Alerts（アラート）
- [ ] Progress Bars（プログレスバー）

#### C. コンポーネント系 - フォーム
- [ ] Forms（基本フォーム）
- [ ] Input Groups（入力グループ）
- [ ] Form Validation（フォームバリデーション）

#### D. コンポーネント系 - ナビゲーション
- [ ] Navbar（ナビゲーションバー）
- [ ] Breadcrumb（パンくずリスト）
- [ ] Pagination（ページネーション）
- [ ] Tabs（タブ）

#### E. コンポーネント系 - JavaScript必須
- [ ] Modal（モーダル）
- [ ] Dropdown（ドロップダウン）
- [ ] Tooltip（ツールチップ）
- [ ] Popover（ポップオーバー）
- [ ] Collapse/Accordion（アコーディオン）
- [ ] Carousel（カルーセル）
- [ ] Offcanvas（オフキャンバス）

#### F. ユーティリティ系
- [ ] Colors（カラー）
- [ ] Spacing（スペーシング）
- [ ] Typography（タイポグラフィ）
- [ ] Borders（ボーダー）
- [ ] Shadows（シャドウ）

### 優先度の設定

**必須（Phase 2で実装）:**
- TBD

**推奨（Phase 3で実装）:**
- TBD

**オプション（Phase 4で実装）:**
- TBD

## フェーズ3: 基本実装

### 3.1 共通コンポーネントの作成
- [ ] ナビゲーションヘッダー
- [ ] サイドバーメニュー
- [ ] フッター
- [ ] コードサンプル表示コンポーネント

### 3.2 ホームページの作成
- [ ] トップページのデザイン
- [ ] ページ一覧の表示
- [ ] カテゴリ別ナビゲーション

### 3.3 各ページの実装
選択したページごとに:
- [ ] Vue的な実装パターン
- [ ] Bootstrap本来の使い方の例
- [ ] コードサンプルの表示
- [ ] 実装方法の比較・解説

## フェーズ4: Vue統合パターンの実装

JavaScript機能を持つコンポーネントについて:

### 4.1 実装パターンA: BootstrapVueNext
```vue
<BModal v-model="showModal">
  <template #title>モーダルタイトル</template>
  <!-- コンテンツ -->
</BModal>
```

### 4.2 実装パターンB: Bootstrap JS直接制御
```vue
<script setup>
import { Modal } from 'bootstrap'
// ライフサイクル管理を適切に実装
</script>
```

### 4.3 実装パターンC: Vue的アプローチ
```vue
<template>
  <div v-if="showModal" class="modal d-block">
    <!-- v-ifとCSSクラスのみで制御 -->
  </div>
</template>
```

## フェーズ5: ドキュメントとコードサンプル

### 5.1 各ページに含める内容
- [ ] コンポーネントの説明
- [ ] 基本的な使い方
- [ ] 実装パターンの比較
- [ ] インタラクティブなデモ
- [ ] コピー可能なコードサンプル

### 5.2 コードハイライト
- [ ] コードハイライトライブラリの選定（例: Prism.js, highlight.js）
- [ ] コードブロックコンポーネントの作成

## フェーズ6: デプロイと最適化

### 6.1 ビルド最適化
- [ ] 本番用ビルドの確認
- [ ] バンドルサイズの最適化
- [ ] 画像の最適化

### 6.2 デプロイ
- [ ] デプロイ先の決定（GitHub Pages, Netlify, Vercel等）
- [ ] ビルド設定の調整
- [ ] デプロイスクリプトの作成

## ディレクトリ構成（予定）

```
bootStrap_collection_pages/
├── public/
│   └── (静的ファイル)
├── src/
│   ├── assets/
│   │   ├── css/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   ├── Footer.vue
│   │   │   └── CodeBlock.vue
│   │   └── examples/
│   │       ├── bootstrap-native/
│   │       └── vue-integrated/
│   ├── views/
│   │   ├── Home.vue
│   │   ├── layout/
│   │   ├── components/
│   │   ├── forms/
│   │   └── utilities/
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── TECHNICAL_DESIGN.md
├── plan.md
├── package.json
└── vite.config.js
```

## 次のステップ

1. **ページ構成の決定**: フェーズ2のチェックリストから作成するページを選択
2. **優先度の設定**: 必須・推奨・オプションに分類
3. **プロジェクトセットアップ**: Vueプロジェクトの作成と基本設定
4. **実装開始**: 優先度の高いページから順次実装

## 注意事項

- Bootstrap 5のJavaScript機能を使用するページでは、Vueのライフサイクルとの統合に注意
- 各ページで複数の実装パターンを示すことで、学習コンテンツとしての価値を高める
- コードサンプルは実際に動作するものを提供する
- レスポンシブデザインを考慮する
