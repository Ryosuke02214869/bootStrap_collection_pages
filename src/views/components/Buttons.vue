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
              Buttons
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🔘 Buttons
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のボタンコンポーネントのスタイルとバリエーション
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なボタン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapは8種類の基本的なボタンスタイルを提供しています。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
            <button class="btn btn-info">Info</button>
            <button class="btn btn-light">Light</button>
            <button class="btn btn-dark">Dark</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-primary"&gt;Primary&lt;/button&gt;
&lt;button class="btn btn-secondary"&gt;Secondary&lt;/button&gt;
&lt;button class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button class="btn btn-danger"&gt;Danger&lt;/button&gt;
&lt;button class="btn btn-warning"&gt;Warning&lt;/button&gt;
&lt;button class="btn btn-info"&gt;Info&lt;/button&gt;
&lt;button class="btn btn-light"&gt;Light&lt;/button&gt;
&lt;button class="btn btn-dark"&gt;Dark&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- アウトラインボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. アウトラインボタン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.btn-outline-*</code>クラスを使用すると、背景が透明で枠線のみのボタンになります。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-outline-primary">Primary</button>
            <button class="btn btn-outline-secondary">Secondary</button>
            <button class="btn btn-outline-success">Success</button>
            <button class="btn btn-outline-danger">Danger</button>
            <button class="btn btn-outline-warning">Warning</button>
            <button class="btn btn-outline-info">Info</button>
            <button class="btn btn-outline-light">Light</button>
            <button class="btn btn-outline-dark">Dark</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;
&lt;button class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;
&lt;button class="btn btn-outline-success"&gt;Success&lt;/button&gt;
&lt;button class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- ボタンサイズ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. ボタンサイズ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.btn-lg</code>と<code>.btn-sm</code>で大小のボタンを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2 align-items-center">
            <button class="btn btn-primary btn-lg">Large button</button>
            <button class="btn btn-primary">Default button</button>
            <button class="btn btn-primary btn-sm">Small button</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-primary btn-lg"&gt;Large button&lt;/button&gt;
&lt;button class="btn btn-primary"&gt;Default button&lt;/button&gt;
&lt;button class="btn btn-primary btn-sm"&gt;Small button&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- ブロックボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. ブロックボタン（全幅）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.d-grid</code>を親要素に追加することで、全幅のボタンを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-grid gap-2">
            <button class="btn btn-primary">Block level button</button>
            <button class="btn btn-secondary">Block level button</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="d-grid gap-2"&gt;
  &lt;button class="btn btn-primary"&gt;Block level button&lt;/button&gt;
  &lt;button class="btn btn-secondary"&gt;Block level button&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ボタンの状態 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. ボタンの状態
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          アクティブ状態、無効化状態のボタンを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary">Normal</button>
            <button class="btn btn-primary active">Active state</button>
            <button class="btn btn-primary" disabled>Disabled</button>
            <button class="btn btn-outline-primary" disabled>Disabled outline</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-primary"&gt;Normal&lt;/button&gt;
&lt;button class="btn btn-primary active"&gt;Active state&lt;/button&gt;
&lt;button class="btn btn-primary" disabled&gt;Disabled&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- ボタングループ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. ボタングループ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.btn-group</code>クラスで複数のボタンをグループ化できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="mb-3">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-primary">Left</button>
              <button type="button" class="btn btn-primary">Middle</button>
              <button type="button" class="btn btn-primary">Right</button>
            </div>
          </div>
          <div class="mb-3">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-outline-secondary">1</button>
              <button type="button" class="btn btn-outline-secondary">2</button>
              <button type="button" class="btn btn-outline-secondary">3</button>
              <button type="button" class="btn btn-outline-secondary">4</button>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="btn-group" role="group"&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Left&lt;/button&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Middle&lt;/button&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Right&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- トグルボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. トグルボタン（チェックボックス・ラジオ）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          チェックボックスやラジオボタンをボタンのように見せることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="mb-3">
            <p class="small mb-2"><strong>Checkbox toggle buttons:</strong></p>
            <div class="btn-group" role="group">
              <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
              <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

              <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
              <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

              <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
              <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
            </div>
          </div>

          <div>
            <p class="small mb-2"><strong>Radio toggle buttons:</strong></p>
            <div class="btn-group" role="group">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-success" for="btnradio1">Radio 1</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
              <label class="btn btn-outline-success" for="btnradio2">Radio 2</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
              <label class="btn btn-outline-success" for="btnradio3">Radio 3</label>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Checkbox toggle --&gt;
&lt;input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"&gt;
&lt;label class="btn btn-outline-primary" for="btncheck1"&gt;Checkbox 1&lt;/label&gt;

&lt;!-- Radio toggle --&gt;
&lt;input type="radio" class="btn-check" name="options" id="option1" checked&gt;
&lt;label class="btn btn-outline-success" for="option1"&gt;Radio 1&lt;/label&gt;</code></pre>
        </div>
      </section>

      <!-- リンクボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          8. リンクボタン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>&lt;a&gt;</code>タグにボタンのスタイルを適用できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <a href="#" class="btn btn-primary" role="button">Link button</a>
            <a href="#" class="btn btn-success" role="button">Success link</a>
            <a href="#" class="btn btn-outline-danger" role="button">Danger outline</a>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;a href="#" class="btn btn-primary" role="button"&gt;Link button&lt;/a&gt;
&lt;a href="#" class="btn btn-success" role="button"&gt;Success link&lt;/a&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/buttons/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Buttons</span>
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

.btn-outline-primary:hover {
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
</style>
