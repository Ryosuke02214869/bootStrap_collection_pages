# Bootstrap 5 学習ページ - ページ詳細計画

## 全体構成

### ホームページ
- Bootstrap 5学習ページのトップページ
- 各カテゴリへのナビゲーション
- クイックスタートガイド

---

## A. レイアウト系ページ

### 1. Grid System（グリッドシステム）

#### 1-1. Grid System - サンプルページ
**URL**: `/layout/grid-samples`

**内容**:
- Bootstrap Grid Systemの基本概念説明
- 12カラムグリッドの仕組み
- 基本的なグリッドレイアウトのサンプル集
  - 等幅カラム（col）
  - 固定幅カラム（col-4, col-6等）
  - 混合レイアウト
  - ネストされたグリッド
- レスポンシブグリッドの例
  - sm, md, lg, xl, xxlブレークポイント
- コードサンプル表示
- 実装パターンの説明

**学習目標**:
- Bootstrapのグリッドシステムの基本を理解する
- よくあるレイアウトパターンを学ぶ

---

#### 1-2. Grid System - GUIレイアウトビルダー ⭐
**URL**: `/layout/grid-builder`

**目的**: インタラクティブにグリッドレイアウトを構築し、リアルタイムでプレビューしながら学習できるツール

**主要機能（詳細を詰める必要あり）**:

##### 基本機能
- [ ] Row（行）の追加/削除
- [ ] Column（列）の追加/削除/並び替え
- [ ] リアルタイムプレビュー
- [ ] 生成されたHTMLコードの表示とコピー機能

##### Column設定機能
**カラム幅の設定**:
- [ ] デフォルト（xs）: `col-1` ～ `col-12`
- [ ] Small (sm): `col-sm-1` ～ `col-sm-12`
- [ ] Medium (md): `col-md-1` ～ `col-md-12`
- [ ] Large (lg): `col-lg-1` ～ `col-lg-12`
- [ ] Extra Large (xl): `col-xl-1` ～ `col-xl-12`
- [ ] Extra Extra Large (xxl): `col-xxl-1` ～ `col-xxl-12`
- [ ] Auto width: `col-auto`, `col-sm-auto`等

**Offset設定**:
- [ ] `offset-1` ～ `offset-11`
- [ ] レスポンシブoffset: `offset-sm-*`, `offset-md-*`等

**Order設定**:
- [ ] `order-first`, `order-last`
- [ ] `order-0` ～ `order-5`
- [ ] レスポンシブorder: `order-sm-*`, `order-md-*`等

##### Row設定機能
**Gutter（余白）設定**:
- [ ] `g-0`, `g-1`, `g-2`, `g-3`, `g-4`, `g-5`
- [ ] 水平のみ: `gx-0` ～ `gx-5`
- [ ] 垂直のみ: `gy-0` ～ `gy-5`
- [ ] レスポンシブgutter: `g-sm-*`, `g-md-*`等

**Alignment設定**:
- [ ] Vertical alignment（垂直配置）:
  - `align-items-start`
  - `align-items-center`
  - `align-items-end`
- [ ] Horizontal alignment（水平配置）:
  - `justify-content-start`
  - `justify-content-center`
  - `justify-content-end`
  - `justify-content-around`
  - `justify-content-between`
  - `justify-content-evenly`

**Column wrapping**:
- [ ] `flex-wrap` / `flex-nowrap`

##### プレビュー機能
- [ ] **デスクトッププレビュー**: フル幅での表示
- [ ] **レスポンシブプレビュー**:
  - モバイル（xs: < 576px）
  - タブレット（sm: ≥576px, md: ≥768px）
  - デスクトップ（lg: ≥992px, xl: ≥1200px, xxl: ≥1400px）
- [ ] **ブレークポイント切り替え**: ボタンまたはスライダーで画面幅を変更
- [ ] **グリッドガイド表示**: グリッド線の表示/非表示切り替え

