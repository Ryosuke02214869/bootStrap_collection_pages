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
              <span style="color: var(--text-secondary)">ユーティリティ</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Spacing
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📏 Spacing
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のスペーシング（余白）ユーティリティクラス
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- スペーシングの仕組み -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. スペーシングの仕組み
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapのスペーシングユーティリティは、<code>{property}{sides}-{size}</code>の形式で使用します。
        </p>

        <div class="alert alert-info">
          <strong>💡 書式:</strong>
          <p class="mb-2 mt-2"><code>{property}{sides}-{size}</code></p>
          <ul class="mb-0">
            <li>
              <strong>property:</strong> <code>m</code> (margin) または <code>p</code> (padding)
            </li>
            <li>
              <strong>sides:</strong> <code>t</code> (top), <code>b</code> (bottom), <code>s</code>
              (start/left), <code>e</code> (end/right), <code>x</code> (左右), <code>y</code>
              (上下), なし (全方向)
            </li>
            <li>
              <strong>size:</strong> <code>0</code>, <code>1</code>, <code>2</code>,
              <code>3</code>, <code>4</code>, <code>5</code>, <code>auto</code>
            </li>
          </ul>
        </div>

        <div class="code-box mt-3">
          <pre><code class="language-html">&lt;!-- 例 --&gt;
&lt;div class="m-3"&gt;全方向にmargin 3&lt;/div&gt;
&lt;div class="mt-5"&gt;上方向にmargin 5&lt;/div&gt;
&lt;div class="p-2"&gt;全方向にpadding 2&lt;/div&gt;
&lt;div class="px-4"&gt;左右にpadding 4&lt;/div&gt;
&lt;div class="my-auto"&gt;上下にmargin auto&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Marginの例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. Margin（外側の余白）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.m-*</code>クラスで外側の余白を設定します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="demo-container">
            <div class="demo-box m-0">m-0</div>
          </div>
          <div class="demo-container">
            <div class="demo-box m-1">m-1</div>
          </div>
          <div class="demo-container">
            <div class="demo-box m-2">m-2</div>
          </div>
          <div class="demo-container">
            <div class="demo-box m-3">m-3</div>
          </div>
          <div class="demo-container">
            <div class="demo-box m-4">m-4</div>
          </div>
          <div class="demo-container">
            <div class="demo-box m-5">m-5</div>
          </div>
        </div>

        <!-- サイズ表 -->
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead style="background: var(--bg-secondary)">
              <tr>
                <th>サイズ</th>
                <th>クラス例</th>
                <th>実際の値</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>0</code></td>
                <td><code>m-0</code></td>
                <td>0</td>
              </tr>
              <tr>
                <td><code>1</code></td>
                <td><code>m-1</code></td>
                <td>0.25rem (4px)</td>
              </tr>
              <tr>
                <td><code>2</code></td>
                <td><code>m-2</code></td>
                <td>0.5rem (8px)</td>
              </tr>
              <tr>
                <td><code>3</code></td>
                <td><code>m-3</code></td>
                <td>1rem (16px)</td>
              </tr>
              <tr>
                <td><code>4</code></td>
                <td><code>m-4</code></td>
                <td>1.5rem (24px)</td>
              </tr>
              <tr>
                <td><code>5</code></td>
                <td><code>m-5</code></td>
                <td>3rem (48px)</td>
              </tr>
              <tr>
                <td><code>auto</code></td>
                <td><code>m-auto</code></td>
                <td>auto</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 全方向 --&gt;
&lt;div class="m-3"&gt;全方向にmargin 3&lt;/div&gt;

&lt;!-- 特定の方向 --&gt;
&lt;div class="mt-3"&gt;上にmargin 3&lt;/div&gt;
&lt;div class="mb-3"&gt;下にmargin 3&lt;/div&gt;
&lt;div class="ms-3"&gt;左にmargin 3&lt;/div&gt;
&lt;div class="me-3"&gt;右にmargin 3&lt;/div&gt;

&lt;!-- 上下・左右 --&gt;
&lt;div class="my-3"&gt;上下にmargin 3&lt;/div&gt;
&lt;div class="mx-3"&gt;左右にmargin 3&lt;/div&gt;

&lt;!-- 中央揃え --&gt;
&lt;div class="mx-auto"&gt;左右中央揃え&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Paddingの例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. Padding（内側の余白）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.p-*</code>クラスで内側の余白を設定します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="demo-box-padding p-0 mb-2">p-0</div>
          <div class="demo-box-padding p-1 mb-2">p-1</div>
          <div class="demo-box-padding p-2 mb-2">p-2</div>
          <div class="demo-box-padding p-3 mb-2">p-3</div>
          <div class="demo-box-padding p-4 mb-2">p-4</div>
          <div class="demo-box-padding p-5">p-5</div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 全方向 --&gt;
&lt;div class="p-3"&gt;全方向にpadding 3&lt;/div&gt;

