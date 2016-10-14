<template>
  <div class="editor">
    <textarea v-model="input" debounce="300"></textarea>
    <div class="editor-out" v-html="output"></div>
  </div>
</template>

<script>
import Marked from 'marked'
import todoStorage from './../store.js'

export default {
  data () {
    return {
      input: todoStorage.fetch()
    }
  },
  computed: {
    output: function () {
      if (this.input.length !== 0) {
        return Marked(this.input)
      } else {
        return ''
      }
    }
  },
  // watch changes for localStorage persistence
  watch: {
    input: {
      handler: function (input) {
        todoStorage.save(input)
      }
    }
  }
}
</script>

<style>
.editor {
  margin: 0;
  height: 100%;
}

.editor h1:first-child {
  margin-top: 20px;
}


textarea,
.editor-out {
  display: inline-block;
  width: 50%;
  height: 100%;
  margin: 0;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0;
  overflow-y: auto;
}

textarea {
  resize: none;
  outline: none;
  float: left;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px 20px 60px;
}

textarea, textarea:focus {
  border: none;
  border-right: 1px solid #ccc;
}

.editor-out {
  float: right;
  padding: 0 20px 60px;
}

code {
  color: #f66;
}
</style>
