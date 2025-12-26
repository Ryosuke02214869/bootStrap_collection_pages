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
              <span style="color: var(--text-secondary)">コンポーネント</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Cards
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🎴 Cards
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のカードコンポーネントの使い方とバリエーション
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なカード -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なカード
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          カードは柔軟で拡張可能なコンテンツコンテナです。ヘッダー、フッター、様々なコンテンツオプションを含めることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Card title&lt;/h5&gt;
    &lt;p class="card-text"&gt;Some quick example text...&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ヘッダーとフッター付きカード -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. ヘッダーとフッター付きカード
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.card-header</code>と<code>.card-footer</code>でヘッダーとフッターを追加できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <div class="card">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">2 days ago</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;Featured&lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Special title treatment&lt;/h5&gt;
    &lt;p class="card-text"&gt;With supporting text below...&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="card-footer text-muted"&gt;2 days ago&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 画像付きカード -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 画像付きカード
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.card-img-top</code>でカードの上部に画像を配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card">
                <svg
                  class="card-img-top"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text
                    x="50%"
                    y="50%"
                    fill="#dee2e6"
                    dy=".3em"
                    text-anchor="middle"
                    font-size="24"
                  >
                    Image cap
                  </text>
                </svg>
                <div class="card-body">
                  <h5 class="card-title">Card with image</h5>
                  <p class="card-text">
                    This is a wider card with supporting text and image at the top.
                  </p>
                  <a href="#" class="btn btn-primary">View details</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="card"&gt;
  &lt;img src="..." class="card-img-top" alt="..."&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Card with image&lt;/h5&gt;
    &lt;p class="card-text"&gt;This is a wider card...&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;View details&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- カードグループ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. カードレイアウト（Grid）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapのグリッドシステムを使用して、カードをレスポンシブにレイアウトできます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Card 1</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Card 2</h5>
                  <p class="card-text">This card has supporting text.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Card 3</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row g-3"&gt;
  &lt;div class="col-12 col-md-6 col-lg-4"&gt;
    &lt;div class="card h-100"&gt;
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Card 1&lt;/h5&gt;
        &lt;p class="card-text"&gt;This is a longer card...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- 他のカード... --&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 色付きカード -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 色付きカード
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          背景色とテキストカラーユーティリティを使用してカードをカスタマイズできます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card text-bg-primary">
                <div class="card-body">
                  <h5 class="card-title">Primary card</h5>
                  <p class="card-text">Some quick example text.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card text-bg-success">
                <div class="card-body">
                  <h5 class="card-title">Success card</h5>
                  <p class="card-text">Some quick example text.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card text-bg-danger">
                <div class="card-body">
                  <h5 class="card-title">Danger card</h5>
                  <p class="card-text">Some quick example text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="card text-bg-primary"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Primary card&lt;/h5&gt;
    &lt;p class="card-text"&gt;Some quick example text.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="card text-bg-success"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Success card&lt;/h5&gt;
    &lt;p class="card-text"&gt;Some quick example text.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 枠線付きカード -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. 枠線付きカード
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.border-*</code>クラスで枠線のみの色付きカードを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-primary">
                <div class="card-body">
                  <h5 class="card-title">Primary border</h5>
                  <p class="card-text">Card with primary border.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-success">
                <div class="card-body">
                  <h5 class="card-title">Success border</h5>
                  <p class="card-text">Card with success border.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-danger">
                <div class="card-body">
                  <h5 class="card-title">Danger border</h5>
                  <p class="card-text">Card with danger border.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="card border-primary"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Primary border&lt;/h5&gt;
    &lt;p class="card-text"&gt;Card with primary border.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/card/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Cards</span>
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
import 'highlight.js/styles/github.css'

hljs.registerLanguage('html', html)

onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
})
</script>

<style scoped>
.preview-box {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}

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
</style>
