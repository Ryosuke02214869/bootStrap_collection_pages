<template>
  <div class="min-vh-100">
    <!-- ヘッダー -->
    <header class="glass-card mb-4" style="border-radius: 0 0 24px 24px">
      <div class="container py-4">
        <nav aria-label="breadcrumb" class="mb-3">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <router-link to="/" style="color: var(--primary-blue)">ホーム</router-link>
            </li>
            <li class="breadcrumb-item">
              <span style="color: var(--text-secondary)">レイアウト</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Container & Breakpoints
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📦 Container & Breakpoints
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のコンテナとブレークポイントの仕組み
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 概要 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          Containerとは
        </h2>
        <p style="color: var(--text-secondary)">
          Containerは、Bootstrap
          5のレイアウトの基礎となる要素です。コンテンツを中央に配置し、適切な余白を提供します。
          画面サイズに応じて自動的に幅が調整され、レスポンシブデザインを実現します。
        </p>
        <div class="row g-3 mt-3">
          <div class="col-12 col-md-4">
            <div class="p-3" style="background: var(--bg-secondary); border-radius: 12px">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">📦 Container</h3>
              <p class="small mb-0" style="color: var(--text-secondary)">
                レスポンシブな固定幅コンテナ。ブレークポイントごとに最大幅が設定される
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-3" style="background: var(--bg-secondary); border-radius: 12px">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">🌊 Container-fluid</h3>
              <p class="small mb-0" style="color: var(--text-secondary)">
                全幅コンテナ。画面の幅いっぱいに広がる
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-3" style="background: var(--bg-secondary); border-radius: 12px">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">🎯 Container-{bp}</h3>
              <p class="small mb-0" style="color: var(--text-secondary)">
                指定したブレークポイントまでは全幅、それ以降は固定幅
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Containerの種類 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. Containerの種類と違い
        </h2>
        <p style="color: var(--text-secondary)" class="mb-4">
          Bootstrapには3種類のコンテナがあります。それぞれの特徴と使い分けを理解しましょう。
          <strong>グレーの背景が画面全体の範囲です。</strong>
        </p>

        <!-- .container -->
        <div class="mb-4">
          <h3 class="h5 mb-2" style="color: var(--text-primary)">
            <code>.container</code> - レスポンシブな固定幅
          </h3>
          <p class="small mb-3" style="color: var(--text-secondary)">
            各ブレークポイントで最大幅が設定されます。中央揃えで表示され、<strong>左右に余白</strong>が生まれます。
          </p>
        </div>
        <div class="demo-wrapper mb-4">
          <div class="container demo-container-fixed">
            <div class="demo-content">
              <div class="demo-label">.container</div>
              <div class="demo-width-info">固定幅 + 左右余白あり</div>
            </div>
          </div>
        </div>

        <!-- .container-fluid -->
        <div class="mb-4">
          <h3 class="h5 mb-2" style="color: var(--text-primary)">
            <code>.container-fluid</code> - 全幅
          </h3>
          <p class="small mb-3" style="color: var(--text-secondary)">
            画面の幅いっぱいに広がります。<strong>左右の余白は最小限</strong>（パディングのみ）です。
          </p>
        </div>
        <div class="demo-wrapper mb-4">
          <div class="container-fluid demo-container-fluid">
            <div class="demo-content">
              <div class="demo-label">.container-fluid</div>
              <div class="demo-width-info">画面幅100% + 余白なし</div>
            </div>
          </div>
        </div>

        <!-- .container-{breakpoint} -->
        <div class="mb-4">
          <h3 class="h5 mb-2" style="color: var(--text-primary)">
            <code>.container-md</code> - ブレークポイント指定
          </h3>
          <p class="small mb-3" style="color: var(--text-secondary)">
            指定したブレークポイント（この例ではmd: 768px）までは全幅、それ以降は固定幅になります。
          </p>
        </div>
        <div class="demo-wrapper mb-4">
          <div class="container-md demo-container-breakpoint">
            <div class="demo-content">
              <div class="demo-label">.container-md</div>
              <div class="demo-width-info">md未満: 全幅 / md以上: 固定幅</div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- レスポンシブな固定幅 --&gt;
