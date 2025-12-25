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
              <span style="color: var(--text-secondary)">ユーティリティ</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page" style="color: var(--text-primary)">Typography</li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">✏️ Typography</h1>
        <p class="mb-0" style="color: var(--text-secondary)">Bootstrap 5のタイポグラフィユーティリティ</p>
      </div>
    </header>

    <div class="container pb-5">
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">1. 見出し</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>&lt;h1&gt;</code>〜<code>&lt;h6&gt;</code>タグまたは<code>.h1</code>〜<code>.h6</code>クラスを使用できます。
        </p>

        <div class="preview-box mb-3">
          <h1>h1. Bootstrap見出し</h1>
          <h2>h2. Bootstrap見出し</h2>
          <h3>h3. Bootstrap見出し</h3>
          <h4>h4. Bootstrap見出し</h4>
          <h5>h5. Bootstrap見出し</h5>
          <h6 class="mb-0">h6. Bootstrap見出し</h6>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;h1&gt;h1. Bootstrap見出し&lt;/h1&gt;
&lt;h2&gt;h2. Bootstrap見出し&lt;/h2&gt;
&lt;h3&gt;h3. Bootstrap見出し&lt;/h3&gt;

&lt;!-- クラスとして使用 --&gt;
&lt;p class="h1"&gt;h1サイズのテキスト&lt;/p&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">2. Display見出し</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          より大きく目立つ見出しには<code>.display-*</code>クラスを使用します。
        </p>

        <div class="preview-box mb-3">
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
          <h1 class="display-5">Display 5</h1>
          <h1 class="display-6 mb-0">Display 6</h1>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;h1 class="display-1"&gt;Display 1&lt;/h1&gt;
&lt;h1 class="display-2"&gt;Display 2&lt;/h1&gt;
&lt;h1 class="display-3"&gt;Display 3&lt;/h1&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">3. テキストサイズ</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.fs-*</code>クラスでフォントサイズを調整できます。
        </p>

        <div class="preview-box mb-3">
          <p class="fs-1">fs-1 テキスト</p>
          <p class="fs-2">fs-2 テキスト</p>
          <p class="fs-3">fs-3 テキスト</p>
          <p class="fs-4">fs-4 テキスト</p>
          <p class="fs-5">fs-5 テキスト</p>
          <p class="fs-6 mb-0">fs-6 テキスト</p>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;p class="fs-1"&gt;fs-1 テキスト&lt;/p&gt;
&lt;p class="fs-4"&gt;fs-4 テキスト&lt;/p&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">4. フォントウェイト</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.fw-*</code>クラスでフォントの太さを変更できます。
        </p>

        <div class="preview-box mb-3">
          <p class="fw-bold">太字テキスト</p>
          <p class="fw-bolder">より太いテキスト</p>
          <p class="fw-semibold">セミボールドテキスト</p>
          <p class="fw-medium">ミディアムテキスト</p>
          <p class="fw-normal">通常テキスト</p>
          <p class="fw-light">細字テキスト</p>
          <p class="fw-lighter mb-0">より細いテキスト</p>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;p class="fw-bold"&gt;太字テキスト&lt;/p&gt;
&lt;p class="fw-normal"&gt;通常テキスト&lt;/p&gt;
&lt;p class="fw-light"&gt;細字テキスト&lt;/p&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">5. テキスト配置</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.text-*</code>クラスでテキストの配置を変更できます。
        </p>

        <div class="preview-box mb-3">
          <p class="text-start">左揃えテキスト</p>
          <p class="text-center">中央揃えテキスト</p>
          <p class="text-end mb-0">右揃えテキスト</p>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;p class="text-start"&gt;左揃えテキスト&lt;/p&gt;
&lt;p class="text-center"&gt;中央揃えテキスト&lt;/p&gt;
&lt;p class="text-end"&gt;右揃えテキスト&lt;/p&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">6. テキスト装飾</h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          様々なテキスト装飾クラスが用意されています。
        </p>

        <div class="preview-box mb-3">
          <p class="text-decoration-underline">下線付きテキスト</p>
          <p class="text-decoration-line-through">取り消し線テキスト</p>
          <p class="text-decoration-none">
            <a href="#">下線なしリンク</a>
          </p>
          <p class="fst-italic">イタリックテキスト</p>
          <p class="fst-normal mb-0">標準スタイルテキスト</p>
        </div>

        <div class="code-box">
          <pre><code class="language-html">&lt;p class="text-decoration-underline"&gt;下線付きテキスト&lt;/p&gt;
&lt;p class="text-decoration-line-through"&gt;取り消し線テキスト&lt;/p&gt;
&lt;p class="fst-italic"&gt;イタリックテキスト&lt;/p&gt;</code></pre>
        </div>
      </section>

      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">参考リンク</h2>
        <div class="d-flex flex-column gap-2">
          <a href="https://getbootstrap.com/docs/5.3/content/typography/" target="_blank"
             class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
             style="width: fit-content; border-color: var(--primary-blue); color: var(--primary-blue);">
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Typography</span>
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
