<template>
  <div class="editor">
    <textarea v-model="input" debounce="300"></textarea>
    <div v-html="input | marked"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
.editor {
  margin: 0;
  height: 100%;
}


textarea, 
.editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  margin: 0;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  border-radius: 0;
}

textarea {
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

textarea, textarea:focus {
  border: none;
  border-right: 1px solid #ccc;
}

code {
  color: #f66;
}
</style>
