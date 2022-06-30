<template>
  <div id="app">
    <p>对象的更新检测</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="reverse">数组翻转</button>
    <button @click="slice">截取前3个</button>
    <button @click="change">更新第一个元素值</button>
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
  methods: {
    reverse(){
        this.arr.reverse()
        console.log(this.arr);
    },
    slice(){
        this.arr.slice(0,3)
        console.log(this.arr.slice(0,3));
        this.arr = this.arr.slice(0,3)
        console.log(this.arr);
    },
    change(){
        this.arr[0]=100
        console.log(this.arr);
        this.$set(this.arr,0,100)
    }
  },
}
</script>

<style></style>
