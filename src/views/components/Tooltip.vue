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
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Tooltip</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">💬 Tooltip</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のツールチップコンポーネント</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. 基本的なTooltip</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>data-bs-toggle="tooltip"</code>でツールチップを有効化します。JavaScriptで初期化が必要です。
        </p>

        <div class="preview-box mb-3">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="トップにツールチップ">
            トップ
          </button>
          <button type="button" class="btn btn-secondary ms-2" data-bs-toggle="tooltip" data-bs-placement="right" title="右にツールチップ">
            右
          </button>
          <button type="button" class="btn btn-secondary ms-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ボトムにツールチップ">
            ボトム
          </button>
          <button type="button" class="btn btn-secondary ms-2" data-bs-toggle="tooltip" data-bs-placement="left" title="左にツールチップ">
            左
          </button>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        title="トップにツールチップ"&gt;
  トップ
&lt;/button&gt;

&lt;script&gt;
// ツールチップの初期化
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => 
  new bootstrap.Tooltip(tooltipTriggerEl)
)
&lt;/script&gt;</code></pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li>ツールチップはJavaScriptでの初期化が必要です</li>
            <li><code>data-bs-placement</code>で表示位置を指定（top, right, bottom, left）</li>
            <li>パフォーマンスのため、必要な要素のみを初期化します</li>
          </ul>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. HTMLコンテンツ</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>data-bs-html="true"</code>でHTMLコンテンツを表示できます。
        </p>

        <div class="preview-box mb-3">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="tooltip"
            data-bs-html="true"
            title="<em>強調</em>と<u>下線</u>のテキスト"
          >
            HTMLツールチップ
          </button>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;button type="button" class="btn btn-primary"
        data-bs-toggle="tooltip" data-bs-html="true"
        title="&lt;em&gt;強調&lt;/em&gt;と&lt;u&gt;下線&lt;/u&gt;のテキスト"&gt;
  HTMLツールチップ
&lt;/button&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/components/tooltips/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Tooltips</span>
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
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'
import { Tooltip } from 'bootstrap'

hljs.registerLanguage('html', html)
hljs.registerLanguage('javascript', javascript)

onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })

  // Initialize all tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new Tooltip(tooltipTriggerEl)
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

.alert-info {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 12px;
  color: var(--text-primary);
}

.alert-info ul {
  padding-left: 20px;
}
</style>
