<template>
  <div id="app">
    <a :style="{color:'red'}">sty语法{css属性：值}</a>
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