##### コード生成機能
- [ ] **HTMLコード生成**: 設定したグリッドのHTMLコードを自動生成
- [ ] **Vue Component生成**: Vueコンポーネント形式でのコード生成（オプション）
- [ ] **コピー機能**: ワンクリックでクリップボードにコピー
- [ ] **コードハイライト**: シンタックスハイライト付きで表示

##### UI/UX
- [ ] **サイドパネル**: 設定用のサイドバーまたはドロワー
- [ ] **ドラッグ&ドロップ**: カラムの順序変更（検討中）
- [ ] **プリセット**: よくあるレイアウトパターンのテンプレート
  - 2カラムレイアウト（8:4）
  - 3カラムレイアウト（4:4:4）
  - サイドバーレイアウト（3:9）
  - ヘッダー・コンテンツ・フッターレイアウト
- [ ] **リセット機能**: 設定を初期状態に戻す
- [ ] **保存/読み込み**: 設定をローカルストレージに保存（検討中）

##### 学習支援機能
- [ ] **ツールチップ**: 各設定項目にヘルプ表示
- [ ] **リアルタイムクラス名表示**: 適用されているBootstrapクラスをハイライト
- [ ] **比較モード**: 異なるブレークポイントでの表示を並べて比較

**技術的な検討事項**:
```
Q1. UIライブラリの選択
- Bootstrap本体のフォームコンポーネントを使用？
- カスタムVueコンポーネントで構築？

Q2. 状態管理
- Composition APIのreactive/refのみ？
- Pinia等の状態管理ライブラリが必要？

Q3. プレビューの実装方法
- iframeを使用？
- CSSのtransformでスケール？
- 実際にコンテナ幅を変更？

Q4. コードハイライト
- Prism.js？
- highlight.js？
- Shiki？

Q5. ドラッグ&ドロップの実装
- Vue Draggable？
- ネイティブHTML5 Drag and Drop API？
- 実装するか見送るか？
```

**優先実装機能（MVP）**:
1. Row/Columnの追加/削除
2. カラム幅設定（デフォルトとレスポンシブ）
3. リアルタイムプレビュー
4. HTMLコード生成とコピー
5. ブレークポイント切り替え

**後回し/オプション機能**:
- ドラッグ&ドロップ
- 保存/読み込み機能
- Vue Component生成
- 高度なアニメーション

---

### 2. Container & Breakpoints（コンテナとブレークポイント）
**URL**: `/layout/containers`

**内容**:
- Container, Container-fluid, Container-{breakpoint}の違い
- Breakpointの仕組み
- レスポンシブデザインの基礎
- 各コンテナタイプのサンプル
- コードサンプル

---

### 3. Flexbox Utilities（Flexboxユーティリティ）
**URL**: `/layout/flexbox`

**内容**:
- Bootstrapのflexユーティリティクラス一覧
- `d-flex`, `flex-row`, `flex-column`
- `justify-content-*`, `align-items-*`, `align-self-*`
- `flex-wrap`, `flex-fill`, `flex-grow-*`, `flex-shrink-*`
- 実用的なレイアウト例
- コードサンプル

---

## B. コンポーネント系 - 基本

### 4. Buttons（ボタン）
**URL**: `/components/buttons`

**内容**:
- ボタンのバリエーション（primary, secondary, success等）
- サイズ（sm, lg）
- アウトライン、リンク、ブロック
- ボタングループ
- トグルボタン
- コードサンプル

### 5. Cards（カード）
**URL**: `/components/cards`

**内容**:
- 基本的なカード
- ヘッダー、フッター、画像付きカード
- カードグループ、デッキ、カラム
- カードレイアウトのバリエーション
- コードサンプル

### 6. Badges（バッジ）
**URL**: `/components/badges`

**内容**:
- バッジのカラーバリエーション
- ピルバッジ
- ボタンと組み合わせた使用例
- コードサンプル

### 7. Alerts（アラート）
**URL**: `/components/alerts`

**内容**:
- アラートのカラーバリエーション
- アイコン付きアラート
- 閉じるボタン付きアラート
- Vueでの動的表示制御
- コードサンプル

