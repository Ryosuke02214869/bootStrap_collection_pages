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
              Dropdown
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📋 Dropdown
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のドロップダウンコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なDropdown -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なDropdown
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ボタンをトリガーとして、メニューを展開するドロップダウンコンポーネントです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ドロップダウンボタン
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">アクション</a></li>
              <li><a class="dropdown-item" href="#">別のアクション</a></li>
              <li><a class="dropdown-item" href="#">その他</a></li>
            </ul>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" type="button"
          data-bs-toggle="dropdown" aria-expanded="false"&gt;
    ドロップダウンボタン
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;アクション&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;別のアクション&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;その他&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- カラーバリエーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. カラーバリエーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ボタンのカラークラスを使用してドロップダウンの見た目を変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Primary
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button
                class="btn btn-success dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Success
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button
                class="btn btn-danger dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Danger
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button
                class="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Warning
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"&gt;
  Primary
&lt;/button&gt;

&lt;button class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"&gt;
  Success
&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- スプリットボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. スプリットボタンドロップダウン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ボタンとドロップダウンを分離したスタイルです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="btn-group">
            <button type="button" class="btn btn-primary">アクション</button>
            <button
              type="button"
              class="btn btn-primary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="visually-hidden">ドロップダウンを開く</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">アクション</a></li>
              <li><a class="dropdown-item" href="#">別のアクション</a></li>
              <li><a class="dropdown-item" href="#">その他</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">分離されたリンク</a></li>
            </ul>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="btn-group"&gt;
  &lt;button type="button" class="btn btn-primary"&gt;アクション&lt;/button&gt;
  &lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"&gt;
    &lt;span class="visually-hidden"&gt;ドロップダウンを開く&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;アクション&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;別のアクション&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;分離されたリンク&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サイズ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. サイズ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.btn-lg</code>または<code>.btn-sm</code>でサイズを変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2 align-items-center">
            <!-- Large -->
            <div class="dropdown">
              <button
                class="btn btn-secondary btn-lg dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Large dropdown
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <!-- Default -->
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Default dropdown
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <!-- Small -->
            <div class="dropdown">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Small dropdown
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Large --&gt;
&lt;button class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown"&gt;
  Large dropdown
&lt;/button&gt;

&lt;!-- Small --&gt;
&lt;button class="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown"&gt;
  Small dropdown
&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- ドロップダウンの方向 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. ドロップダウンの方向
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.dropup</code>、<code>.dropend</code>、<code>.dropstart</code>で展開方向を変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <!-- Dropup -->
            <div class="btn-group dropup">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropup
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <!-- Dropend -->
            <div class="btn-group dropend">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropend
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <!-- Dropstart -->
            <div class="btn-group dropstart">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropstart
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Dropup (上に展開) --&gt;
&lt;div class="btn-group dropup"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"&gt;
    Dropup
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;...&lt;/ul&gt;
&lt;/div&gt;

&lt;!-- Dropend (右に展開) --&gt;
&lt;div class="btn-group dropend"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"&gt;
    Dropend
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;...&lt;/ul&gt;
&lt;/div&gt;

&lt;!-- Dropstart (左に展開) --&gt;
&lt;div class="btn-group dropstart"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"&gt;
    Dropstart
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;...&lt;/ul&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- メニューのアライメント -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. メニューのアライメント
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.dropdown-menu-end</code>でメニューを右揃えにできます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex gap-2">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                左揃え（デフォルト）
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                右揃え
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">アクション</a></li>
                <li><a class="dropdown-item" href="#">別のアクション</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 右揃え --&gt;
&lt;ul class="dropdown-menu dropdown-menu-end"&gt;
  &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;アクション&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;別のアクション&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <!-- メニューアイテムのバリエーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. メニューアイテムのバリエーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          区切り線、ヘッダー、無効化アイテムなどを追加できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              詳細メニュー
            </button>
            <ul class="dropdown-menu">
              <li><h6 class="dropdown-header">ドロップダウンヘッダー</h6></li>
              <li><a class="dropdown-item" href="#">通常のリンク</a></li>
              <li><a class="dropdown-item" href="#">別のリンク</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">分離されたリンク</a></li>
              <li>
                <a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true"
                  >無効化されたリンク</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;ul class="dropdown-menu"&gt;
  &lt;li&gt;&lt;h6 class="dropdown-header"&gt;ドロップダウンヘッダー&lt;/h6&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;通常のリンク&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;別のリンク&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;分離されたリンク&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="dropdown-item disabled" href="#"&gt;無効化されたリンク&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/dropdowns/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Dropdowns</span>
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
import { Dropdown } from 'bootstrap'

hljs.registerLanguage('html', html)

onMounted(() => {
  // シンタックスハイライトの初期化
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })

  // Bootstrap Dropdownの明示的な初期化
  document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((dropdownToggle) => {
    new Dropdown(dropdownToggle)
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
