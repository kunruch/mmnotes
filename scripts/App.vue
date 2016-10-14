<template>
  <div id="app">
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

<style>
html,
body {
  margin: 0;
  height: 100%;
}

#app {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 42px;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
