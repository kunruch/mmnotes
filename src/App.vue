<template>
  <div id="app">
    <header class="header">
      <div class="header-left">
        MMNotes
      </div>
    </header>
    <editor></editor>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'

export default {
  components: {
    Editor
  }
}
</script>

<style lang="css" src="./../node_modules/mmcss/dist/mm.css"></style>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  font-size: 14px;
}
</style>
