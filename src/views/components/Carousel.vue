<template>
  <div class="min-vh-100">
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
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Carousel</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">🎠 Carousel</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のカルーセル（スライドショー）コンポーネント</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. 基本的なCarousel</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          画像やコンテンツをスライド表示するコンポーネントです。
        </p>

        <div class="preview-box mb-3">
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex align-items-center justify-content-center" style="height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                  <h3 class="text-white">スライド 1</h3>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex align-items-center justify-content-center" style="height: 300px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                  <h3 class="text-white">スライド 2</h3>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex align-items-center justify-content-center" style="height: 300px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                  <h3 class="text-white">スライド 3</h3>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">前へ</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">次へ</span>
            </button>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div id="carouselExample" class="carousel slide" data-bs-ride="carousel"&gt;
  &lt;div class="carousel-inner"&gt;
    &lt;div class="carousel-item active"&gt;
      &lt;img src="slide1.jpg" class="d-block w-100" alt="..."&gt;
    &lt;/div&gt;
    &lt;div class="carousel-item"&gt;
      &lt;img src="slide2.jpg" class="d-block w-100" alt="..."&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="carousel-control-prev" type="button"
          data-bs-target="#carouselExample" data-bs-slide="prev"&gt;
    &lt;span class="carousel-control-prev-icon"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class="carousel-control-next" type="button"
          data-bs-target="#carouselExample" data-bs-slide="next"&gt;
    &lt;span class="carousel-control-next-icon"&gt;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. インジケーター付き</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          現在の位置を示すインジケーターを追加できます。
        </p>

        <div class="preview-box mb-3">
          <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex align-items-center justify-content-center" style="height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                  <h3 class="text-white">スライド 1</h3>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex align-items-center justify-content-center" style="height: 300px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                  <h3 class="text-white">スライド 2</h3>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex align-items-center justify-content-center" style="height: 300px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                  <h3 class="text-white">スライド 3</h3>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;div id="carouselIndicators" class="carousel slide"&gt;
  &lt;div class="carousel-indicators"&gt;
    &lt;button type="button" data-bs-target="#carouselIndicators"
            data-bs-slide-to="0" class="active"&gt;&lt;/button&gt;
    &lt;button type="button" data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="carousel-inner"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/components/carousel/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Carousel</span>
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
