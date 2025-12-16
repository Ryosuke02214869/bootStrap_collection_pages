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
              <span style="color: var(--text-secondary)">レイアウト</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">
              Grid System - サンプル
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📊 Grid System - サンプル
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のグリッドシステムの基本とサンプル集
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 概要 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          Grid Systemとは
        </h2>
        <p style="color: var(--text-secondary)">
          Bootstrap 5のグリッドシステムは、Flexboxをベースにした強力なレスポンシブレイアウトシステムです。
          12カラムのグリッドを使用して、様々な画面サイズに対応したレイアウトを簡単に作成できます。
        </p>
        <div class="row g-3 mt-3">
          <div class="col-12 col-md-4">
            <div class="p-3" style="background: var(--bg-secondary); border-radius: 12px">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">📱 レスポンシブ</h3>
              <p class="small mb-0" style="color: var(--text-secondary)">
                6つのブレークポイント（xs, sm, md, lg, xl, xxl）で画面サイズに対応
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-3" style="background: var(--bg-secondary); border-radius: 12px">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">🎯 12カラム</h3>
              <p class="small mb-0" style="color: var(--text-secondary)">
                1行を12分割して柔軟なレイアウトを実現
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-3" style="background: var(--bg-secondary); border-radius: 12px">
              <h3 class="h6 mb-2" style="color: var(--text-primary)">⚡ Flexbox</h3>
              <p class="small mb-0" style="color: var(--text-secondary)">
                Flexboxベースで高速かつ柔軟なレイアウト
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- サンプル1: 等幅カラム -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 等幅カラム
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.col</code>クラスを使用すると、自動的に等幅のカラムが作成されます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="container-fluid">
            <div class="row g-2">
              <div class="col">
                <div class="preview-col">col</div>
              </div>
              <div class="col">
                <div class="preview-col">col</div>
              </div>
              <div class="col">
                <div class="preview-col">col</div>
              </div>
            </div>
            <div class="row g-2 mt-2">
              <div class="col">
                <div class="preview-col">col</div>
              </div>
              <div class="col">
                <div class="preview-col">col</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row"&gt;
  &lt;div class="col"&gt;col&lt;/div&gt;
  &lt;div class="col"&gt;col&lt;/div&gt;
  &lt;div class="col"&gt;col&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col"&gt;col&lt;/div&gt;
  &lt;div class="col"&gt;col&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サンプル2: 固定幅カラム -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. 固定幅カラム
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.col-*</code>クラスで12分割のうち何カラム分を使用するか指定できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="container-fluid">
            <div class="row g-2 mb-2">
              <div class="col-12">
                <div class="preview-col">col-12</div>
              </div>
            </div>
            <div class="row g-2 mb-2">
              <div class="col-6">
                <div class="preview-col">col-6</div>
              </div>
              <div class="col-6">
                <div class="preview-col">col-6</div>
              </div>
            </div>
            <div class="row g-2 mb-2">
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
            </div>
            <div class="row g-2">
              <div class="col-3">
                <div class="preview-col">col-3</div>
              </div>
              <div class="col-3">
                <div class="preview-col">col-3</div>
              </div>
              <div class="col-3">
                <div class="preview-col">col-3</div>
              </div>
              <div class="col-3">
                <div class="preview-col">col-3</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row"&gt;
  &lt;div class="col-12"&gt;col-12&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-6"&gt;col-6&lt;/div&gt;
  &lt;div class="col-6"&gt;col-6&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サンプル3: 混合レイアウト -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 混合レイアウト
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          固定幅と自動幅を組み合わせて柔軟なレイアウトを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="container-fluid">
            <div class="row g-2 mb-2">
              <div class="col-8">
                <div class="preview-col">col-8</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
            </div>
            <div class="row g-2 mb-2">
              <div class="col-3">
                <div class="preview-col">col-3</div>
              </div>
              <div class="col-9">
                <div class="preview-col">col-9</div>
              </div>
            </div>
            <div class="row g-2">
              <div class="col-2">
                <div class="preview-col">col-2</div>
              </div>
              <div class="col">
                <div class="preview-col">col (自動)</div>
              </div>
              <div class="col-2">
                <div class="preview-col">col-2</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row"&gt;
  &lt;div class="col-8"&gt;col-8&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="col-2"&gt;col-2&lt;/div&gt;
  &lt;div class="col"&gt;col (自動)&lt;/div&gt;
  &lt;div class="col-2"&gt;col-2&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サンプル4: レスポンシブグリッド -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. レスポンシブグリッド
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          ブレークポイントを指定して、画面サイズに応じてレイアウトを変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="container-fluid">
            <div class="row g-2 mb-2">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="preview-col">
                  col-12<br />
                  col-md-6<br />
                  col-lg-4
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="preview-col">
                  col-12<br />
                  col-md-6<br />
                  col-lg-4
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-4">
                <div class="preview-col">
                  col-12<br />
                  col-md-12<br />
                  col-lg-4
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 説明 -->
        <div class="alert alert-info mb-3">
          <strong>ブレークポイント:</strong>
          <ul class="mb-0 mt-2">
            <li><code>col-*</code>: すべての画面サイズ (&lt; 576px)</li>
            <li><code>col-sm-*</code>: Small (≥ 576px)</li>
            <li><code>col-md-*</code>: Medium (≥ 768px)</li>
            <li><code>col-lg-*</code>: Large (≥ 992px)</li>
            <li><code>col-xl-*</code>: Extra Large (≥ 1200px)</li>
            <li><code>col-xxl-*</code>: Extra Extra Large (≥ 1400px)</li>
          </ul>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row"&gt;
  &lt;div class="col-12 col-md-6 col-lg-4"&gt;
    モバイル: 100%
    タブレット: 50%
    デスクトップ: 33.33%
  &lt;/div&gt;
  &lt;div class="col-12 col-md-6 col-lg-4"&gt;
    モバイル: 100%
    タブレット: 50%
    デスクトップ: 33.33%
  &lt;/div&gt;
  &lt;div class="col-12 col-md-12 col-lg-4"&gt;
    モバイル: 100%
    タブレット: 100%
    デスクトップ: 33.33%
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サンプル5: ネストされたグリッド -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. ネストされたグリッド
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          カラムの中にさらにrowを配置することで、ネストされたグリッドを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="container-fluid">
            <div class="row g-2">
              <div class="col-9">
                <div class="preview-col mb-2">col-9 (外側)</div>
                <div class="row g-2">
                  <div class="col-6">
                    <div class="preview-col-nested">col-6 (内側)</div>
                  </div>
                  <div class="col-6">
                    <div class="preview-col-nested">col-6 (内側)</div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="preview-col" style="height: 100%">col-3</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row"&gt;
  &lt;div class="col-9"&gt;
    col-9 (外側)
    &lt;div class="row"&gt;
      &lt;div class="col-6"&gt;col-6 (内側)&lt;/div&gt;
      &lt;div class="col-6"&gt;col-6 (内側)&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-3"&gt;col-3&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Gutters -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. Gutters（余白）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.g-*</code>クラスでカラム間の余白を調整できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="container-fluid">
            <p class="small mb-2" style="color: var(--text-primary)">
              <strong>g-0（余白なし）</strong>
            </p>
            <div class="row g-0 mb-3">
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
            </div>

            <p class="small mb-2" style="color: var(--text-primary)">
              <strong>g-3（標準の余白）</strong>
            </p>
            <div class="row g-3 mb-3">
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
            </div>

            <p class="small mb-2" style="color: var(--text-primary)">
              <strong>g-5（大きな余白）</strong>
            </p>
            <div class="row g-5">
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
              <div class="col-4">
                <div class="preview-col">col-4</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 余白なし --&gt;
