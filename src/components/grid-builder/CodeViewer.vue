<template>
  <div class="code-viewer glass-card p-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <button
        @click="isExpanded = !isExpanded"
        class="btn btn-sm btn-outline-primary d-flex align-items-center gap-2"
      >
        <span>{{ isExpanded ? '▼' : '▶' }}</span>
        <span>コード表示</span>
      </button>

      <button
        v-if="isExpanded"
        @click="copyCode"
        class="btn btn-sm btn-primary-custom"
        :disabled="copySuccess"
      >
        {{ copySuccess ? '✓ コピーしました！' : '📋 コピー' }}
      </button>
    </div>

    <div v-if="isExpanded" class="code-content">
      <div class="code-box">
        <pre><code ref="codeElement" class="language-html">{{ htmlCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github.css'

// HTML言語サポートを登録
hljs.registerLanguage('html', html)

const props = defineProps({
  htmlCode: {
    type: String,
    required: true
  }
})

const isExpanded = ref(false)
const copySuccess = ref(false)
const codeElement = ref(null)

const highlightCode = () => {
  if (codeElement.value) {
    hljs.highlightElement(codeElement.value)
  }
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.htmlCode)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('コピーに失敗しました:', err)
  }
}

watch(isExpanded, async (newValue) => {
  if (newValue) {
    await nextTick()
    highlightCode()
  }
})

watch(
  () => props.htmlCode,
  async () => {
    if (isExpanded.value) {
      await nextTick()
      highlightCode()
    }
  }
)

onMounted(() => {
  if (isExpanded.value) {
    highlightCode()
  }
})
</script>

<style scoped>
.code-content {
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
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
  max-height: 400px;
}

.code-box code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.btn-primary-custom:disabled {
  opacity: 1;
  background: linear-gradient(135deg, #10b981, #059669);
}
</style>