&lt;!-- 特定の方向 --&gt;
&lt;div class="pt-3"&gt;上にpadding 3&lt;/div&gt;
&lt;div class="pb-3"&gt;下にpadding 3&lt;/div&gt;
&lt;div class="ps-3"&gt;左にpadding 3&lt;/div&gt;
&lt;div class="pe-3"&gt;右にpadding 3&lt;/div&gt;

&lt;!-- 上下・左右 --&gt;
&lt;div class="py-3"&gt;上下にpadding 3&lt;/div&gt;
&lt;div class="px-3"&gt;左右にpadding 3&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ネガティブマージン -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. ネガティブマージン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          負の値のマージンも使用できます。<code>m</code>の前に<code>n</code>を付けます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div style="background: #e9ecef; padding: 20px">
            <div class="demo-box mb-3">通常の要素</div>
            <div class="demo-box mt-n3">mt-n3（上に-1rem）</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="mt-n1"&gt;上に-0.25rem&lt;/div&gt;
&lt;div class="mt-n2"&gt;上に-0.5rem&lt;/div&gt;
&lt;div class="mt-n3"&gt;上に-1rem&lt;/div&gt;
&lt;div class="mt-n4"&gt;上に-1.5rem&lt;/div&gt;
&lt;div class="mt-n5"&gt;上に-3rem&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- レスポンシブスペーシング -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. レスポンシブスペーシング
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ブレークポイントを指定してレスポンシブに余白を変更できます。
        </p>

        <div class="alert alert-info mb-3">
          <strong>💡 書式:</strong>
          <p class="mb-2 mt-2"><code>{property}{sides}-{breakpoint}-{size}</code></p>
          <p class="mb-0">
            例: <code>mt-md-5</code> = Medium以上の画面で上にmargin 5
          </p>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- モバイルではm-2、タブレット以上ではm-5 --&gt;
&lt;div class="m-2 m-md-5"&gt;レスポンシブmargin&lt;/div&gt;

&lt;!-- モバイルではp-3、デスクトップ以上ではp-5 --&gt;
&lt;div class="p-3 p-lg-5"&gt;レスポンシブpadding&lt;/div&gt;

&lt;!-- 複数のブレークポイント --&gt;
&lt;div class="mt-1 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5"&gt;
  画面サイズに応じて変化
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Gap（Flexbox/Grid用） -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. Gap（Flexbox/Grid用）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          FlexboxやGridレイアウトで要素間の余白を設定します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex gap-3 mb-3">
            <div class="demo-box flex-fill">Item 1</div>
            <div class="demo-box flex-fill">Item 2</div>
            <div class="demo-box flex-fill">Item 3</div>
          </div>
          <p class="small mb-2"><code>.gap-3</code></p>

          <div class="d-flex gap-5">
            <div class="demo-box flex-fill">Item 1</div>
            <div class="demo-box flex-fill">Item 2</div>
            <div class="demo-box flex-fill">Item 3</div>
          </div>
          <p class="small mb-0"><code>.gap-5</code></p>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 全方向 --&gt;
&lt;div class="d-flex gap-3"&gt;...&lt;/div&gt;

&lt;!-- 行方向のみ --&gt;
&lt;div class="d-flex row-gap-2"&gt;...&lt;/div&gt;

&lt;!-- 列方向のみ --&gt;
&lt;div class="d-flex column-gap-4"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 実用例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. 実用例
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          スペーシングユーティリティの実際の使用例です。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <!-- カード風レイアウト -->
          <div class="border rounded p-4 mb-4">
            <h3 class="h5 mb-3">カード風レイアウト</h3>
            <p class="mb-3">
              <code>.p-4</code>で内側に余白、<code>.mb-3</code>で要素間の余白を設定。
            </p>
            <button class="btn btn-primary">ボタン</button>
          </div>

          <!-- セクション間の余白 -->
          <div class="border rounded p-3 mb-3">
            <h4 class="h6 mb-2">セクション 1</h4>
            <p class="mb-0">セクション間の余白は<code>.mb-3</code>で設定。</p>
          </div>
          <div class="border rounded p-3 mb-3">
            <h4 class="h6 mb-2">セクション 2</h4>
            <p class="mb-0">一貫した余白で読みやすいレイアウト。</p>
          </div>
          <div class="border rounded p-3">
            <h4 class="h6 mb-2">セクション 3</h4>
            <p class="mb-0">最後の要素は<code>.mb-0</code>で余白をリセット。</p>
          </div>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/utilities/spacing/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Spacing</span>
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

.demo-container {
  background: #e9ecef;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.demo-box {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
}

.demo-box-padding {
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-cyan));
  color: white;
  border-radius: 6px;
  font-weight: 500;
}

.demo-box-padding::before {
  content: attr(class);
  display: block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px;
  border-radius: 4px;
  text-align: center;
}

.table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.table th {
  font-weight: 600;
  color: var(--text-primary);
}

.table td {
  color: var(--text-secondary);
}

.table code {
  background: rgba(14, 165, 233, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
  color: var(--primary-blue);
}
</style>
