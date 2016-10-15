<template>
  <div>
    <editor-header></editor-header>
    <div class="editor-container">
      <editor></editor>
    </div>
  </div>
</template>

<script>
import EditorHeader from './components/EditorHeader.vue'
import Editor from './components/Editor.vue'

export default {
  components: {
    EditorHeader,
    Editor
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}

.editor-container {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 42px;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
