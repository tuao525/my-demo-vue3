<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 15:14:19
-->
<template>
  <div class="home">
    <div class='left'>
      <MyBtn
       class="btn"
       @click="() => console.log('click me!')"
       title='123456'
       content="我是内容"
      />
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import MyBtn from './component/MyBtn.vue'
// const message = ref('')
// const title = ref('')
</script>
<style lang="less">
.home{
    display: flex;
    justify-content: center;
}
.left {
    width:500px;
    text-align:left
}
.btn {
  font-size: 12x;
  color: skyblue;
}
</style>
