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
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Borders</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">🔲 Borders</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のボーダーユーティリティ</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. ボーダーの追加</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.border</code>クラスでボーダーを追加できます。
        </p>

        <div class="preview-box mb-3">
          <div class="d-flex gap-3 flex-wrap">
            <div class="border p-3" style="width: 100px; height: 100px;">border</div>
            <div class="border-top p-3" style="width: 100px; height: 100px;">border-top</div>
            <div class="border-end p-3" style="width: 100px; height: 100px;">border-end</div>
            <div class="border-bottom p-3" style="width: 100px; height: 100px;">border-bottom</div>
            <div class="border-start p-3" style="width: 100px; height: 100px;">border-start</div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div class="border"&gt;全方向&lt;/div&gt;
&lt;div class="border-top"&gt;上のみ&lt;/div&gt;
&lt;div class="border-end"&gt;右のみ&lt;/div&gt;
&lt;div class="border-bottom"&gt;下のみ&lt;/div&gt;
&lt;div class="border-start"&gt;左のみ&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. ボーダーカラー</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.border-*</code>クラスでボーダーの色を変更できます。
        </p>

        <div class="preview-box mb-3">
          <div class="d-flex gap-3 flex-wrap">
            <div class="border border-primary p-3" style="width: 100px;">Primary</div>
            <div class="border border-secondary p-3" style="width: 100px;">Secondary</div>
            <div class="border border-success p-3" style="width: 100px;">Success</div>
            <div class="border border-danger p-3" style="width: 100px;">Danger</div>
            <div class="border border-warning p-3" style="width: 100px;">Warning</div>
            <div class="border border-info p-3" style="width: 100px;">Info</div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div class="border border-primary"&gt;Primary&lt;/div&gt;
&lt;div class="border border-success"&gt;Success&lt;/div&gt;
&lt;div class="border border-danger"&gt;Danger&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">3. ボーダー幅</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.border-*</code>クラスでボーダーの太さを変更できます。
        </p>

        <div class="preview-box mb-3">
          <div class="d-flex gap-3 flex-wrap">
            <div class="border border-1 p-3" style="width: 100px;">border-1</div>
            <div class="border border-2 p-3" style="width: 100px;">border-2</div>
            <div class="border border-3 p-3" style="width: 100px;">border-3</div>
            <div class="border border-4 p-3" style="width: 100px;">border-4</div>
            <div class="border border-5 p-3" style="width: 100px;">border-5</div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div class="border border-1"&gt;border-1&lt;/div&gt;
&lt;div class="border border-3"&gt;border-3&lt;/div&gt;
&lt;div class="border border-5"&gt;border-5&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">4. 角丸（Rounded）</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.rounded</code>クラスで角を丸くできます。
        </p>

        <div class="preview-box mb-3">
          <div class="d-flex gap-3 flex-wrap">
            <div class="border rounded p-3" style="width: 100px;">rounded</div>
            <div class="border rounded-top p-3" style="width: 100px;">rounded-top</div>
            <div class="border rounded-end p-3" style="width: 100px;">rounded-end</div>
            <div class="border rounded-bottom p-3" style="width: 100px;">rounded-bottom</div>
            <div class="border rounded-start p-3" style="width: 100px;">rounded-start</div>
            <div class="border rounded-circle p-3 d-flex align-items-center justify-content-center" style="width: 100px; height: 100px;">circle</div>
            <div class="border rounded-pill p-3" style="width: 120px;">pill</div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div class="rounded"&gt;全ての角を丸く&lt;/div&gt;
&lt;div class="rounded-top"&gt;上の角を丸く&lt;/div&gt;
&lt;div class="rounded-circle"&gt;円形&lt;/div&gt;
&lt;div class="rounded-pill"&gt;ピル型&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">5. 角丸のサイズ</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.rounded-*</code>クラスで角丸のサイズを変更できます。
        </p>

        <div class="preview-box mb-3">
          <div class="d-flex gap-3 flex-wrap">
            <div class="border rounded-0 p-3" style="width: 100px;">rounded-0</div>
            <div class="border rounded-1 p-3" style="width: 100px;">rounded-1</div>
            <div class="border rounded-2 p-3" style="width: 100px;">rounded-2</div>
            <div class="border rounded-3 p-3" style="width: 100px;">rounded-3</div>
            <div class="border rounded-4 p-3" style="width: 100px;">rounded-4</div>
            <div class="border rounded-5 p-3" style="width: 100px;">rounded-5</div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div class="rounded-0"&gt;角丸なし&lt;/div&gt;
&lt;div class="rounded-1"&gt;小さい角丸&lt;/div&gt;
&lt;div class="rounded-3"&gt;標準の角丸&lt;/div&gt;
&lt;div class="rounded-5"&gt;大きい角丸&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/utilities/borders/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Borders</span>
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
