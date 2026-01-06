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
              Collapse / Accordion
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🗂️ Collapse / Accordion
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5の折りたたみとアコーディオンコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なCollapse -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なCollapse
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          コンテンツの表示/非表示を切り替えることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              コンテンツを切り替え
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              これは折りたたみ可能なコンテンツです。ボタンをクリックすることで表示/非表示が切り替わります。
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;button class="btn btn-primary" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseExample"&gt;
  コンテンツを切り替え
&lt;/button&gt;

&lt;div class="collapse" id="collapseExample"&gt;
  &lt;div class="card card-body"&gt;
    これは折りたたみ可能なコンテンツです。
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 複数のターゲット -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. 複数のターゲット
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          複数の要素を同時に切り替えることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex gap-2 mb-3">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample1"
            >
              要素1を切り替え
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
            >
              要素2を切り替え
            </button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".multi-collapse"
            >
              両方切り替え
            </button>
          </div>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">これは最初の折りたたみ要素です</div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body">これは2番目の折りたたみ要素です</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- クラスセレクタで複数要素を同時に切り替え --&gt;
&lt;button data-bs-toggle="collapse" data-bs-target=".multi-collapse"&gt;
  両方切り替え
&lt;/button&gt;

&lt;div class="collapse multi-collapse" id="multiCollapseExample1"&gt;
  &lt;div class="card card-body"&gt;最初の折りたたみ要素&lt;/div&gt;
&lt;/div&gt;
&lt;div class="collapse multi-collapse" id="multiCollapseExample2"&gt;
  &lt;div class="card card-body"&gt;2番目の折りたたみ要素&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Accordion -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. Accordion（アコーディオン）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          一度に1つのパネルのみを開くことができるアコーディオンです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  アコーディオン項目 #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  これは最初のアコーディオン項目の本文です。デフォルトで表示されており、他の項目をクリックすると自動的に閉じます。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  アコーディオン項目 #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  これは2番目のアコーディオン項目の本文です。クリックすることで表示されます。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  アコーディオン項目 #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  これは3番目のアコーディオン項目の本文です。アコーディオンでは一度に1つの項目のみが開きます。
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="accordion" id="accordionExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header"&gt;
      &lt;button class="accordion-button" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseOne"&gt;
        アコーディオン項目 #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseOne" class="accordion-collapse collapse show"
         data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        アコーディオンの本文...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="accordion-item"&gt;
    &lt;!-- 他の項目... --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li>
              <code>data-bs-parent</code>属性で親のアコーディオンを指定すると、一度に1つのパネルのみが開きます
            </li>
            <li><code>.show</code>クラスを追加すると、デフォルトで開いた状態になります</li>
          </ul>
        </div>
      </section>

      <!-- Flush Accordion -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. Flush Accordion
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.accordion-flush</code>クラスで境界線とパディングを削除できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                >
                  Flush項目 #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Flushスタイルのアコーディオンは、境界線やパディングがなく、シンプルな見た目になります。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                >
                  Flush項目 #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">リスト表示などに適したスタイルです。</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="accordion accordion-flush" id="accordionFlushExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header"&gt;
      &lt;button class="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"&gt;
        Flush項目 #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="flush-collapseOne" class="accordion-collapse collapse"
         data-bs-parent="#accordionFlushExample"&gt;
      &lt;div class="accordion-body"&gt;コンテンツ...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 常に開くAccordion -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 常に開くアコーディオン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>data-bs-parent</code>属性を省略すると、複数の項目を同時に開くことができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="accordion" id="accordionAlwaysOpen">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#alwaysOpenOne"
                >
                  項目 #1
                </button>
              </h2>
              <div id="alwaysOpenOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  この項目を開いたまま、他の項目も開くことができます。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#alwaysOpenTwo"
                >
                  項目 #2
                </button>
              </h2>
              <div id="alwaysOpenTwo" class="accordion-collapse collapse">
                <div class="accordion-body">複数の項目を同時に開いた状態にできます。</div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- data-bs-parentを省略 --&gt;
&lt;div class="accordion"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header"&gt;
      &lt;button class="accordion-button" data-bs-toggle="collapse"
              data-bs-target="#alwaysOpenOne"&gt;
        項目 #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="alwaysOpenOne" class="accordion-collapse collapse show"&gt;
      &lt;div class="accordion-body"&gt;コンテンツ...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
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
            href="https://getbootstrap.com/docs/5.3/components/collapse/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Collapse</span>
          </a>
          <a
            href="https://getbootstrap.com/docs/5.3/components/accordion/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Accordion</span>
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
import { Collapse } from 'bootstrap'

hljs.registerLanguage('html', html)

onMounted(() => {
  // シンタックスハイライトの初期化
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })

  // Bootstrap Collapseの明示的な初期化
  document.querySelectorAll('.collapse').forEach((collapseEl) => {
    new Collapse(collapseEl, {
      toggle: false
    })
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