&lt;div class="container"&gt;
  コンテンツ
&lt;/div&gt;

&lt;!-- 全幅 --&gt;
&lt;div class="container-fluid"&gt;
  コンテンツ
&lt;/div&gt;

&lt;!-- ブレークポイント指定 --&gt;
&lt;div class="container-sm"&gt;Small以上で固定幅&lt;/div&gt;
&lt;div class="container-md"&gt;Medium以上で固定幅&lt;/div&gt;
&lt;div class="container-lg"&gt;Large以上で固定幅&lt;/div&gt;
&lt;div class="container-xl"&gt;Extra Large以上で固定幅&lt;/div&gt;
&lt;div class="container-xxl"&gt;Extra Extra Large以上で固定幅&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Containerの最大幅 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. Containerの最大幅
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.container</code>は、各ブレークポイントで以下の最大幅が設定されます。
        </p>

        <div class="table-responsive">
          <table class="table table-bordered">
            <thead style="background: var(--bg-secondary)">
              <tr>
                <th>ブレークポイント</th>
                <th>画面幅</th>
                <th>.container の最大幅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>xs</code></td>
                <td>&lt; 576px</td>
                <td>100% (全幅)</td>
              </tr>
              <tr>
                <td><code>sm</code></td>
                <td>≥ 576px</td>
                <td>540px</td>
              </tr>
              <tr>
                <td><code>md</code></td>
                <td>≥ 768px</td>
                <td>720px</td>
              </tr>
              <tr>
                <td><code>lg</code></td>
                <td>≥ 992px</td>
                <td>960px</td>
              </tr>
              <tr>
                <td><code>xl</code></td>
                <td>≥ 1200px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <td><code>xxl</code></td>
                <td>≥ 1400px</td>
                <td>1320px</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li>
              <code>.container</code>は、画面幅がブレークポイントより大きくなると、固定の最大幅に制限されます
            </li>
            <li>
              <code>.container-fluid</code>は、常に画面幅の100%（パディングを除く）になります
            </li>
            <li>
              <code>.container-{breakpoint}</code>は、指定したブレークポイント未満では100%、以上では固定幅になります
            </li>
          </ul>
        </div>
      </section>

      <!-- ブレークポイントの仕組み -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. ブレークポイントの仕組み
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ブレークポイントは、レスポンシブデザインの基礎となる画面幅の境界点です。
          Bootstrapは6つのブレークポイントを定義しており、これらを使ってデバイスごとに最適なレイアウトを作成できます。
        </p>

        <div class="row g-3">
          <div class="col-12 col-md-6">
            <div class="breakpoint-card">
              <div class="breakpoint-icon">📱</div>
              <h3 class="h6 mb-2">Extra Small (xs)</h3>
              <p class="small mb-1"><strong>&lt; 576px</strong></p>
              <p class="small text-muted mb-0">スマートフォン縦向き</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="breakpoint-card">
              <div class="breakpoint-icon">📱</div>
              <h3 class="h6 mb-2">Small (sm)</h3>
              <p class="small mb-1"><strong>≥ 576px</strong></p>
              <p class="small text-muted mb-0">スマートフォン横向き</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="breakpoint-card">
              <div class="breakpoint-icon">💻</div>
              <h3 class="h6 mb-2">Medium (md)</h3>
              <p class="small mb-1"><strong>≥ 768px</strong></p>
              <p class="small text-muted mb-0">タブレット</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="breakpoint-card">
              <div class="breakpoint-icon">💻</div>
              <h3 class="h6 mb-2">Large (lg)</h3>
              <p class="small mb-1"><strong>≥ 992px</strong></p>
              <p class="small text-muted mb-0">小型デスクトップ</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="breakpoint-card">
              <div class="breakpoint-icon">🖥️</div>
              <h3 class="h6 mb-2">Extra Large (xl)</h3>
              <p class="small mb-1"><strong>≥ 1200px</strong></p>
              <p class="small text-muted mb-0">デスクトップ</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="breakpoint-card">
              <div class="breakpoint-icon">🖥️</div>
              <h3 class="h6 mb-2">Extra Extra Large (xxl)</h3>
              <p class="small mb-1"><strong>≥ 1400px</strong></p>
              <p class="small text-muted mb-0">大型デスクトップ</p>
            </div>
          </div>
        </div>

        <!-- CSSメディアクエリ -->
        <div class="mt-4">
          <h3 class="h5 mb-3" style="color: var(--text-primary)">CSSメディアクエリ</h3>
          <div class="code-box">
            <pre><code class="language-css">/* Extra Small (デフォルト、メディアクエリ不要) */
