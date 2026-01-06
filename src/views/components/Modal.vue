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
          モーダルには5つのサイズがあり、<code>.modal-dialog</code>に追加のクラスを指定します。
        </p>

        <!-- サイズ一覧テーブル -->
        <div class="table-responsive mb-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>サイズ</th>
                <th>クラス</th>
                <th>最大幅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td><code>.modal-sm</code></td>
                <td>300px</td>
              </tr>
              <tr>
                <td>Default</td>
                <td>なし</td>
                <td>500px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td><code>.modal-lg</code></td>
                <td>800px</td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td><code>.modal-xl</code></td>
                <td>1140px</td>
              </tr>
              <tr>
                <td>Extra extra large</td>
                <td><code>.modal-xxl</code></td>
                <td>1320px</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalSm"
            >
              Small
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalDefault"
            >
              Default
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalLg"
            >
              Large
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalXl"
            >
              Extra Large
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalXxl"
            >
              Extra Extra Large
            </button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- Small modal --&gt;
&lt;div class="modal-dialog modal-sm"&gt;...&lt;/div&gt;

&lt;!-- Default modal --&gt;
&lt;div class="modal-dialog"&gt;...&lt;/div&gt;

&lt;!-- Large modal --&gt;
&lt;div class="modal-dialog modal-lg"&gt;...&lt;/div&gt;

&lt;!-- Extra large modal --&gt;
&lt;div class="modal-dialog modal-xl"&gt;...&lt;/div&gt;

&lt;!-- Extra extra large modal --&gt;
&lt;div class="modal-dialog modal-xxl"&gt;...&lt;/div&gt;</code></pre>
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

      <!-- スクロール可能なモーダル -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          4. スクロール可能なモーダル
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          コンテンツが長い場合、<code>.modal-dialog-scrollable</code>を使用してモーダル本文をスクロール可能にできます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalScrollable"
          >
            スクロール可能なモーダル
          </button>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="modal-dialog modal-dialog-scrollable"&gt;
  &lt;div class="modal-content"&gt;
    &lt;div class="modal-header"&gt;...&lt;/div&gt;
    &lt;div class="modal-body"&gt;
      &lt;!-- 長いコンテンツがここに入ります --&gt;
    &lt;/div&gt;
    &lt;div class="modal-footer"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- フルスクリーンモーダル -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          5. フルスクリーンモーダル
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          モーダルを常にフルスクリーンで表示、または特定のブレークポイント以下でフルスクリーンにできます。
        </p>

        <!-- フルスクリーンクラス一覧 -->
        <div class="table-responsive mb-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>クラス</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>.modal-fullscreen</code></td>
                <td>常にフルスクリーン</td>
              </tr>
              <tr>
                <td><code>.modal-fullscreen-sm-down</code></td>
                <td>576px未満でフルスクリーン</td>
              </tr>
              <tr>
                <td><code>.modal-fullscreen-md-down</code></td>
                <td>768px未満でフルスクリーン</td>
              </tr>
              <tr>
                <td><code>.modal-fullscreen-lg-down</code></td>
                <td>992px未満でフルスクリーン</td>
              </tr>
              <tr>
                <td><code>.modal-fullscreen-xl-down</code></td>
                <td>1200px未満でフルスクリーン</td>
              </tr>
              <tr>
                <td><code>.modal-fullscreen-xxl-down</code></td>
                <td>1400px未満でフルスクリーン</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalFullscreen"
            >
              常にフルスクリーン
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalFullscreenSmDown"
            >
              sm以下でフルスクリーン
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalFullscreenMdDown"
            >
              md以下でフルスクリーン
            </button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- 常にフルスクリーン --&gt;
&lt;div class="modal-dialog modal-fullscreen"&gt;...&lt;/div&gt;

&lt;!-- sm以下でフルスクリーン --&gt;
&lt;div class="modal-dialog modal-fullscreen-sm-down"&gt;...&lt;/div&gt;

