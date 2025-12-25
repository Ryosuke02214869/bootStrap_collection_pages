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
              Alerts
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🔔 Alerts
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のアラートコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なAlert -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なAlert
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.alert</code>クラスとカラークラスを組み合わせて使用します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="alert alert-primary" role="alert">
            これはprimaryアラートです
          </div>
          <div class="alert alert-secondary" role="alert">
            これはsecondaryアラートです
          </div>
          <div class="alert alert-success" role="alert">
            これはsuccessアラートです
          </div>
          <div class="alert alert-danger" role="alert">
            これはdangerアラートです
          </div>
          <div class="alert alert-warning" role="alert">
            これはwarningアラートです
          </div>
          <div class="alert alert-info" role="alert">
            これはinfoアラートです
          </div>
          <div class="alert alert-light" role="alert">
            これはlightアラートです
          </div>
          <div class="alert alert-dark mb-0" role="alert">
            これはdarkアラートです
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="alert alert-primary" role="alert"&gt;
  これはprimaryアラートです
&lt;/div&gt;
&lt;div class="alert alert-success" role="alert"&gt;
  これはsuccessアラートです
&lt;/div&gt;
&lt;div class="alert alert-danger" role="alert"&gt;
  これはdangerアラートです
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- リンクカラー -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. アラート内のリンク
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.alert-link</code>クラスでアラート内のリンクの色を調整できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="alert alert-primary" role="alert">
            これはprimaryアラートです。<a href="#" class="alert-link">リンクの例</a>を確認してください。
          </div>
          <div class="alert alert-success" role="alert">
            これはsuccessアラートです。<a href="#" class="alert-link">リンクの例</a>を確認してください。
          </div>
          <div class="alert alert-danger mb-0" role="alert">
            これはdangerアラートです。<a href="#" class="alert-link">リンクの例</a>を確認してください。
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="alert alert-primary" role="alert"&gt;
  これはprimaryアラートです。&lt;a href="#" class="alert-link"&gt;リンクの例&lt;/a&gt;を確認してください。
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 追加コンテンツ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 追加コンテンツを含むAlert
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          アラート内に見出しや段落、区切り線などを含めることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">成功しました！</h4>
            <p>
              操作は正常に完了しました。このアラートには見出し、段落、区切り線が含まれています。
            </p>
            <hr />
            <p class="mb-0">
              追加の情報がある場合は、このように区切り線の後に表示できます。
            </p>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="alert alert-success" role="alert"&gt;
  &lt;h4 class="alert-heading"&gt;成功しました！&lt;/h4&gt;
  &lt;p&gt;操作は正常に完了しました。&lt;/p&gt;
  &lt;hr&gt;
  &lt;p class="mb-0"&gt;追加の情報がある場合は、このように表示できます。&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- アイコン付きAlert -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. アイコン付きAlert
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          アラートにアイコンを追加して視認性を向上させることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="alert alert-success d-flex align-items-center" role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-circle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              />
            </svg>
            <div>操作が正常に完了しました</div>
          </div>

          <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <div>注意が必要な項目があります</div>
          </div>

          <div class="alert alert-danger d-flex align-items-center mb-0" role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-circle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
            <div>エラーが発生しました</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="alert alert-success d-flex align-items-center" role="alert"&gt;
  &lt;svg class="bi flex-shrink-0 me-2" width="24" height="24"&gt;...&lt;/svg&gt;
  &lt;div&gt;操作が正常に完了しました&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Dismissible Alert -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 閉じることができるAlert
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.alert-dismissible</code>クラスと閉じるボタンを追加して、ユーザーがアラートを閉じることができるようにします。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>注意！</strong> この操作は元に戻せません。
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>成功！</strong> データが保存されました。
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div class="alert alert-danger alert-dismissible fade show mb-0" role="alert">
            <strong>エラー！</strong> 入力内容を確認してください。
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;
  &lt;strong&gt;注意！&lt;/strong&gt; この操作は元に戻せません。
  &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li><code>.alert-dismissible</code>: 閉じるボタンを配置するための余白を追加</li>
            <li><code>.fade</code>と<code>.show</code>: フェードアニメーションを有効化</li>
            <li>
              <code>data-bs-dismiss="alert"</code>:
              ボタンクリックでアラートを閉じる（Bootstrap JavaScript）
            </li>
          </ul>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/alerts/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Alerts</span>
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