/* 0px ~ 575px */

/* Small devices (横向きスマートフォン, 576px以上) */
@media (min-width: 576px) { ... }

/* Medium devices (タブレット, 768px以上) */
@media (min-width: 768px) { ... }

/* Large devices (デスクトップ, 992px以上) */
@media (min-width: 992px) { ... }

/* Extra Large devices (大型デスクトップ, 1200px以上) */
@media (min-width: 1200px) { ... }

/* Extra Extra Large devices (超大型デスクトップ, 1400px以上) */
@media (min-width: 1400px) { ... }</code></pre>
          </div>
        </div>
      </section>

      <!-- レスポンシブデザインの基礎 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. レスポンシブデザインの基礎
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Containerとブレークポイントを組み合わせることで、デバイスに最適なレイアウトを実現できます。
        </p>

        <h3 class="h5 mb-3" style="color: var(--text-primary)">モバイルファースト</h3>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapは「モバイルファースト」の設計思想を採用しています。
          まず小さい画面向けのスタイルを定義し、画面が大きくなるにつれてスタイルを追加していきます。
        </p>

        <div class="code-box mb-4">
          <pre><code class="language-html">&lt;!-- モバイル: 縦1列、タブレット: 横2列、デスクトップ: 横3列 --&gt;
&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-12 col-md-6 col-lg-4"&gt;
      カラム 1
    &lt;/div&gt;
    &lt;div class="col-12 col-md-6 col-lg-4"&gt;
      カラム 2
    &lt;/div&gt;
    &lt;div class="col-12 col-md-6 col-lg-4"&gt;
      カラム 3
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>

        <h3 class="h5 mb-3" style="color: var(--text-primary)">実践例</h3>
        <div class="preview-box">
          <div class="container-fluid">
            <div class="row g-3">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="preview-col">
                  col-12<br />col-md-6<br />col-lg-4
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="preview-col">
                  col-12<br />col-md-6<br />col-lg-4
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="preview-col">
                  col-12<br />col-md-6<br />col-lg-4
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 解説:</strong>
          <ul class="mb-0 mt-2">
            <li><strong>モバイル (xs):</strong> <code>col-12</code> で100%幅（縦1列）</li>
            <li><strong>タブレット (md):</strong> <code>col-md-6</code> で50%幅（横2列）</li>
            <li><strong>デスクトップ (lg):</strong> <code>col-lg-4</code> で約33%幅（横3列）</li>
          </ul>
        </div>
      </section>

      <!-- 使い分けガイド -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. Containerの使い分けガイド
        </h2>

        <div class="row g-3">
          <div class="col-12">
            <div class="usage-card">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">
                <code>.container</code>を使う場合
              </h3>
              <ul class="small mb-0" style="color: var(--text-secondary)">
                <li>一般的なページコンテンツ（記事、ブログ投稿など）</li>
                <li>読みやすさを重視したい場合（横幅を制限して行の長さを適切に保つ）</li>
                <li>左右に余白を持たせて中央寄せにしたいコンテンツ</li>
              </ul>
            </div>
          </div>
          <div class="col-12">
            <div class="usage-card">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">
                <code>.container-fluid</code>を使う場合
              </h3>
              <ul class="small mb-0" style="color: var(--text-secondary)">
                <li>画面いっぱいに表示したいダッシュボード</li>
                <li>大きな画像やビデオを全幅で表示する場合</li>
                <li>管理画面やデータテーブルなど、広いスペースが必要な場合</li>
              </ul>
            </div>
          </div>
          <div class="col-12">
            <div class="usage-card">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">
                <code>.container-{breakpoint}</code>を使う場合
              </h3>
              <ul class="small mb-0" style="color: var(--text-secondary)">
                <li>モバイルでは全幅、デスクトップでは固定幅にしたい場合</li>
                <li>段階的にレイアウトを変更したい場合</li>
                <li>特定の画面サイズ以上で余白を持たせたい場合</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          次のステップ
        </h2>
        <div class="d-flex flex-column gap-2">
          <router-link
            to="/layout/grid-samples"
            class="btn btn-primary-custom d-inline-flex align-items-center gap-2"
            style="width: fit-content"
          >
            <span>📊</span>
            <span>Grid Systemサンプルを見る</span>
          </router-link>
          <router-link
            to="/layout/grid-builder"
            class="btn btn-primary-custom d-inline-flex align-items-center gap-2"
            style="width: fit-content"
          >
            <span>🛠️</span>
            <span>Grid Builderで実際に試す</span>
          </router-link>
          <a
            href="https://getbootstrap.com/docs/5.3/layout/containers/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/github.css'

