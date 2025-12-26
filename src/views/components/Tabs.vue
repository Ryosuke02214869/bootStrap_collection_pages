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
              Tabs
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📑 Tabs
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のタブナビゲーションコンポーネント
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なTabs -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なTabs
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          コンテンツを切り替えるタブナビゲーションです。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                ホーム
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                プロフィール
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                コンタクト
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="p-3">
                <h5>ホームタブ</h5>
                <p>これはホームタブのコンテンツです。</p>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="p-3">
                <h5>プロフィールタブ</h5>
                <p>これはプロフィールタブのコンテンツです。</p>
              </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div class="p-3">
                <h5>コンタクトタブ</h5>
                <p>これはコンタクトタブのコンテンツです。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- タブナビゲーション --&gt;
&lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link active" id="home-tab" data-bs-toggle="tab"
            data-bs-target="#home" type="button" role="tab"&gt;
      ホーム
    &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="profile-tab" data-bs-toggle="tab"
            data-bs-target="#profile" type="button" role="tab"&gt;
      プロフィール
    &lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- タブコンテンツ --&gt;
&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane fade show active" id="home" role="tabpanel"&gt;
    ホームタブのコンテンツ
  &lt;/div&gt;
  &lt;div class="tab-pane fade" id="profile" role="tabpanel"&gt;
    プロフィールタブのコンテンツ
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Pills -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. Pills（ピル型）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.nav-pills</code>クラスで丸みのあるスタイルになります。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
              >
                ホーム
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
              >
                プロフィール
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
              >
                コンタクト
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
              <div class="p-3">ホームタブのコンテンツ（Pills）</div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel">
              <div class="p-3">プロフィールタブのコンテンツ（Pills）</div>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel">
              <div class="p-3">コンタクトタブのコンテンツ（Pills）</div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;ul class="nav nav-pills" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link active" data-bs-toggle="pill"
            data-bs-target="#pills-home" type="button" role="tab"&gt;
      ホーム
    &lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" data-bs-toggle="pill"
            data-bs-target="#pills-profile" type="button" role="tab"&gt;
      プロフィール
    &lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane fade show active" id="pills-home" role="tabpanel"&gt;
    ホームタブのコンテンツ
  &lt;/div&gt;
  &lt;div class="tab-pane fade" id="pills-profile" role="tabpanel"&gt;
    プロフィールタブのコンテンツ
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 垂直タブ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. 垂直タブ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Flexboxグリッドを使用して垂直方向のタブを作成できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="row">
            <div class="col-3">
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                >
                  ホーム
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                >
                  プロフィール
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                >
                  メッセージ
                </button>
                <button
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                >
                  設定
                </button>
              </div>
            </div>
            <div class="col-9">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel">
                  <h5>ホーム</h5>
                  <p>垂直タブのホームコンテンツです。</p>
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel">
                  <h5>プロフィール</h5>
                  <p>垂直タブのプロフィールコンテンツです。</p>
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel">
                  <h5>メッセージ</h5>
                  <p>垂直タブのメッセージコンテンツです。</p>
                </div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel">
                  <h5>設定</h5>
                  <p>垂直タブの設定コンテンツです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="row"&gt;
  &lt;div class="col-3"&gt;
    &lt;div class="nav flex-column nav-pills" role="tablist"&gt;
      &lt;button class="nav-link active" data-bs-toggle="pill"
              data-bs-target="#v-pills-home" type="button" role="tab"&gt;
        ホーム
      &lt;/button&gt;
      &lt;button class="nav-link" data-bs-toggle="pill"
              data-bs-target="#v-pills-profile" type="button" role="tab"&gt;
        プロフィール
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-9"&gt;
    &lt;div class="tab-content"&gt;
      &lt;div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"&gt;
        ホームコンテンツ
      &lt;/div&gt;
      &lt;div class="tab-pane fade" id="v-pills-profile" role="tabpanel"&gt;
        プロフィールコンテンツ
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Fill and Justify -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. Fill and Justify
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.nav-fill</code>や<code>.nav-justified</code>で幅を調整できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <p class="fw-bold mb-2">Nav Fill（幅が可変）:</p>
          <ul class="nav nav-pills nav-fill mb-4">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Much longer nav link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>

          <p class="fw-bold mb-2">Nav Justified（幅が均等）:</p>
          <ul class="nav nav-pills nav-justified mb-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Much longer nav link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Nav Fill --&gt;
&lt;ul class="nav nav-pills nav-fill"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Nav Justified --&gt;
&lt;ul class="nav nav-pills nav-justified"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <!-- 無効化されたタブ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. 無効化されたタブ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.disabled</code>クラスでタブを無効化できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">アクティブ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">リンク</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">無効</a>
            </li>
          </ul>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;ul class="nav nav-tabs"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;アクティブ&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;リンク&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;
      無効
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/components/navs-tabs/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Navs & Tabs</span>
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
