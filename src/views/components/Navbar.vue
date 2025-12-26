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
              Navbar
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          🧭 Navbar
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のナビゲーションバーコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なNavbar -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なNavbar
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapのナビゲーションバーは、レスポンシブで強力なナビゲーションコンポーネントです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
    &lt;button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"&gt;
      &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="collapse navbar-collapse" id="navbarNav"&gt;
      &lt;ul class="navbar-nav"&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link active" href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Features&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <!-- カラースキーム -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. カラースキーム
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.navbar-light</code>または<code>.navbar-dark</code>と背景色クラスを組み合わせます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <nav class="navbar navbar-dark bg-dark mb-3">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <ul class="navbar-nav flex-row gap-3">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>

          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <ul class="navbar-nav flex-row gap-3">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>

          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <ul class="navbar-nav flex-row gap-3">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Dark background --&gt;
&lt;nav class="navbar navbar-dark bg-dark"&gt;...&lt;/nav&gt;

&lt;!-- Primary background --&gt;
&lt;nav class="navbar navbar-dark bg-primary"&gt;...&lt;/nav&gt;

&lt;!-- Light background --&gt;
&lt;nav class="navbar navbar-light bg-light"&gt;...&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <!-- 検索フォーム付き -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 検索フォーム付きNavbar
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Navbarにフォーム要素を追加できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSearch"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSearch">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
    &lt;div class="collapse navbar-collapse"&gt;
      &lt;ul class="navbar-nav me-auto"&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link active" href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;form class="d-flex" role="search"&gt;
        &lt;input class="form-control me-2" type="search" placeholder="Search"&gt;
        &lt;button class="btn btn-outline-success" type="submit"&gt;Search&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <!-- 配置 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. 固定配置
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.fixed-top</code>、<code>.fixed-bottom</code>、<code>.sticky-top</code>で配置を固定できます。
        </p>

        <div class="alert alert-info">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li>
              <code>.fixed-top</code>: 画面上部に固定（スクロールしても常に表示）
            </li>
            <li>
              <code>.fixed-bottom</code>: 画面下部に固定
            </li>
            <li>
              <code>.sticky-top</code>: スクロールして上端に達したら固定
            </li>
          </ul>
        </div>

        <!-- コード -->
        <div class="code-box mt-3">
          <pre><code class="language-html">&lt;!-- 上部固定 --&gt;
&lt;nav class="navbar navbar-light bg-light fixed-top"&gt;...&lt;/nav&gt;

&lt;!-- 下部固定 --&gt;
&lt;nav class="navbar navbar-light bg-light fixed-bottom"&gt;...&lt;/nav&gt;

&lt;!-- スティッキー --&gt;
&lt;nav class="navbar navbar-light bg-light sticky-top"&gt;...&lt;/nav&gt;</code></pre>
        </div>
      </section>

      <!-- Vue Routerとの統合 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. Vue Routerとの統合
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          VueアプリケーションではVue Routerと統合して使用します。
        </p>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;template&gt;
  &lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
    &lt;div class="container-fluid"&gt;
      &lt;router-link to="/" class="navbar-brand"&gt;My App&lt;/router-link&gt;
      &lt;div class="collapse navbar-collapse"&gt;
        &lt;ul class="navbar-nav"&gt;
          &lt;li class="nav-item"&gt;
            &lt;router-link to="/" class="nav-link" active-class="active"&gt;
              Home
            &lt;/router-link&gt;
          &lt;/li&gt;
          &lt;li class="nav-item"&gt;
            &lt;router-link to="/about" class="nav-link" active-class="active"&gt;
              About
            &lt;/router-link&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
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
            href="https://getbootstrap.com/docs/5.3/components/navbar/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Navbar</span>
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