### 8. Progress Bars（プログレスバー）
**URL**: `/components/progress`

**内容**:
- 基本的なプログレスバー
- ラベル付き、ストライプ、アニメーション
- 複数のプログレスバー
- Vueでの動的な値変更
- コードサンプル

---

## C. コンポーネント系 - フォーム

### 9. Forms（基本フォーム）
**URL**: `/components/forms`

**内容**:
- テキスト入力、テキストエリア
- セレクト、チェックボックス、ラジオボタン
- フォームレイアウト
- Floating labels
- Vueでのv-model連携
- コードサンプル

### 10. Input Groups（入力グループ）
**URL**: `/components/input-groups`

**内容**:
- アドオン付き入力
- ボタン付き入力
- ドロップダウン付き入力
- サイズバリエーション
- コードサンプル

### 11. Form Validation（フォームバリデーション）
**URL**: `/components/form-validation`

**内容**:
- Bootstrapのバリデーションスタイル
- カスタムバリデーション
- Vueでのバリデーション実装
- エラーメッセージ表示
- コードサンプル

---

## D. コンポーネント系 - ナビゲーション

### 12. Navbar（ナビゲーションバー）
**URL**: `/components/navbar`

**内容**:
- 基本的なナビゲーションバー
- ブランド、ナビゲーションリンク
- ドロップダウン統合
- レスポンシブナビゲーション（ハンバーガーメニュー）
- Vue Routerとの統合
- コードサンプル

### 13. Breadcrumb（パンくずリスト）
**URL**: `/components/breadcrumb`

**内容**:
- 基本的なパンくずリスト
- アイコン付き
- Vue Routerと連携した動的生成
- コードサンプル

### 14. Pagination（ページネーション）
**URL**: `/components/pagination`

**内容**:
- 基本的なページネーション
- サイズバリエーション
- アクティブ、無効化状態
- Vueでの動的ページネーション実装
- コードサンプル

### 15. Tabs（タブ）
**URL**: `/components/tabs`

**内容**:
- 基本的なタブ
- ピルタブ
- 縦タブ
- Vueでのタブ制御
- コードサンプル

---

## E. コンポーネント系 - JavaScript必須

### 16. Modal（モーダル）
**URL**: `/components/modal`

**内容**:
- Bootstrap本来の使い方（data-bs-*属性）
- BootstrapVueNextを使った実装
- Vue Composition APIで直接制御
- サイズバリエーション
- スクロール可能なモーダル
- 実装パターンの比較
- コードサンプル

### 17. Dropdown（ドロップダウン）
**URL**: `/components/dropdown`

**内容**:
- Bootstrap本来の使い方
- BootstrapVueNextを使った実装
- Vue的な実装
- ドロップダウンのバリエーション
- メニューの位置調整
- 実装パターンの比較
- コードサンプル

### 18. Tooltip（ツールチップ）
**URL**: `/components/tooltip`

**内容**:
- Bootstrap本来の使い方
- Vueディレクティブでの実装
- 位置、トリガーの設定
- 動的なツールチップ
- 実装パターンの比較
- コードサンプル

### 19. Popover（ポップオーバー）
**URL**: `/components/popover`

**内容**:
- Bootstrap本来の使い方
- Vueでの実装
- 位置、トリガーの設定
- 動的なコンテンツ
- 実装パターンの比較
- コードサンプル

### 20. Collapse/Accordion（アコーディオン）
**URL**: `/components/collapse`

**内容**:
- 基本的なCollapse
- アコーディオンの実装
- Bootstrap本来の使い方
- Vueでの実装（v-ifとtransition）
- 実装パターンの比較
- コードサンプル

### 21. Carousel（カルーセル）
**URL**: `/components/carousel`

**内容**:
- 基本的なカルーセル
- インジケーター、コントロール
- キャプション付き
- Bootstrap本来の使い方
- Vueでの実装
- 実装パターンの比較
- コードサンプル

### 22. Offcanvas（オフキャンバス）
**URL**: `/components/offcanvas`

