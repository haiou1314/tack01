<template>
  <div id="app">
    <a :class="{clor:true}">class语法{class类名：是否显示}</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    }
  },
}
</script>

<style>
.clor{
    color:red;
}
</style>
