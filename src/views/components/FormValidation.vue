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
              Form Validation
            </li>
          </ol>
        </nav>
        <h1 class="h2 mb-2" style="color: var(--text-primary); font-weight: 700">
          ✅ Form Validation
        </h1>
        <p class="mb-0" style="color: var(--text-secondary)">
          Bootstrap 5のフォームバリデーション機能
        </p>
      </div>
    </header>

    <div class="container pb-5">
      <!-- カスタムバリデーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          1. カスタムバリデーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          Bootstrapのカスタムバリデーションスタイルを使用したフォーム検証です。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">名</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value="太郎"
                  required
                />
                <div class="valid-feedback">入力されています！</div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">姓</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  value="山田"
                  required
                />
                <div class="valid-feedback">入力されています！</div>
              </div>
              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">ユーザー名</label>
                <div class="input-group">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    placeholder="username"
                    required
                  />
                  <div class="invalid-feedback">ユーザー名を入力してください。</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustomEmail" class="form-label">メールアドレス</label>
                <input
                  type="email"
                  class="form-control"
                  id="validationCustomEmail"
                  placeholder="name@example.com"
                  required
                />
                <div class="invalid-feedback">有効なメールアドレスを入力してください。</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                  <label class="form-check-label" for="invalidCheck">
                    利用規約に同意する
                  </label>
                  <div class="invalid-feedback">同意する必要があります。</div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">送信</button>
              </div>
            </div>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;form class="needs-validation" novalidate&gt;
  &lt;div class="row g-3"&gt;
    &lt;div class="col-md-6"&gt;
      &lt;label for="validationCustom01" class="form-label"&gt;名&lt;/label&gt;
      &lt;input type="text" class="form-control" id="validationCustom01" required&gt;
      &lt;div class="valid-feedback"&gt;入力されています！&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-6"&gt;
      &lt;label for="validationCustomUsername" class="form-label"&gt;ユーザー名&lt;/label&gt;
      &lt;input type="text" class="form-control" id="validationCustomUsername" required&gt;
      &lt;div class="invalid-feedback"&gt;ユーザー名を入力してください。&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-12"&gt;
      &lt;button class="btn btn-primary" type="submit"&gt;送信&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;

&lt;script&gt;
// フォームバリデーションの有効化
const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }, false)
})
&lt;/script&gt;</code></pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li><code>.needs-validation</code>: カスタムバリデーションを有効化</li>
            <li><code>novalidate</code>: ブラウザのデフォルトバリデーションを無効化</li>
            <li><code>.was-validated</code>: 送信時にバリデーションスタイルを適用</li>
            <li><code>.valid-feedback</code> / <code>.invalid-feedback</code>: フィードバックメッセージ</li>
          </ul>
        </div>
      </section>

      <!-- ブラウザデフォルト -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          2. ブラウザデフォルトのバリデーション
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>novalidate</code>属性を削除すると、ブラウザのデフォルトバリデーションが使用されます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form>
            <div class="row g-3">
              <div class="col-md-6">
                <label for="defaultValidation01" class="form-label">名</label>
                <input type="text" class="form-control" id="defaultValidation01" required />
              </div>
              <div class="col-md-6">
                <label for="defaultValidation02" class="form-label">姓</label>
                <input type="text" class="form-control" id="defaultValidation02" required />
              </div>
              <div class="col-12">
                <label for="defaultValidationEmail" class="form-label">メールアドレス</label>
                <input type="email" class="form-control" id="defaultValidationEmail" required />
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">送信</button>
              </div>
            </div>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- novalidate属性なし --&gt;
&lt;form&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label"&gt;名&lt;/label&gt;
    &lt;input type="text" class="form-control" required&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label class="form-label"&gt;メールアドレス&lt;/label&gt;
    &lt;input type="email" class="form-control" required&gt;
  &lt;/div&gt;
  &lt;button class="btn btn-primary" type="submit"&gt;送信&lt;/button&gt;