**内容**:
- 基本的なオフキャンバス
- 位置バリエーション（top, right, bottom, left）
- バックドロップ設定
- Bootstrap本来の使い方
- Vueでの実装
- 実装パターンの比較
- コードサンプル

---

## F. ユーティリティ系

### 23. Colors（カラー）
**URL**: `/utilities/colors`

**内容**:
- テキストカラー
- 背景カラー
- グラデーション
- カラーパレット一覧
- コードサンプル

### 24. Spacing（スペーシング）
**URL**: `/utilities/spacing`

**内容**:
- マージン、パディングの仕組み
- m-*, p-*クラスの使い方
- レスポンシブスペーシング
- 実用例
- コードサンプル

### 25. Typography（タイポグラフィ）
**URL**: `/utilities/typography`

**内容**:
- 見出し（h1-h6）
- Display見出し
- テキストサイズ、太さ、スタイル
- テキスト配置
- コードサンプル

### 26. Borders（ボーダー）
**URL**: `/utilities/borders`

**内容**:
- ボーダーの追加/削除
- ボーダーカラー
- ボーダー幅
- 角丸（rounded）
- コードサンプル

### 27. Shadows（シャドウ）
**URL**: `/utilities/shadows`

**内容**:
- シャドウのバリエーション
- カスタムシャドウ
- 実用例
- コードサンプル

---

## 優先度設定

### Phase 1（必須 - 最初に実装）
1. ✅ ホームページ
2. ✅ Grid System - サンプルページ
3. ✅ Container & Breakpoints
4. ✅ Buttons
5. ✅ Cards

### Phase 2（重要 - 次に実装）
6. ✅ Grid System - GUIレイアウトビルダー ⭐
7. ✅ Navbar
8. ✅ Modal
9. ✅ Forms
10. ✅ Colors
11. ✅ Spacing

### Phase 3（推奨 - 余裕があれば）
12. ⏳ Flexbox Utilities
13. ⏳ Alerts
14. ⏳ Dropdown
15. ⏳ Tabs
16. ⏳ Collapse/Accordion
17. ⏳ Form Validation

### Phase 4（オプション - 時間があれば）
18. ⏳ Badges
19. ⏳ Progress Bars
20. ⏳ Tooltip
21. ⏳ Popover
22. ⏳ Carousel
23. ⏳ Offcanvas
24. ⏳ Input Groups
25. ⏳ Breadcrumb
26. ⏳ Pagination
27. ⏳ Typography
28. ⏳ Borders
29. ⏳ Shadows

---

## 共通要素

すべてのページに共通して含める要素:

1. **ページタイトルとブレッドクラム**
2. **目次（ページ内ナビゲーション）**
3. **コンポーネント/ユーティリティの説明**
4. **インタラクティブなデモ/プレビュー**
5. **コードサンプル**（HTMLとVueの両方）
6. **実装パターンの比較**（JavaScript機能の場合）
7. **関連ページへのリンク**
8. **Bootstrap公式ドキュメントへのリンク**

---

## 次に決めること（GUIレイアウトビルダー）

以下の点について詳細を決定する必要があります:

### 1. UI設計
- [ ] レイアウト: サイドパネル型？タブ型？
- [ ] 設定UIの具体的なデザイン（スライダー、ドロップダウン、ボタン等）
- [ ] プレビューエリアの配置と大きさ

### 2. 機能の優先順位
- [ ] MVP（最小限の実装）に含める機能の最終決定
- [ ] 段階的に追加する機能の順序

### 3. 技術選定
- [ ] コードハイライトライブラリ
- [ ] ドラッグ&ドロップの実装可否
- [ ] 状態管理の方法

### 4. UX詳細
- [ ] デフォルトのレイアウト（最初に表示される状態）
- [ ] プリセットの具体的な内容
- [ ] エラーハンドリング（矛盾した設定をした場合等）

### 5. 学習支援機能
- [ ] チュートリアルの有無
- [ ] ツールチップの内容
- [ ] ヘルプセクションの必要性
