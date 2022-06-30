<template>
  <div id="app">
    <p v-show="isshow">v-show的显示方式是利用css属性html标签不会被删除用的是display:none属性</p>
    <button @click="isshow = !isshow">按钮</button>
    <p v-if="isshow1">v-if的显示方式是删除html标签，可以用多种条件来限制类似于if else语句</p>
    <button @click="isshow1 = !isshow1">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isshow: true,
      isshow1: true,
    }
  },
}
</script>

<style></style>
