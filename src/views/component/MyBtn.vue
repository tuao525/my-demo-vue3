<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 15:14:40
-->
<template>
  <!--
    1、当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。
    2、如果一个子组件的根元素已经有了 class 或 style attribute，它会和从父组件上继承的值合并
    3、click监听器也会被添加到根元素上，当原生的 <button> 被点击时，会触发父元素上的click事件,
      若子组件中也有 click 事件，则点击时，会同时触发父元素和子元素上的 click 事件
   -->
   <!--
      使用 inheritAttrs: false可以使 组件不自动继承 attribute
      使用 v-bind='$attr' 可以解除禁止
    -->
  <button class="large" :="attr">click me</button>

  <!--
    如果下一个组件会在根节点上渲染另一个组件，那么此组件接收的 attribute 会继续透传给下一个组件。
    注意：
      1、透传的 attribute 不会包含在子组件上声明过的 props 或是针对 emits 声明事件的 v-on 侦听函数，
        换句话说，声明过的 props 和侦听函数在子组件中被使用了就不会透传个下一个组件。
      2、透传的 attribute 若符合声明，也可以作为 props 传入下一个组件。
  -->
  <!-- <BaseBtn></BaseBtn> -->
  <!-- <h6>{{ props.title }}</h6> -->
  <p>{{  attr.title }}</p>
  <p>{{  attr.content }}</p>
  <!-- <p>{{  props.title }}</p> -->
  <!-- <p>{{  props.content }}</p> -->
</template>

<script setup>
// import BaseBtn from './BaseBtn.vue'
// import { defineProps } from 'vue'
import { useAttrs } from 'vue'
const attr = useAttrs()
// const props = defineProps(['title', 'content'])
// defineOptions({
//   inheritAttrs: false
// })
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
