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
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Offcanvas</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">📱 Offcanvas</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のオフキャンバスコンポーネント</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. 基本的なOffcanvas</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          画面の端からスライドインするサイドバーコンポーネントです。
        </p>

        <div class="preview-box mb-3">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
            Offcanvasを開く
          </button>

          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Offcanvasタイトル</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              <div>
                Offcanvasのコンテンツがここに表示されます。リンク、テキスト、フォームなど任意のコンテンツを配置できます。
              </div>
              <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  ドロップダウン
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">アクション</a></li>
                  <li><a class="dropdown-item" href="#">別のアクション</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-primary" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"&gt;
  Offcanvasを開く
&lt;/button&gt;

&lt;div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"&gt;
  &lt;div class="offcanvas-header"&gt;
    &lt;h5 class="offcanvas-title"&gt;Offcanvasタイトル&lt;/h5&gt;
    &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="offcanvas-body"&gt;
    コンテンツ...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. 配置バリエーション</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.offcanvas-start</code>、<code>.offcanvas-end</code>、<code>.offcanvas-top</code>、<code>.offcanvas-bottom</code>で配置を変更できます。
        </p>

        <div class="preview-box mb-3">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">
            上から表示
          </button>
          <button class="btn btn-primary ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
            右から表示
          </button>
          <button class="btn btn-primary ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
            下から表示
          </button>

          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">上から表示</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              画面の上部から表示されるOffcanvasです。
            </div>
          </div>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">右から表示</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              画面の右側から表示されるOffcanvasです。
            </div>
          </div>

          <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">下から表示</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              画面の下部から表示されるOffcanvasです。
            </div>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 上から表示 --&gt;
&lt;div class="offcanvas offcanvas-top"&gt;...&lt;/div&gt;

&lt;!-- 右から表示 --&gt;
&lt;div class="offcanvas offcanvas-end"&gt;...&lt;/div&gt;

&lt;!-- 下から表示 --&gt;
&lt;div class="offcanvas offcanvas-bottom"&gt;...&lt;/div&gt;

&lt;!-- 左から表示（デフォルト） --&gt;
&lt;div class="offcanvas offcanvas-start"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/components/offcanvas/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Offcanvas</span>
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
