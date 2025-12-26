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
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Popover</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">💭 Popover</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のポップオーバーコンポーネント</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. 基本的なPopover</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ツールチップよりも多くの情報を表示できるコンポーネントです。JavaScriptでの初期化が必要です。
        </p>

        <div class="preview-box mb-3">
          <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="top" 
                  data-bs-title="ポップオーバータイトル" data-bs-content="このポップオーバーには詳細な情報を表示できます。">
            トップ
          </button>
          <button type="button" class="btn btn-secondary ms-2" data-bs-toggle="popover" data-bs-placement="right"
                  data-bs-title="ポップオーバー" data-bs-content="右に表示されるポップオーバーです。">
            右
          </button>
          <button type="button" class="btn btn-secondary ms-2" data-bs-toggle="popover" data-bs-placement="bottom"
                  data-bs-title="ポップオーバー" data-bs-content="下に表示されるポップオーバーです。">
            ボトム
          </button>
          <button type="button" class="btn btn-secondary ms-2" data-bs-toggle="popover" data-bs-placement="left"
                  data-bs-title="ポップオーバー" data-bs-content="左に表示されるポップオーバーです。">
            左
          </button>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;button type="button" class="btn btn-secondary"
        data-bs-toggle="popover" data-bs-placement="top"
        data-bs-title="ポップオーバータイトル"
        data-bs-content="詳細な情報を表示できます。"&gt;
  トップ
&lt;/button&gt;

&lt;script&gt;
// ポップオーバーの初期化
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
  new bootstrap.Popover(popoverTriggerEl)
)
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. クリックで閉じる</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>data-bs-trigger="focus"</code>でクリックまたはフォーカス喪失で閉じることができます。
        </p>

        <div class="preview-box mb-3">
          <button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-trigger="focus"
                  data-bs-title="閉じられるポップオーバー" data-bs-content="外側をクリックすると閉じます">
            クリック可能なポップオーバー
          </button>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;button type="button" class="btn btn-danger"
        data-bs-toggle="popover" data-bs-trigger="focus"
        data-bs-title="閉じられるポップオーバー"
        data-bs-content="外側をクリックすると閉じます"&gt;
  クリック可能なポップオーバー
&lt;/button&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/components/popovers/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Popovers</span>
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
import { Popover } from 'bootstrap'

hljs.registerLanguage('html', html)
hljs.registerLanguage('javascript', javascript)

onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })

  // Initialize all popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  popoverTriggerList.forEach((popoverTriggerEl) => {
    new Popover(popoverTriggerEl)
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
