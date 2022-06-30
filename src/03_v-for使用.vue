<template>
  <div id="app">
    <p>数组的渲染方式：推荐用索引来当key，key值是不能重复的添加key可以提高渲染的效率</p>
    <ul>
        <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
     <p>对象的渲染方式：推荐用id来当key值</p>
    <ul>
        <li v-for="(item) in stuArr" :key="item.id">{{ item.id }}========{{ item.name }}============{{ item.sex }}========{{item.hobby}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      arr: ['小明', '小蓝', '小赵'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
    }
  },
}
</script>

<style></style>
