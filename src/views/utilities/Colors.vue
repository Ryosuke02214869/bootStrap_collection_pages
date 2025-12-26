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
              <span style="color: var(--text-secondary)">ユーティリティ</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Colors
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🎨 Colors
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のカラーユーティリティクラス
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- テキストカラー -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. テキストカラー
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.text-*</code>クラスでテキストの色を変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="text-primary">This is primary text</p>
          <p class="text-secondary">This is secondary text</p>
          <p class="text-success">This is success text</p>
          <p class="text-danger">This is danger text</p>
          <p class="text-warning">This is warning text</p>
          <p class="text-info">This is info text</p>
          <p class="text-light bg-dark p-2">This is light text</p>
          <p class="text-dark">This is dark text</p>
          <p class="text-body">This is body text</p>
          <p class="text-muted">This is muted text</p>
          <p class="text-white bg-dark p-2">This is white text</p>
          <p class="text-black-50">This is black-50 text</p>
          <p class="text-white-50 bg-dark p-2 mb-0">This is white-50 text</p>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;p class="text-primary"&gt;This is primary text&lt;/p&gt;
&lt;p class="text-secondary"&gt;This is secondary text&lt;/p&gt;
&lt;p class="text-success"&gt;This is success text&lt;/p&gt;
&lt;p class="text-danger"&gt;This is danger text&lt;/p&gt;
&lt;p class="text-warning"&gt;This is warning text&lt;/p&gt;
&lt;p class="text-info"&gt;This is info text&lt;/p&gt;
&lt;p class="text-light"&gt;This is light text&lt;/p&gt;
&lt;p class="text-dark"&gt;This is dark text&lt;/p&gt;
&lt;p class="text-body"&gt;This is body text&lt;/p&gt;
&lt;p class="text-muted"&gt;This is muted text&lt;/p&gt;</code></pre>
        </div>
      </section>

      <!-- 背景色 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. 背景色
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.bg-*</code>クラスで背景色を設定できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="p-3 mb-2 bg-primary text-white">This is primary background</div>
          <div class="p-3 mb-2 bg-secondary text-white">This is secondary background</div>
          <div class="p-3 mb-2 bg-success text-white">This is success background</div>
          <div class="p-3 mb-2 bg-danger text-white">This is danger background</div>
          <div class="p-3 mb-2 bg-warning text-dark">This is warning background</div>
          <div class="p-3 mb-2 bg-info text-dark">This is info background</div>
          <div class="p-3 mb-2 bg-light text-dark">This is light background</div>
          <div class="p-3 mb-2 bg-dark text-white">This is dark background</div>
          <div class="p-3 mb-2 bg-body text-dark">This is body background</div>
          <div class="p-3 mb-2 bg-white text-dark border">This is white background</div>
          <div class="p-3 bg-transparent border">This is transparent background</div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="bg-primary text-white"&gt;Primary background&lt;/div&gt;
&lt;div class="bg-secondary text-white"&gt;Secondary background&lt;/div&gt;
&lt;div class="bg-success text-white"&gt;Success background&lt;/div&gt;
&lt;div class="bg-danger text-white"&gt;Danger background&lt;/div&gt;
&lt;div class="bg-warning text-dark"&gt;Warning background&lt;/div&gt;
&lt;div class="bg-info text-dark"&gt;Info background&lt;/div&gt;
&lt;div class="bg-light text-dark"&gt;Light background&lt;/div&gt;
&lt;div class="bg-dark text-white"&gt;Dark background&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- グラデーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. グラデーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.bg-gradient</code>クラスを追加すると、グラデーション効果が適用されます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="p-3 mb-2 bg-primary bg-gradient text-white">Primary gradient</div>
          <div class="p-3 mb-2 bg-success bg-gradient text-white">Success gradient</div>
          <div class="p-3 mb-2 bg-danger bg-gradient text-white">Danger gradient</div>
          <div class="p-3 bg-info bg-gradient text-dark">Info gradient</div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="bg-primary bg-gradient text-white"&gt;Primary gradient&lt;/div&gt;
&lt;div class="bg-success bg-gradient text-white"&gt;Success gradient&lt;/div&gt;
&lt;div class="bg-danger bg-gradient text-white"&gt;Danger gradient&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 不透明度 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. 不透明度
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.text-opacity-*</code>と<code>.bg-opacity-*</code>で不透明度を調整できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="text-primary mb-2">Primary text (100%)</p>
          <p class="text-primary text-opacity-75 mb-2">Primary text (75%)</p>
          <p class="text-primary text-opacity-50 mb-2">Primary text (50%)</p>
          <p class="text-primary text-opacity-25 mb-4">Primary text (25%)</p>

          <div class="p-3 mb-2 bg-success text-white">Background (100%)</div>
          <div class="p-3 mb-2 bg-success bg-opacity-75 text-white">Background (75%)</div>
          <div class="p-3 mb-2 bg-success bg-opacity-50 text-white">Background (50%)</div>
          <div class="p-3 bg-success bg-opacity-25">Background (25%)</div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- テキスト不透明度 --&gt;
&lt;p class="text-primary text-opacity-75"&gt;75% opacity&lt;/p&gt;
&lt;p class="text-primary text-opacity-50"&gt;50% opacity&lt;/p&gt;
&lt;p class="text-primary text-opacity-25"&gt;25% opacity&lt;/p&gt;

&lt;!-- 背景不透明度 --&gt;
&lt;div class="bg-success bg-opacity-75"&gt;75% opacity&lt;/div&gt;
&lt;div class="bg-success bg-opacity-50"&gt;50% opacity&lt;/div&gt;
&lt;div class="bg-success bg-opacity-25"&gt;25% opacity&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- カラーパレット -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. カラーパレット一覧
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapのテーマカラーの一覧です。
        </p>

        <!-- プレビュー -->
        <div class="preview-box">
          <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="color-card">
                <div class="color-sample bg-primary"></div>
                <div class="p-3">
                  <h6 class="mb-1">Primary</h6>
                  <code>.bg-primary</code><br />
                  <code>.text-primary</code>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="color-card">
                <div class="color-sample bg-secondary"></div>
                <div class="p-3">
                  <h6 class="mb-1">Secondary</h6>
                  <code>.bg-secondary</code><br />
                  <code>.text-secondary</code>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="color-card">
                <div class="color-sample bg-success"></div>
                <div class="p-3">
                  <h6 class="mb-1">Success</h6>
                  <code>.bg-success</code><br />
                  <code>.text-success</code>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="color-card">
                <div class="color-sample bg-danger"></div>
                <div class="p-3">
                  <h6 class="mb-1">Danger</h6>
                  <code>.bg-danger</code><br />
                  <code>.text-danger</code>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="color-card">
                <div class="color-sample bg-warning"></div>
                <div class="p-3">
                  <h6 class="mb-1">Warning</h6>
                  <code>.bg-warning</code><br />
                  <code>.text-warning</code>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="color-card">
                <div class="color-sample bg-info"></div>
                <div class="p-3">
                  <h6 class="mb-1">Info</h6>
                  <code>.bg-info</code><br />
                  <code>.text-info</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/utilities/colors/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Colors</span>
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

.color-card {
  border: 2px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  background: white;
}

.color-sample {
  height: 100px;
  width: 100%;
}

.color-card code {
  font-size: 0.85rem;
  background: var(--bg-secondary);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
