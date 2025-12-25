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
              Flexbox Utilities
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          ↔️ Flexbox Utilities
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のFlexboxユーティリティクラス
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なFlex -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. Flexコンテナの作成
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.d-flex</code>クラスでFlexboxコンテナを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex mb-3 demo-container">
            <div class="demo-item">Flex item 1</div>
            <div class="demo-item">Flex item 2</div>
            <div class="demo-item">Flex item 3</div>
          </div>
          <p class="small mb-0"><code>.d-flex</code></p>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="d-flex"&gt;
  &lt;div&gt;Flex item 1&lt;/div&gt;
  &lt;div&gt;Flex item 2&lt;/div&gt;
  &lt;div&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 方向 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. Flexの方向（Direction）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.flex-row</code>、<code>.flex-column</code>で方向を指定します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="small mb-2"><strong>flex-row（デフォルト、横並び）</strong></p>
          <div class="d-flex flex-row mb-3 demo-container">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>

          <p class="small mb-2"><strong>flex-row-reverse（横並び・逆順）</strong></p>
          <div class="d-flex flex-row-reverse mb-3 demo-container">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>

          <p class="small mb-2"><strong>flex-column（縦並び）</strong></p>
          <div class="d-flex flex-column mb-3 demo-container">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>

          <p class="small mb-2"><strong>flex-column-reverse（縦並び・逆順）</strong></p>
          <div class="d-flex flex-column-reverse demo-container">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="d-flex flex-row"&gt;横並び&lt;/div&gt;
&lt;div class="d-flex flex-row-reverse"&gt;横並び・逆順&lt;/div&gt;
&lt;div class="d-flex flex-column"&gt;縦並び&lt;/div&gt;
&lt;div class="d-flex flex-column-reverse"&gt;縦並び・逆順&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 主軸の配置 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 主軸の配置（Justify Content）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.justify-content-*</code>で主軸方向の配置を指定します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="small mb-2"><strong>justify-content-start（左寄せ）</strong></p>
          <div class="d-flex justify-content-start mb-3 demo-container">
            <div class="demo-item">Item</div>
            <div class="demo-item">Item</div>
          </div>

          <p class="small mb-2"><strong>justify-content-center（中央寄せ）</strong></p>
          <div class="d-flex justify-content-center mb-3 demo-container">
            <div class="demo-item">Item</div>
            <div class="demo-item">Item</div>
          </div>

          <p class="small mb-2"><strong>justify-content-end（右寄せ）</strong></p>
          <div class="d-flex justify-content-end mb-3 demo-container">
            <div class="demo-item">Item</div>
            <div class="demo-item">Item</div>
          </div>

          <p class="small mb-2"><strong>justify-content-between（両端揃え）</strong></p>
          <div class="d-flex justify-content-between mb-3 demo-container">
            <div class="demo-item">Item</div>
            <div class="demo-item">Item</div>
          </div>

          <p class="small mb-2"><strong>justify-content-around（均等配置）</strong></p>
          <div class="d-flex justify-content-around mb-3 demo-container">
            <div class="demo-item">Item</div>
            <div class="demo-item">Item</div>
          </div>

          <p class="small mb-2"><strong>justify-content-evenly（完全均等配置）</strong></p>
          <div class="d-flex justify-content-evenly demo-container">
            <div class="demo-item">Item</div>
            <div class="demo-item">Item</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="d-flex justify-content-start"&gt;...&lt;/div&gt;
&lt;div class="d-flex justify-content-center"&gt;...&lt;/div&gt;
&lt;div class="d-flex justify-content-end"&gt;...&lt;/div&gt;
&lt;div class="d-flex justify-content-between"&gt;...&lt;/div&gt;
&lt;div class="d-flex justify-content-around"&gt;...&lt;/div&gt;
&lt;div class="d-flex justify-content-evenly"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 交差軸の配置 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. 交差軸の配置（Align Items）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.align-items-*</code>で交差軸方向の配置を指定します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="small mb-2"><strong>align-items-start（上揃え）</strong></p>
          <div class="d-flex align-items-start mb-3 demo-container" style="height: 100px">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>

          <p class="small mb-2"><strong>align-items-center（中央揃え）</strong></p>
          <div class="d-flex align-items-center mb-3 demo-container" style="height: 100px">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>

          <p class="small mb-2"><strong>align-items-end（下揃え）</strong></p>
          <div class="d-flex align-items-end mb-3 demo-container" style="height: 100px">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>

          <p class="small mb-2"><strong>align-items-baseline（ベースライン揃え）</strong></p>
          <div class="d-flex align-items-baseline demo-container" style="height: 100px">
            <div class="demo-item" style="font-size: 2rem">Big</div>
            <div class="demo-item">Normal</div>
            <div class="demo-item" style="font-size: 0.75rem">Small</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="d-flex align-items-start"&gt;...&lt;/div&gt;