&lt;div class="row g-0"&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 標準の余白 --&gt;
&lt;div class="row g-3"&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 大きな余白 --&gt;
&lt;div class="row g-5"&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
  &lt;div class="col-4"&gt;col-4&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          次のステップ
        </h2>
        <div class="d-flex flex-column gap-2">
          <router-link
            to="/layout/grid-builder"
            class="btn btn-primary-custom d-inline-flex align-items-center gap-2"
            style="width: fit-content"
          >
            <span>🛠️</span>
            <span>Grid Builderで実際に試してみる</span>
          </router-link>
          <a
            href="https://getbootstrap.com/docs/5.3/layout/grid/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント</span>
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

// HTML言語サポートを登録
hljs.registerLanguage('html', html)

onMounted(() => {
  // すべてのコードブロックにハイライトを適用
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
})
</script>

<style scoped>
/* プレビューボックス */
.preview-box {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}

/* プレビューカラム */
.preview-col {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-col-nested {
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-cyan));
  color: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* コードボックス */
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

/* ブレッドクラム */
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

/* アラート */
.alert-info {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 12px;
  color: var(--text-primary);
}

.alert-info code {
  background: rgba(14, 165, 233, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
}

.alert-info ul {
  padding-left: 20px;
}

/* ボタン */
.btn-outline-primary {
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-2px);
}
</style>