&lt;/form&gt;</code></pre>
        </div>
      </section>

      <!-- サーバーサイドバリデーション -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          3. サーバーサイドバリデーションのスタイル
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.is-valid</code>や<code>.is-invalid</code>クラスを使用して、サーバー側のバリデーション結果を表示できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form>
            <div class="mb-3">
              <label for="serverValidEmail" class="form-label">メールアドレス（有効）</label>
              <input
                type="email"
                class="form-control is-valid"
                id="serverValidEmail"
                value="user@example.com"
              />
              <div class="valid-feedback">このメールアドレスは使用できます！</div>
            </div>

            <div class="mb-3">
              <label for="serverInvalidEmail" class="form-label">メールアドレス（無効）</label>
              <input
                type="email"
                class="form-control is-invalid"
                id="serverInvalidEmail"
                value="user@"
              />
              <div class="invalid-feedback">このメールアドレスは既に使用されています。</div>
            </div>

            <div class="mb-3">
              <label for="serverValidUsername" class="form-label">ユーザー名（有効）</label>
              <input
                type="text"
                class="form-control is-valid"
                id="serverValidUsername"
                value="johndoe"
              />
              <div class="valid-feedback">このユーザー名は使用できます！</div>
            </div>

            <div class="mb-3">
              <label for="serverInvalidUsername" class="form-label">ユーザー名（無効）</label>
              <input
                type="text"
                class="form-control is-invalid"
                id="serverInvalidUsername"
                value="admin"
              />
              <div class="invalid-feedback">このユーザー名は既に使用されています。</div>
            </div>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 有効な入力 --&gt;
&lt;input type="email" class="form-control is-valid" value="user@example.com"&gt;
&lt;div class="valid-feedback"&gt;このメールアドレスは使用できます！&lt;/div&gt;