&lt;!-- md以下でフルスクリーン --&gt;
&lt;div class="modal-dialog modal-fullscreen-md-down"&gt;...&lt;/div&gt;</code></pre>
        </div>
      </section>

      <!-- 静的な背景 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          6. 静的な背景
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>data-bs-backdrop="static"</code>と<code>data-bs-keyboard="false"</code>を使用すると、背景クリックやESCキーでモーダルを閉じることができなくなります。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalStatic"
          >
            静的な背景のモーダル
          </button>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;div class="modal fade" id="modalStatic"
     data-bs-backdrop="static"
     data-bs-keyboard="false"
     tabindex="-1"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title"&gt;静的な背景&lt;/h5&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        背景をクリックしてもモーダルは閉じません。
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>💡 ポイント:</strong>
          <ul class="mb-0 mt-2">
            <li>
              <code>data-bs-backdrop="static"</code>: 背景クリックでモーダルが閉じなくなります
            </li>
            <li><code>data-bs-keyboard="false"</code>: ESCキーでモーダルが閉じなくなります</li>
          </ul>
        </div>
      </section>

      <!-- アニメーションの制御 -->
      <section class="glass-card p-4 mb-4">
        <h2 class="h4 mb-3" style="color: var(--text-primary); font-weight: 600">
          7. アニメーションの制御
        </h2>
        <p style="color: var(--text-secondary)" class="mb-3">
          <code>.fade</code>クラスを削除すると、フェードアニメーションなしでモーダルが表示されます。
        </p>

        <!-- プレビュー -->
        <div class="preview-box mb-3">
          <div class="d-flex flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalWithFade"
            >
              アニメーションあり（.fade）
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalWithoutFade"
            >
              アニメーションなし
            </button>
          </div>
        </div>

        <!-- コード -->
        <div class="code-box">
          <pre><code class="language-html">&lt;!-- アニメーションあり --&gt;
&lt;div class="modal fade" id="modalWithFade"&gt;...&lt;/div&gt;

&lt;!-- アニメーションなし --&gt;
&lt;div class="modal" id="modalWithoutFade"&gt;...&lt;/div&gt;</code></pre>
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
          <div class="modal-body">これは小さいモーダルです（300px）。</div>
        </div>
      </div>
    </div>

    <!-- Default Modal -->
    <div class="modal fade" id="modalDefault" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Default Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">これはデフォルトサイズのモーダルです（500px）。</div>
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
          <div class="modal-body">これは大きいモーダルです（800px）。</div>
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
          <div class="modal-body">これは特大のモーダルです（1140px）。</div>
        </div>
      </div>
    </div>

    <!-- Extra Extra Large Modal -->
    <div class="modal fade" id="modalXxl" tabindex="-1">
      <div class="modal-dialog modal-xxl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Extra Extra Large Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">これは超特大のモーダルです（1320px）。</div>
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

    <!-- Scrollable Modal -->
    <div class="modal fade" id="modalScrollable" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">スクロール可能なモーダル</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>
              このモーダルは本文がスクロール可能です。コンテンツが長い場合に便利です。
            </p>
            <p>以下はダミーテキストです：</p>
            <p v-for="i in 20" :key="i">
              これは{{ i }}番目の段落です。モーダル本文がスクロール可能であることを示すためのダミーテキストです。
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <div class="modal fade" id="modalFullscreen" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">常にフルスクリーン</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            このモーダルは常にフルスクリーンで表示されます。画面サイズに関係なくビューポート全体を占有します。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen sm-down Modal -->
    <div class="modal fade" id="modalFullscreenSmDown" tabindex="-1">
      <div class="modal-dialog modal-fullscreen-sm-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">sm以下でフルスクリーン</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            このモーダルは576px未満の画面幅でフルスクリーンになります。それ以上のサイズでは通常のモーダルとして表示されます。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen md-down Modal -->
    <div class="modal fade" id="modalFullscreenMdDown" tabindex="-1">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">md以下でフルスクリーン</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            このモーダルは768px未満の画面幅でフルスクリーンになります。それ以上のサイズでは通常のモーダルとして表示されます。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Static backdrop Modal -->
    <div
      class="modal fade"
      id="modalStatic"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">静的な背景</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            背景をクリックしてもモーダルは閉じません。ESCキーも無効です。閉じるには「閉じる」ボタンまたは×ボタンをクリックしてください。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal with fade animation -->
    <div class="modal fade" id="modalWithFade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">アニメーションあり</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            このモーダルは.fadeクラスによってフェードアニメーションで表示されます。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal without fade animation -->
    <div class="modal" id="modalWithoutFade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">アニメーションなし</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            このモーダルは.fadeクラスがないため、アニメーションなしで即座に表示されます。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              閉じる
            </button>
          </div>
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

.table {
  color: var(--text-primary);
}

.table-bordered {
  border-color: var(--border-color);
}

.table th,
.table td {
  border-color: var(--border-color);
}

.table thead {
  background: rgba(14, 165, 233, 0.1);
}
</style>
