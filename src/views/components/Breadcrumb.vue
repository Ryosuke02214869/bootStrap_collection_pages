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
              <span style="color: var(--text-secondary)">コンポーネント</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Breadcrumb
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🧭 Breadcrumb
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のパンくずリストコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なBreadcrumb
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          現在のページ位置を示すナビゲーション要素です。
        </p>

        <div class="preview-box mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">ホーム</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">ホーム</a></li>
              <li class="breadcrumb-item active" aria-current="page">ライブラリ</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#">ホーム</a></li>
              <li class="breadcrumb-item"><a href="#">ライブラリ</a></li>
              <li class="breadcrumb-item active" aria-current="page">データ</li>
            </ol>
          </nav>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;nav aria-label="breadcrumb"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;ホーム&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;ライブラリ&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;データ&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. 区切り文字のカスタマイズ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          CSS変数<code>--bs-breadcrumb-divider</code>で区切り文字を変更できます。
        </p>

        <div class="preview-box mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>';">
              <li class="breadcrumb-item"><a href="#">ホーム</a></li>
              <li class="breadcrumb-item active" aria-current="page">ライブラリ</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb" style="--bs-breadcrumb-divider: '»';">
              <li class="breadcrumb-item"><a href="#">ホーム</a></li>
              <li class="breadcrumb-item active" aria-current="page">ライブラリ</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);">
              <li class="breadcrumb-item"><a href="#">ホーム</a></li>
              <li class="breadcrumb-item active" aria-current="page">ライブラリ</li>
            </ol>
          </nav>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;nav aria-label="breadcrumb"&gt;
  &lt;ol class="breadcrumb" style="--bs-breadcrumb-divider: '&gt;';"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;ホーム&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active"&gt;ライブラリ&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/breadcrumb/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);"
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Breadcrumb</span>
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
