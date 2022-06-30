<template>
  <div id="app">
    <p v-html="html"></p>
     <p v-text="text"></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      html: '<h2>v-html识别标签</h2>',
      text:'<h2>v-text不识别标签</h2>'
    }
  },
}
</script>

<style></style>
