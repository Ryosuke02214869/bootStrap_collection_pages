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
              Input Groups
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📝 Input Groups
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5の入力グループコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なInput Group -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なInput Group
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          入力フィールドの前後にテキストやアイコンを追加できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="input-group mb-3">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" placeholder="ユーザー名" />
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="受取人のユーザー名" />
            <span class="input-group-text">@example.com</span>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" />
            <span class="input-group-text">.00</span>
          </div>

          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea class="form-control"></textarea>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="input-group"&gt;
  &lt;span class="input-group-text"&gt;@&lt;/span&gt;
  &lt;input type="text" class="form-control" placeholder="ユーザー名"&gt;
&lt;/div&gt;

&lt;div class="input-group"&gt;
  &lt;input type="text" class="form-control"&gt;
  &lt;span class="input-group-text"&gt;@example.com&lt;/span&gt;
&lt;/div&gt;

&lt;div class="input-group"&gt;
  &lt;span class="input-group-text"&gt;$&lt;/span&gt;
  &lt;input type="text" class="form-control"&gt;
  &lt;span class="input-group-text"&gt;.00&lt;/span&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サイズ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. サイズバリエーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.input-group-sm</code>または<code>.input-group-lg</code>でサイズを変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text">Small</span>
            <input type="text" class="form-control" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Default</span>
            <input type="text" class="form-control" />
          </div>

          <div class="input-group input-group-lg">
            <span class="input-group-text">Large</span>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="input-group input-group-sm"&gt;
  &lt;span class="input-group-text"&gt;Small&lt;/span&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;

&lt;div class="input-group input-group-lg"&gt;
  &lt;span class="input-group-text"&gt;Large&lt;/span&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- チェックボックスとラジオボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. チェックボックスとラジオボタン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          入力グループ内にチェックボックスやラジオボタンを配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" />
            </div>
            <input type="text" class="form-control" />
          </div>

          <div class="input-group">
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="radio" />
            </div>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="input-group"&gt;
  &lt;div class="input-group-text"&gt;
    &lt;input class="form-check-input mt-0" type="checkbox"&gt;
  &lt;/div&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;

&lt;div class="input-group"&gt;
  &lt;div class="input-group-text"&gt;
    &lt;input class="form-check-input mt-0" type="radio"&gt;
  &lt;/div&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. ボタン付きInput Group
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          入力フィールドにボタンを組み合わせることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button">ボタン</button>
            <input type="text" class="form-control" />
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" />
            <button class="btn btn-outline-secondary" type="button">ボタン</button>
          </div>

          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button">ボタン</button>
            <button class="btn btn-outline-secondary" type="button">ボタン</button>
            <input type="text" class="form-control" />
          </div>

          <div class="input-group">
            <input type="text" class="form-control" />
            <button class="btn btn-outline-secondary" type="button">ボタン</button>
            <button class="btn btn-outline-secondary" type="button">ボタン</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="input-group"&gt;
  &lt;button class="btn btn-outline-secondary" type="button"&gt;ボタン&lt;/button&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;

&lt;div class="input-group"&gt;
  &lt;input type="text" class="form-control"&gt;
  &lt;button class="btn btn-outline-secondary" type="button"&gt;ボタン&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ドロップダウン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. ドロップダウン付きInput Group
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ドロップダウンメニューを組み合わせることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="input-group mb-3">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              ドロップダウン
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">アクション</a></li>
              <li><a class="dropdown-item" href="#">別のアクション</a></li>
              <li><a class="dropdown-item" href="#">その他</a></li>
            </ul>
            <input type="text" class="form-control" />
          </div>

          <div class="input-group">
            <input type="text" class="form-control" />
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              ドロップダウン
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">アクション</a></li>
              <li><a class="dropdown-item" href="#">別のアクション</a></li>
              <li><a class="dropdown-item" href="#">その他</a></li>
            </ul>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="input-group"&gt;
  &lt;button class="btn btn-outline-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown"&gt;
    ドロップダウン
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;アクション&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;別のアクション&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- セグメント化されたボタン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. セグメント化されたボタン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ボタンとドロップダウンを分離して配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="input-group mb-3">
            <button type="button" class="btn btn-outline-secondary">アクション</button>
            <button
              type="button"
              class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
            >
              <span class="visually-hidden">ドロップダウンを開く</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">アクション</a></li>
              <li><a class="dropdown-item" href="#">別のアクション</a></li>
            </ul>
            <input type="text" class="form-control" />
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="input-group"&gt;
  &lt;button type="button" class="btn btn-outline-secondary"&gt;アクション&lt;/button&gt;
  &lt;button type="button"
          class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"&gt;
    &lt;span class="visually-hidden"&gt;ドロップダウンを開く&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;アクション&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;input type="text" class="form-control"&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 実用例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. 実用例
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          実際の使用例です。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <!-- 検索バー -->
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="検索..." />
            <button class="btn btn-primary" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </div>

          <!-- URL入力 -->
          <div class="input-group mb-3">
            <span class="input-group-text">https://</span>
            <input type="text" class="form-control" placeholder="www.example.com" />
          </div>

          <!-- 価格入力 -->
          <div class="input-group mb-3">
            <span class="input-group-text">¥</span>
            <input type="number" class="form-control" placeholder="0.00" />
          </div>

          <!-- ファイルアップロード -->
          <div class="input-group">
            <input type="file" class="form-control" />
            <button class="btn btn-outline-secondary" type="button">アップロード</button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 検索バー --&gt;
&lt;div class="input-group"&gt;
  &lt;input type="text" class="form-control" placeholder="検索..."&gt;
  &lt;button class="btn btn-primary" type="button"&gt;検索&lt;/button&gt;
&lt;/div&gt;

&lt;!-- URL入力 --&gt;
&lt;div class="input-group"&gt;
  &lt;span class="input-group-text"&gt;https://&lt;/span&gt;
  &lt;input type="text" class="form-control" placeholder="www.example.com"&gt;
&lt;/div&gt;

&lt;!-- 価格入力 --&gt;
&lt;div class="input-group"&gt;
  &lt;span class="input-group-text"&gt;¥&lt;/span&gt;
  &lt;input type="number" class="form-control" placeholder="0.00"&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/forms/input-group/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Input Group</span>
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