&lt;div class="d-flex align-items-center"&gt;...&lt;/div&gt;
&lt;div class="d-flex align-items-end"&gt;...&lt;/div&gt;
&lt;div class="d-flex align-items-baseline"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 折り返し -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 折り返し（Wrap）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.flex-wrap</code>でアイテムの折り返しを制御します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="small mb-2"><strong>flex-nowrap（折り返しなし、デフォルト）</strong></p>
          <div class="d-flex flex-nowrap mb-3 demo-container">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
            <div class="demo-item">Item 5</div>
          </div>

          <p class="small mb-2"><strong>flex-wrap（折り返しあり）</strong></p>
          <div class="d-flex flex-wrap demo-container">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
            <div class="demo-item">Item 5</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="d-flex flex-nowrap"&gt;折り返しなし&lt;/div&gt;
&lt;div class="d-flex flex-wrap"&gt;折り返しあり&lt;/div&gt;
&lt;div class="d-flex flex-wrap-reverse"&gt;折り返し・逆順&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Flexアイテムの制御 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. Flexアイテムの制御
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          個別のアイテムに対して、伸縮や順序を制御できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="small mb-2"><strong>flex-fill（均等に伸びる）</strong></p>
          <div class="d-flex mb-3 demo-container">
            <div class="demo-item flex-fill">Flex item 1</div>
            <div class="demo-item flex-fill">Flex item 2</div>
            <div class="demo-item flex-fill">Flex item 3</div>
          </div>

          <p class="small mb-2"><strong>flex-grow-1（1つだけ伸びる）</strong></p>
          <div class="d-flex mb-3 demo-container">
            <div class="demo-item flex-grow-1">Flex item (grow)</div>
            <div class="demo-item">Flex item</div>
            <div class="demo-item">Flex item</div>
          </div>

          <p class="small mb-2"><strong>flex-shrink-1（縮む）</strong></p>
          <div class="d-flex mb-3 demo-container">
            <div class="demo-item" style="width: 100%">Wide item</div>
            <div class="demo-item flex-shrink-1">Shrink item</div>
          </div>

          <p class="small mb-2"><strong>order（順序変更）</strong></p>
          <div class="d-flex demo-container">
            <div class="demo-item order-3">First (order-3)</div>
            <div class="demo-item order-1">Second (order-1)</div>
            <div class="demo-item order-2">Third (order-2)</div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 均等に伸びる --&gt;
&lt;div class="d-flex"&gt;
  &lt;div class="flex-fill"&gt;Item&lt;/div&gt;
  &lt;div class="flex-fill"&gt;Item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 伸びる --&gt;
&lt;div class="flex-grow-1"&gt;Grow&lt;/div&gt;

&lt;!-- 縮む --&gt;
&lt;div class="flex-shrink-1"&gt;Shrink&lt;/div&gt;

&lt;!-- 順序 --&gt;
&lt;div class="order-1"&gt;First&lt;/div&gt;
&lt;div class="order-2"&gt;Second&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 実用例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. 実用的なレイアウト例
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Flexboxを使った実用的なレイアウトパターンです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="small mb-2"><strong>ナビゲーションバー（左右配置）</strong></p>
          <div class="d-flex justify-content-between align-items-center mb-3 demo-container p-3">
            <div class="demo-item">Logo</div>
            <div class="d-flex gap-2">
              <div class="demo-item">Menu 1</div>
              <div class="demo-item">Menu 2</div>
              <div class="demo-item">Menu 3</div>
            </div>
          </div>

          <p class="small mb-2"><strong>カードのフッター（右寄せボタン）</strong></p>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text.</p>
            </div>
            <div class="card-footer d-flex justify-content-end gap-2">
              <button class="btn btn-secondary btn-sm">Cancel</button>
              <button class="btn btn-primary btn-sm">Save</button>
            </div>
          </div>

          <p class="small mb-2"><strong>垂直中央揃え（ヒーローセクション風）</strong></p>
          <div
            class="d-flex align-items-center justify-content-center demo-container"
            style="height: 150px"
          >
            <div class="text-center">
              <h4>Welcome</h4>
              <p class="mb-0">Centered content</p>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- ナビゲーションバー --&gt;
&lt;div class="d-flex justify-content-between align-items-center"&gt;
  &lt;div&gt;Logo&lt;/div&gt;
  &lt;div class="d-flex gap-2"&gt;
    &lt;div&gt;Menu 1&lt;/div&gt;
    &lt;div&gt;Menu 2&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 垂直中央揃え --&gt;
&lt;div class="d-flex align-items-center justify-content-center" style="height: 100vh"&gt;
  &lt;div&gt;Centered content&lt;/div&gt;
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
            href="https://getbootstrap.com/docs/5.3/utilities/flex/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Flex</span>
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

.demo-container {
  background: #f0f0f0;
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
}

.demo-item {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}
</style>
