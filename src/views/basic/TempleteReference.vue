<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 16:37:01
-->
<template>
  <div class="home">
    <div class="left">
      <input type="text" ref="input" />

      <h4>与v-for一起使用</h4>
      <!-- ref数组并不能保证与原数组顺序相同 -->
      <ul>
        <li v-for="item in items" :key="item" ref="itemRefs">
          {{ item }}
        </li>
      </ul>

      <h4>函数模板引用</h4>
      <input
        type="text"
        :ref="
          (el) => {
            // 动态的 :ref 绑定才能够传入一个函数，当绑定的元素被卸载时，函数也会被调用一次，
            // 此时的 el 参数会是null,页面数据变化，也会被调用
            console.log('el:', el)
          }
        "
      />

      <h4>组件上的ref</h4>
      <ChildView ref="childRef" />
      <p>获得子组件上的实例： {{ newRef }}</p>
      <button @click="click">点击</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import ChildView from '../component/ChildView.vue'
const input = ref(null)
const items = ref([1, 2, 3, 4, 5])
const itemRefs = ref([])
const childRef = ref(null)
const newRef = ref(null)

onMounted(() => {
  input?.value?.focus()
  console.log('itemRefs', itemRefs)
  // 使用了 <script setup> 默认组件私有化，父组件无法访问子组件中的任何东西
  // 子组件可以使用 defineExpose 宏显示暴露
  // 父组件使用模板引用获取到该组件的实例时， 得到的类型为 { countRef: 1 }
  console.log('childRef', childRef.value.countRef)
  newRef.value = childRef.value.countRef
})

const click = () => {
  // 操作子组件中的属性
  childRef.value.countRef += 1
}

watchEffect(() => {
  if (childRef.value) {
    newRef.value = childRef.value.countRef
  }
})
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
</style>
