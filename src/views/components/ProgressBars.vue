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
              Progress Bars
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📊 Progress Bars
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のプログレスバーコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なProgress Bar -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なProgress Bar
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.progress</code>と<code>.progress-bar</code>を組み合わせて使用します。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar"
       style="width: 25%" aria-valuenow="25"
       aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar"
       style="width: 75%" aria-valuenow="75"
       aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ラベル付き -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. ラベル付きProgress Bar
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          プログレスバー内にテキストを表示できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              25%
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar"
       style="width: 25%" aria-valuenow="25"&gt;
    25%
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 高さ調整 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 高さの調整
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.progress</code>にheightスタイルを設定して高さを変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress mb-3" style="height: 1px">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 10px">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3" style="height: 20px">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress" style="height: 30px">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress" style="height: 1px"&gt;
  &lt;div class="progress-bar" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress" style="height: 20px"&gt;
  &lt;div class="progress-bar" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- カラーバリエーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. カラーバリエーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          背景色クラスを使用して色を変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress mb-3">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-success" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-info" style="width: 50%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-warning" style="width: 75%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-danger" style="width: 100%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 複数のバー -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 複数のProgress Bar
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          1つのプログレスコンテナに複数のバーを配置できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress"&gt;
  &lt;div class="progress-bar" style="width: 15%"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-success" style="width: 30%"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-info" style="width: 20%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ストライプ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. ストライプ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.progress-bar-striped</code>クラスでストライプ模様を追加できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped bg-success"
       style="width: 50%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- アニメーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. アニメーションストライプ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.progress-bar-animated</code>クラスでストライプをアニメーションさせることができます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped progress-bar-animated"
       style="width: 75%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 実用例 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          8. 実用例
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          実際の使用例です。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <!-- ファイルアップロード -->
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-1">
              <span>ファイルアップロード中...</span>
              <span>68%</span>
            </div>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 68%"
                aria-valuenow="68"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <!-- スキルレベル -->
          <div class="mb-4">
            <h6>スキルレベル</h6>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: 90%"></div>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>JavaScript</span>
                <span>75%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-info" role="progressbar" style="width: 75%"></div>
              </div>
            </div>
            <div>
              <div class="d-flex justify-content-between mb-1">
                <span>Vue.js</span>
                <span>60%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 60%"></div>
              </div>
            </div>
          </div>

          <!-- ストレージ使用状況 -->
          <div>
            <h6>ストレージ使用状況</h6>
            <div class="d-flex justify-content-between mb-1">
              <span>8.5 GB / 15 GB</span>
              <span>57%</span>
            </div>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 30%"></div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 20%"></div>
              <div class="progress-bar bg-danger" role="progressbar" style="width: 7%"></div>
            </div>
            <small class="text-muted">
              <span class="badge bg-primary">ドキュメント 30%</span>
              <span class="badge bg-warning text-dark">画像 20%</span>
              <span class="badge bg-danger">動画 7%</span>
            </small>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- ファイルアップロード --&gt;
&lt;div class="d-flex justify-content-between mb-1"&gt;
  &lt;span&gt;ファイルアップロード中...&lt;/span&gt;
  &lt;span&gt;68%&lt;/span&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped progress-bar-animated"
       style="width: 68%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- スキルレベル --&gt;
&lt;div class="d-flex justify-content-between mb-1"&gt;
  &lt;span&gt;HTML/CSS&lt;/span&gt;
  &lt;span&gt;90%&lt;/span&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-success" style="width: 90%"&gt;&lt;/div&gt;
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
            href="https://getbootstrap.com/docs/5.3/components/progress/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Progress</span>
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