&lt;!-- 無効な入力 --&gt;
&lt;input type="email" class="form-control is-invalid" value="user@"&gt;
&lt;div class="invalid-feedback"&gt;このメールアドレスは既に使用されています。&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- ツールチップスタイル -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. ツールチップスタイルのフィードバック
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.valid-tooltip</code>や<code>.invalid-tooltip</code>を使用すると、フィードバックがツールチップとして表示されます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-md-6 position-relative">
                <label for="tooltipValidation01" class="form-label">名</label>
                <input
                  type="text"
                  class="form-control"
                  id="tooltipValidation01"
                  value="太郎"
                  required
                />
                <div class="valid-tooltip">入力されています！</div>
              </div>
              <div class="col-md-6 position-relative">
                <label for="tooltipValidation02" class="form-label">姓</label>
                <input
                  type="text"
                  class="form-control"
                  id="tooltipValidation02"
                  value="山田"
                  required
                />
                <div class="valid-tooltip">入力されています！</div>
              </div>
              <div class="col-md-6 position-relative">
                <label for="tooltipValidationUsername" class="form-label">ユーザー名</label>
                <div class="input-group">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="tooltipValidationUsername"
                    placeholder="username"
                    required
                  />
                  <div class="invalid-tooltip">ユーザー名を入力してください。</div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">送信</button>
              </div>
            </div>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;form class="needs-validation" novalidate&gt;
  &lt;div class="position-relative"&gt;
    &lt;label class="form-label"&gt;名&lt;/label&gt;
    &lt;input type="text" class="form-control" required&gt;
    &lt;div class="valid-tooltip"&gt;入力されています！&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="position-relative"&gt;
    &lt;label class="form-label"&gt;ユーザー名&lt;/label&gt;
    &lt;input type="text" class="form-control" required&gt;
    &lt;div class="invalid-tooltip"&gt;ユーザー名を入力してください。&lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li>ツールチップを使用する場合、親要素に<code>.position-relative</code>が必要です</li>
            <li><code>.valid-tooltip</code>や<code>.invalid-tooltip</code>でツールチップスタイルになります</li>
          </ul>
        </div>
      </section>

      <!-- サポートされている要素 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. サポートされている要素
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          様々なフォーム要素でバリデーションスタイルを使用できます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <form class="was-validated">
            <div class="mb-3">
              <label for="validationTextarea" class="form-label">テキストエリア</label>
              <textarea
                class="form-control"
                id="validationTextarea"
                placeholder="必須のテキストエリア"
                required
              ></textarea>
              <div class="invalid-feedback">テキストエリアに入力してください。</div>
            </div>

            <div class="mb-3">
              <label for="validationSelect" class="form-label">セレクト</label>
              <select class="form-select" id="validationSelect" required>
                <option value="" selected disabled>選択してください...</option>
                <option value="1">オプション 1</option>
                <option value="2">オプション 2</option>
                <option value="3">オプション 3</option>
              </select>
              <div class="invalid-feedback">オプションを選択してください。</div>
            </div>

            <div class="mb-3">
              <label for="validationFile" class="form-label">ファイル</label>
              <input type="file" class="form-control" id="validationFile" required />
              <div class="invalid-feedback">ファイルを選択してください。</div>
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="validationCheckbox" required />
                <label class="form-check-label" for="validationCheckbox">
                  このチェックボックスにチェックを入れる
                </label>
                <div class="invalid-feedback">チェックを入れる必要があります。</div>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="validationRadio"
                  id="validationRadio1"
                  required
                />
                <label class="form-check-label" for="validationRadio1">
                  ラジオボタン 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="validationRadio"
                  id="validationRadio2"
                  required
                />
                <label class="form-check-label" for="validationRadio2">
                  ラジオボタン 2
                </label>
                <div class="invalid-feedback">いずれかを選択してください。</div>
              </div>
            </div>
          </form>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;form class="was-validated"&gt;
  &lt;!-- テキストエリア --&gt;
  &lt;textarea class="form-control" required&gt;&lt;/textarea&gt;
  &lt;div class="invalid-feedback"&gt;入力してください。&lt;/div&gt;

  &lt;!-- セレクト --&gt;
  &lt;select class="form-select" required&gt;
    &lt;option value=""&gt;選択してください...&lt;/option&gt;
    &lt;option value="1"&gt;オプション 1&lt;/option&gt;
  &lt;/select&gt;
  &lt;div class="invalid-feedback"&gt;選択してください。&lt;/div&gt;

  &lt;!-- ファイル --&gt;
  &lt;input type="file" class="form-control" required&gt;
  &lt;div class="invalid-feedback"&gt;ファイルを選択してください。&lt;/div&gt;

  &lt;!-- チェックボックス --&gt;
  &lt;div class="form-check"&gt;
    &lt;input class="form-check-input" type="checkbox" required&gt;
    &lt;label class="form-check-label"&gt;チェックボックス&lt;/label&gt;
    &lt;div class="invalid-feedback"&gt;チェックが必要です。&lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- ラジオボタン --&gt;
  &lt;div class="form-check"&gt;
    &lt;input class="form-check-input" type="radio" name="radio" required&gt;
    &lt;label class="form-check-label"&gt;ラジオ1&lt;/label&gt;
    &lt;div class="invalid-feedback"&gt;選択が必要です。&lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
        </div>
      </section>

      <!-- 関連リンク -->
      <section class="glass-card p-4">
        <h2 class="h5 mb-3" style="color: var(--text-primary); font-weight: 600">
          参考リンク
        </h2>
        <div class="d-flex flex-column gap-2">
          <a
            href="https://getbootstrap.com/docs/5.3/forms/validation/"
            target="_blank"
            class="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            style="
              width: fit-content;
              border-color: var(--primary-blue);
              color: var(--primary-blue);
            "
          >
            <span>📖</span>
            <span>Bootstrap公式ドキュメント - Form Validation</span>
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
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('html', html)
hljs.registerLanguage('javascript', javascript)

onMounted(() => {
  // Syntax highlighting
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })

  // Enable custom validation for forms with .needs-validation
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      },
      false
    )
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
