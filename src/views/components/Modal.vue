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
              Modal
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🪟 Modal
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のモーダルダイアログコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なModal -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なModal
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          モーダルは、ユーザーの注意を引くためのダイアログボックスです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            モーダルを開く
          </button>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- ボタン --&gt;
&lt;button type="button" class="btn btn-primary"
        data-bs-toggle="modal" data-bs-target="#exampleModal"&gt;
  モーダルを開く
&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;div class="modal fade" id="exampleModal" tabindex="-1"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title"&gt;モーダルタイトル&lt;/h5&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        これはモーダルのコンテンツです。
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;
          閉じる
        &lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;保存&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- サイズバリエーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. モーダルサイズ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.modal-sm</code>、<code>.modal-lg</code>、<code>.modal-xl</code>でサイズを変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalSm"
            >
              Small Modal
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalLg"
            >
              Large Modal
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalXl"
            >
              Extra Large Modal
            </button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Small modal --&gt;
&lt;div class="modal-dialog modal-sm"&gt;...&lt;/div&gt;

&lt;!-- Large modal --&gt;
&lt;div class="modal-dialog modal-lg"&gt;...&lt;/div&gt;

&lt;!-- Extra large modal --&gt;
&lt;div class="modal-dialog modal-xl"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 中央配置 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 垂直中央配置
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.modal-dialog-centered</code>でモーダルを垂直方向の中央に配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalCentered"
          >
            中央配置モーダル
          </button>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="modal-dialog modal-dialog-centered"&gt;
  &lt;div class="modal-content"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Vueでの実装 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. Vueでの実装パターン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          VueアプリケーションでModalを制御する方法はいくつかあります。
        </p>

        <div class="alert alert-info mb-3">
          <strong>💡 実装パターン:</strong>
          <ul class="mb-0 mt-2">
            <li>
              <strong>パターン1:</strong> Bootstrap JSを直接使用（data-bs-toggle属性）
            </li>
            <li>
              <strong>パターン2:</strong> Bootstrap JSのAPIを使用（new Modal()）
            </li>
            <li>
              <strong>パターン3:</strong> Vueのリアクティビティのみで制御（v-if + CSS）
            </li>
          </ul>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- パターン1: data-bs-toggle（最もシンプル） --&gt;
&lt;button data-bs-toggle="modal" data-bs-target="#myModal"&gt;開く&lt;/button&gt;

&lt;!-- パターン2: Bootstrap JS API --&gt;
&lt;script setup&gt;
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'

const modalElement = ref(null)
let modalInstance = null

onMounted(() => {
  modalInstance = new Modal(modalElement.value)
})

const showModal = () => {
  modalInstance.show()
}
&lt;/script&gt;

&lt;!-- パターン3: Vueのみで制御 --&gt;
&lt;script setup&gt;
import { ref } from 'vue'
const isModalOpen = ref(false)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="isModalOpen = true"&gt;開く&lt;/button&gt;
  &lt;div v-if="isModalOpen" class="modal d-block" @click="isModalOpen = false"&gt;
    &lt;div class="modal-dialog" @click.stop&gt;
      &lt;div class="modal-content"&gt;...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/modal/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Modal</span>
          </a>
        </div>
      </section>
    </div>
  </div>

  <!-- Modals (Teleport to body for proper z-index and backdrop) -->
  <Teleport to="body">
    <!-- Basic Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">モーダルタイトル</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">これはモーダルのコンテンツです。</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Small Modal -->
    <div class="modal fade" id="modalSm" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Small Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">これは小さいモーダルです。</div>
        </div>
      </div>
    </div>

    <!-- Large Modal -->
    <div class="modal fade" id="modalLg" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Large Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">これは大きいモーダルです。</div>
        </div>
      </div>
    </div>

    <!-- Extra Large Modal -->
    <div class="modal fade" id="modalXl" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Extra Large Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">これは特大のモーダルです。</div>
        </div>
      </div>
    </div>

    <!-- Centered Modal -->
    <div class="modal fade" id="modalCentered" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">中央配置</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">このモーダルは垂直方向の中央に配置されます。</div>
        </div>
      </div>
    </div>
  </Teleport>
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
