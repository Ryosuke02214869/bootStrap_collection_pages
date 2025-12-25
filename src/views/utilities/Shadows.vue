<template>
  <div class="min-vh-100">
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
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Shadows</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">☁️ Shadows</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のシャドウユーティリティ</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. 基本的なShadow</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.shadow</code>クラスで要素にシャドウを追加できます。
        </p>

        <div class="preview-box mb-3">
          <div class="d-flex gap-4 flex-wrap align-items-center">
            <div class="shadow-none p-4 bg-white rounded" style="width: 150px;">shadow-none</div>
            <div class="shadow-sm p-4 bg-white rounded" style="width: 150px;">shadow-sm</div>
            <div class="shadow p-4 bg-white rounded" style="width: 150px;">shadow</div>
            <div class="shadow-lg p-4 bg-white rounded" style="width: 150px;">shadow-lg</div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div class="shadow-none"&gt;シャドウなし&lt;/div&gt;
&lt;div class="shadow-sm"&gt;小さいシャドウ&lt;/div&gt;
&lt;div class="shadow"&gt;通常のシャドウ&lt;/div&gt;
&lt;div class="shadow-lg"&gt;大きいシャドウ&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. 実用例</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          シャドウを使った実際のコンポーネント例です。
        </p>

        <div class="preview-box mb-3">
          <!-- カードの例 -->
          <div class="row g-4">
            <div class="col-md-4">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">shadow-sm</h5>
                  <p class="card-text">小さいシャドウを持つカード</p>
                  <a href="#" class="btn btn-primary">詳細</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
                <div class="card-body">
                  <h5 class="card-title">shadow</h5>
                  <p class="card-text">通常のシャドウを持つカード</p>
                  <a href="#" class="btn btn-primary">詳細</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-lg">
                <div class="card-body">
                  <h5 class="card-title">shadow-lg</h5>
                  <p class="card-text">大きいシャドウを持つカード</p>
                  <a href="#" class="btn btn-primary">詳細</a>
                </div>
              </div>
            </div>
          </div>

          <!-- ボタンの例 -->
          <div class="mt-4">
            <h6>ボタンへの適用:</h6>
            <button class="btn btn-primary shadow-sm me-2">shadow-sm</button>
            <button class="btn btn-success shadow me-2">shadow</button>
            <button class="btn btn-danger shadow-lg">shadow-lg</button>
          </div>

          <!-- 画像の例 -->
          <div class="mt-4">
            <h6>画像への適用:</h6>
            <div class="d-flex gap-3 flex-wrap">
              <div class="shadow-sm" style="width: 150px; height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px;"></div>
              <div class="shadow" style="width: 150px; height: 150px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px;"></div>
              <div class="shadow-lg" style="width: 150px; height: 150px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px;"></div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;!-- カード --&gt;
&lt;div class="card shadow-sm"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;カードタイトル&lt;/h5&gt;
    &lt;p class="card-text"&gt;カードの内容...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- ボタン --&gt;
&lt;button class="btn btn-primary shadow"&gt;シャドウ付きボタン&lt;/button&gt;

&lt;!-- 画像 --&gt;
&lt;img src="image.jpg" class="shadow-lg rounded" alt="..."&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/utilities/shadows/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Shadows</span>
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
