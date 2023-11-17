<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 17:53:48
-->
<template>
  <!--
    1、当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。
    2、如果一个子组件的根元素已经有了 class 或 style attribute，它会和从父组件上继承的值合并
    3、click监听器也会被添加到根元素上，当原生的 <button> 被点击时，会触发父元素上的click事件,
      若子组件中也有 click 事件，则点击时，会同时触发父元素和子元素上的 click 事件
   -->
  <button class="large" @click="() => console.log('click my component')">click me</button>
  <p>{{ props.title }}</p>
  {{ countRef }}
</template>

<script setup>
import { defineProps, ref, provide } from 'vue'
const props = defineProps(['title'])
const countRef = ref(1)
provide('title', countRef)
// const countRef = ref(1)
// defineExpose({
//   countRef
// })

</script>
<style lang="less">
.home {
  display: flex;
  justify-content: center;
}
.left {
  width: 500px;
  text-align: left;
}
.large {
  color: #000;
}
</style>
