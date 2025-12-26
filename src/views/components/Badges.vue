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
              Badges
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🏷️ Badges
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のバッジコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なBadge -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なBadge
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.badge</code>クラスとカラークラスを組み合わせて使用します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <span class="badge bg-primary">Primary</span>
          <span class="badge bg-secondary">Secondary</span>
          <span class="badge bg-success">Success</span>
          <span class="badge bg-danger">Danger</span>
          <span class="badge bg-warning text-dark">Warning</span>
          <span class="badge bg-info text-dark">Info</span>
          <span class="badge bg-light text-dark">Light</span>
          <span class="badge bg-dark">Dark</span>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-secondary"&gt;Secondary&lt;/span&gt;
&lt;span class="badge bg-success"&gt;Success&lt;/span&gt;
&lt;span class="badge bg-danger"&gt;Danger&lt;/span&gt;
&lt;span class="badge bg-warning text-dark"&gt;Warning&lt;/span&gt;
&lt;span class="badge bg-info text-dark"&gt;Info&lt;/span&gt;</code></pre>
        </div>
      </section>

      <!-- ボタン内のBadge -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. ボタン内のBadge
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ボタン内にバッジを配置して、通知数などを表示できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <button type="button" class="btn btn-primary">
            通知 <span class="badge bg-danger">4</span>
          </button>
          <button type="button" class="btn btn-secondary">
            メッセージ <span class="badge bg-light text-dark">9</span>
          </button>
          <button type="button" class="btn btn-success">
            プロフィール <span class="badge bg-warning text-dark">新</span>
          </button>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button type="button" class="btn btn-primary"&gt;
  通知 &lt;span class="badge bg-danger"&gt;4&lt;/span&gt;
&lt;/button&gt;

&lt;button type="button" class="btn btn-secondary"&gt;
  メッセージ &lt;span class="badge bg-light text-dark"&gt;9&lt;/span&gt;
&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- 見出し内のBadge -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 見出し内のBadge
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          見出しタグ内にバッジを配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <h1>見出し1 <span class="badge bg-secondary">New</span></h1>
          <h2>見出し2 <span class="badge bg-secondary">New</span></h2>
          <h3>見出し3 <span class="badge bg-secondary">New</span></h3>
          <h4>見出し4 <span class="badge bg-secondary">New</span></h4>
          <h5>見出し5 <span class="badge bg-secondary">New</span></h5>
          <h6>見出し6 <span class="badge bg-secondary">New</span></h6>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;h1&gt;見出し1 &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;見出し2 &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;見出し3 &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h3&gt;</code></pre>
        </div>
      </section>

      <!-- Pill Badge -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. Pill Badge（丸みのあるバッジ）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.rounded-pill</code>クラスで完全に丸みのあるバッジになります。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <span class="badge rounded-pill bg-primary">Primary</span>
          <span class="badge rounded-pill bg-secondary">Secondary</span>
          <span class="badge rounded-pill bg-success">Success</span>
          <span class="badge rounded-pill bg-danger">Danger</span>
          <span class="badge rounded-pill bg-warning text-dark">Warning</span>
          <span class="badge rounded-pill bg-info text-dark">Info</span>
          <span class="badge rounded-pill bg-light text-dark">Light</span>
          <span class="badge rounded-pill bg-dark">Dark</span>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;span class="badge rounded-pill bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge rounded-pill bg-secondary"&gt;Secondary&lt;/span&gt;
&lt;span class="badge rounded-pill bg-success"&gt;Success&lt;/span&gt;</code></pre>
        </div>
      </section>

      <!-- 位置揃え -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 位置揃えされたBadge
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.position-relative</code>と<code>.position-absolute</code>を使用して、バッジを要素の端に配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <button type="button" class="btn btn-primary position-relative">
            受信箱
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              99+
              <span class="visually-hidden">未読メッセージ</span>
            </span>
          </button>

          <button type="button" class="btn btn-primary position-relative ms-3">
            プロフィール
            <span
              class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
            >
              <span class="visually-hidden">新しい通知</span>
            </span>
          </button>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button type="button" class="btn btn-primary position-relative"&gt;
  受信箱
  &lt;span class="position-absolute top-0 start-100 translate-middle
               badge rounded-pill bg-danger"&gt;
    99+
    &lt;span class="visually-hidden"&gt;未読メッセージ&lt;/span&gt;
  &lt;/span&gt;
