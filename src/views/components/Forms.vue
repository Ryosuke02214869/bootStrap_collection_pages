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
              Forms
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          📝 Forms
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のフォームコンポーネントと使い方
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- 基本的なフォーム -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. 基本的なフォーム
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapのフォームは<code>.form-control</code>、<code>.form-label</code>などのクラスでスタイリングします。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">メールアドレス</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">パスワード</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1"> ログイン状態を保持する </label>
            </div>
            <button type="submit" class="btn btn-primary">送信</button>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;form&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email" class="form-label"&gt;メールアドレス&lt;/label&gt;
    &lt;input type="email" class="form-control" id="email"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="password" class="form-label"&gt;パスワード&lt;/label&gt;
    &lt;input type="password" class="form-control" id="password"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3 form-check"&gt;
    &lt;input type="checkbox" class="form-check-input" id="check"&gt;
    &lt;label class="form-check-label" for="check"&gt;ログイン状態を保持する&lt;/label&gt;
  &lt;/div&gt;
  &lt;button type="submit" class="btn btn-primary"&gt;送信&lt;/button&gt;
&lt;/form&gt;</code></pre>
        </div>
      </section>

      <!-- フォームコントロール -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. 各種フォームコントロール
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          テキスト入力、テキストエリア、セレクト、ファイル選択などの様々なフォーム要素。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form>
            <!-- テキスト入力 -->
            <div class="mb-3">
              <label for="textInput" class="form-label">テキスト入力</label>
              <input type="text" class="form-control" id="textInput" placeholder="テキストを入力" />
            </div>

            <!-- テキストエリア -->
            <div class="mb-3">
              <label for="textareaInput" class="form-label">テキストエリア</label>
              <textarea class="form-control" id="textareaInput" rows="3"></textarea>
            </div>

            <!-- セレクト -->
            <div class="mb-3">
              <label for="selectInput" class="form-label">セレクト</label>
              <select class="form-select" id="selectInput">
                <option selected>選択してください</option>
                <option value="1">オプション 1</option>
                <option value="2">オプション 2</option>
                <option value="3">オプション 3</option>
              </select>
            </div>

            <!-- ファイル選択 -->
            <div class="mb-3">
              <label for="fileInput" class="form-label">ファイル選択</label>
              <input class="form-control" type="file" id="fileInput" />
            </div>

            <!-- 範囲スライダー -->
            <div class="mb-3">
              <label for="rangeInput" class="form-label">範囲スライダー</label>
              <input type="range" class="form-range" id="rangeInput" />
            </div>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- テキスト入力 --&gt;
&lt;input type="text" class="form-control" placeholder="テキストを入力"&gt;

&lt;!-- テキストエリア --&gt;
&lt;textarea class="form-control" rows="3"&gt;&lt;/textarea&gt;

&lt;!-- セレクト --&gt;
&lt;select class="form-select"&gt;
  &lt;option&gt;選択してください&lt;/option&gt;
  &lt;option value="1"&gt;オプション 1&lt;/option&gt;
&lt;/select&gt;

&lt;!-- ファイル選択 --&gt;
&lt;input class="form-control" type="file"&gt;

&lt;!-- 範囲スライダー --&gt;
&lt;input type="range" class="form-range"&gt;</code></pre>
        </div>
      </section>

      <!-- サイズ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. フォームコントロールのサイズ
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.form-control-sm</code>と<code>.form-control-lg</code>でサイズを変更できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <input
            type="text"
            class="form-control form-control-lg mb-2"
            placeholder="Large input"
          />
          <input type="text" class="form-control mb-2" placeholder="Default input" />
          <input type="text" class="form-control form-control-sm" placeholder="Small input" />
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;input class="form-control form-control-lg" placeholder="Large input"&gt;
&lt;input class="form-control" placeholder="Default input"&gt;
&lt;input class="form-control form-control-sm" placeholder="Small input"&gt;</code></pre>
        </div>
      </section>

      <!-- チェックボックスとラジオ -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. チェックボックスとラジオボタン
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.form-check</code>クラスでチェックボックスとラジオボタンをスタイリングします。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="mb-3">
            <p class="fw-bold mb-2">チェックボックス:</p>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault"> デフォルトチェックボックス </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked"> チェック済み </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDisabled"
                disabled
              />
              <label class="form-check-label" for="flexCheckDisabled"> 無効化 </label>
            </div>
          </div>

          <div>
            <p class="fw-bold mb-2">ラジオボタン:</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1"> デフォルトラジオ </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2"> 選択済みラジオ </label>
            </div>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- チェックボックス --&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" id="check1"&gt;
  &lt;label class="form-check-label" for="check1"&gt;チェックボックス&lt;/label&gt;
&lt;/div&gt;

&lt;!-- ラジオボタン --&gt;
&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="radio" name="radio" id="radio1"&gt;
  &lt;label class="form-check-label" for="radio1"&gt;ラジオ1&lt;/label&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Floating Labels -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. Floating Labels
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          入力欄にフォーカスするとラベルが浮き上がるスタイル。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">メールアドレス</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">パスワード</label>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="form-floating"&gt;
  &lt;input type="email" class="form-control" id="floatingInput"
         placeholder="name@example.com"&gt;
  &lt;label for="floatingInput"&gt;メールアドレス&lt;/label&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- Vueとの連携 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. Vueとの連携（v-model）
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Vueの<code>v-model</code>を使用して双方向データバインディングを実現できます。
        </p>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;script setup&gt;
import { ref } from 'vue'

const formData = ref({
  email: '',
  password: '',
  remember: false,
  gender: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="handleSubmit"&gt;
    &lt;div class="mb-3"&gt;
      &lt;label class="form-label"&gt;メールアドレス&lt;/label&gt;
      &lt;input type="email" class="form-control" v-model="formData.email"&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label class="form-label"&gt;パスワード&lt;/label&gt;
      &lt;input type="password" class="form-control" v-model="formData.password"&gt;
    &lt;/div&gt;
    &lt;div class="mb-3 form-check"&gt;
      &lt;input type="checkbox" class="form-check-input" v-model="formData.remember"&gt;
      &lt;label class="form-check-label"&gt;ログイン状態を保持&lt;/label&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;送信&lt;/button&gt;
  &lt;/form&gt;
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
            href="https://getbootstrap.com/docs/5.3/forms/overview/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Forms</span>
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
