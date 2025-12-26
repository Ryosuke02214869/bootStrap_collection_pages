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
              Pagination
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📄 Pagination
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のペ-ジネーションコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なPagination
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ページ番号を表示するナビゲーションコンポーネントです。
        </p>

        <div class="preview-box mb-3">
          <nav>
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">前へ</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">次へ</a></li>
            </ul>
          </nav>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;nav&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;前へ&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;次へ&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. アクティブ/無効化状態
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.active</code>や<code>.disabled</code>クラスで状態を表現できます。
        </p>

        <div class="preview-box mb-3">
          <nav>
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">前へ</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">次へ</a></li>
            </ul>
          </nav>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;ul class="pagination"&gt;
  &lt;li class="page-item disabled"&gt;
    &lt;a class="page-link" href="#" tabindex="-1"&gt;前へ&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="page-item active" aria-current="page"&gt;
    &lt;a class="page-link" href="#"&gt;2&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. サイズバリエーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.pagination-lg</code>または<code>.pagination-sm</code>でサイズを変更できます。
        </p>

        <div class="preview-box mb-3">
          <nav class="mb-3">
            <ul class="pagination pagination-lg">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>

          <nav class="mb-3">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>

          <nav>
            <ul class="pagination pagination-sm mb-0">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Large --&gt;
&lt;ul class="pagination pagination-lg"&gt;
  &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Small --&gt;
&lt;ul class="pagination pagination-sm"&gt;
  &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. アライメント
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Flexboxユーティリティで配置を調整できます。
        </p>

        <div class="preview-box mb-3">
          <nav class="mb-3">
            <ul class="pagination justify-content-start">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>

          <nav class="mb-3">
            <ul class="pagination justify-content-center">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>

          <nav>
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 左揃え --&gt;
&lt;ul class="pagination justify-content-start"&gt;...&lt;/ul&gt;

&lt;!-- 中央揃え --&gt;
&lt;ul class="pagination justify-content-center"&gt;...&lt;/ul&gt;

&lt;!-- 右揃え --&gt;
&lt;ul class="pagination justify-content-end"&gt;...&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/pagination/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);"
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Pagination</span>
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