// 言語サポートを登録
hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)

onMounted(() => {
  // すべてのコードブロックにハイライトを適用
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
})
</script>

<style scoped>
/* デモラッパー - 画面全体の範囲を示す */
.demo-wrapper {
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
  padding: 30px 0;
  border-radius: 12px;
  position: relative;
  overflow: visible;
  border: 2px solid #9ca3af;
}

.demo-wrapper::before {
  content: '← 画面全体の範囲 →';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: #6b7280;
  font-weight: 600;
  background: white;
  padding: 2px 12px;
  border-radius: 12px;
  border: 1px solid #9ca3af;
}

/* .container デモ */
.demo-container-fixed {
  background: rgba(14, 165, 233, 0.15);
  border: 3px solid var(--primary-blue);
  border-radius: 8px;
  position: relative;
}

.demo-container-fixed::before,
.demo-container-fixed::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 5px,
    rgba(239, 68, 68, 0.3) 5px,
    rgba(239, 68, 68, 0.3) 10px
  );
  border: 2px dashed #ef4444;
}

.demo-container-fixed::before {
  left: -23px;
}

.demo-container-fixed::after {
  right: -23px;
}

/* .container-fluid デモ */
.demo-container-fluid {
  background: rgba(34, 197, 94, 0.15);
  border: 3px solid #22c55e;
  border-radius: 8px;
  position: relative;
}

/* .container-md デモ */
.demo-container-breakpoint {
  background: rgba(168, 85, 247, 0.15);
  border: 3px solid #a855f7;
  border-radius: 8px;
  position: relative;
}

.demo-content {
  padding: 40px 20px;
  text-align: center;
}

.demo-label {
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-family: 'Consolas', 'Monaco', monospace;
}

.demo-width-info {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* プレビューボックス */
.preview-box {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}

/* プレビューカラム */
.preview-col {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* コードボックス */
.code-box {
  background: #f6f8fa;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.code-box pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}

.code-box code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
}

/* テーブル */
.table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.table th {
  font-weight: 600;
  color: var(--text-primary);
}

.table td {
  color: var(--text-secondary);
}

.table code {
  background: rgba(14, 165, 233, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
  color: var(--primary-blue);
}

/* ブレークポイントカード */
.breakpoint-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.breakpoint-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px var(--shadow-glow);
}

.breakpoint-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

/* 使い分けカード */
.usage-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid var(--primary-blue);
}

.usage-card ul {
  padding-left: 20px;
  margin-top: 10px;
}

.usage-card li {
  margin-bottom: 8px;
}

/* ブレッドクラム */
.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '›';
  color: var(--text-secondary);
}

.breadcrumb-item a {
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

/* アラート */
.alert-info {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 12px;
  color: var(--text-primary);
}

.alert-info code {
  background: rgba(14, 165, 233, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
}

.alert-info ul {
  padding-left: 20px;
}

/* ボタン */
.btn-outline-primary {
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-2px);
}
</style>