&lt;/button&gt;

&lt;!-- インジケーター風のバッジ --&gt;
&lt;button type="button" class="btn btn-primary position-relative"&gt;
  プロフィール
  &lt;span class="position-absolute top-0 start-100 translate-middle
               p-2 bg-danger border border-light rounded-circle"&gt;
    &lt;span class="visually-hidden"&gt;新しい通知&lt;/span&gt;
  &lt;/span&gt;
&lt;/button&gt;</code></pre>
        </div>
      </section>

      <!-- 背景色のバリエーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. グラデーション背景
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.bg-gradient</code>クラスでグラデーション効果を追加できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <span class="badge bg-primary bg-gradient">Primary</span>
          <span class="badge bg-secondary bg-gradient">Secondary</span>
          <span class="badge bg-success bg-gradient">Success</span>
          <span class="badge bg-danger bg-gradient">Danger</span>
          <span class="badge bg-warning bg-gradient text-dark">Warning</span>
          <span class="badge bg-info bg-gradient text-dark">Info</span>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;span class="badge bg-primary bg-gradient"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-secondary bg-gradient"&gt;Secondary&lt;/span&gt;
&lt;span class="badge bg-success bg-gradient"&gt;Success&lt;/span&gt;</code></pre>
        </div>
      </section>

      <!-- リンクBadge -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. リンクとしてのBadge
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>&lt;a&gt;</code>タグを使用すると、クリック可能なバッジになります。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <a href="#" class="badge bg-primary text-decoration-none">Primary</a>
          <a href="#" class="badge bg-secondary text-decoration-none">Secondary</a>
          <a href="#" class="badge bg-success text-decoration-none">Success</a>
          <a href="#" class="badge bg-danger text-decoration-none">Danger</a>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;a href="#" class="badge bg-primary text-decoration-none"&gt;Primary&lt;/a&gt;
&lt;a href="#" class="badge bg-secondary text-decoration-none"&gt;Secondary&lt;/a&gt;
&lt;a href="#" class="badge bg-success text-decoration-none"&gt;Success&lt;/a&gt;</code></pre>
        </div>
      </section>

      <!-- 実用例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          8. 実用例
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          実際のUIでの使用例です。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <!-- リスト内でのバッジ -->
          <ul class="list-group" style="max-width: 400px">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              受信トレイ
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              スター付き
              <span class="badge bg-warning rounded-pill text-dark">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              ゴミ箱
              <span class="badge bg-danger rounded-pill">1</span>
            </li>
          </ul>

          <!-- タグとしてのバッジ -->
          <div class="mt-4">
            <h6>タグ:</h6>
            <span class="badge bg-secondary me-1">JavaScript</span>
            <span class="badge bg-secondary me-1">Bootstrap</span>
            <span class="badge bg-secondary me-1">CSS</span>
            <span class="badge bg-secondary me-1">HTML</span>
          </div>

          <!-- ステータス表示 -->
          <div class="mt-4">
            <h6>ステータス:</h6>
            <p>
              注文 #12345
              <span class="badge bg-success ms-2">配送完了</span>
            </p>
            <p>
              注文 #12346
              <span class="badge bg-warning text-dark ms-2">処理中</span>
            </p>
            <p>
              注文 #12347
              <span class="badge bg-danger ms-2">キャンセル</span>
            </p>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- リスト内のバッジ --&gt;
&lt;ul class="list-group"&gt;
  &lt;li class="list-group-item d-flex justify-content-between align-items-center"&gt;
    受信トレイ
    &lt;span class="badge bg-primary rounded-pill"&gt;14&lt;/span&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- タグとしてのバッジ --&gt;
&lt;span class="badge bg-secondary"&gt;JavaScript&lt;/span&gt;
&lt;span class="badge bg-secondary"&gt;Bootstrap&lt;/span&gt;

&lt;!-- ステータス表示 --&gt;
&lt;p&gt;注文 #12345 &lt;span class="badge bg-success"&gt;配送完了&lt;/span&gt;&lt;/p&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/badge/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Badge</span>
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

.preview-box .badge {
  margin-right: 8px;
  margin-bottom: 8px;
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
