<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-13 18:03:32
-->
<template>
  <div class="home">
    <div class="left">
      <input type="text" v-model='question'>
    <p>{{ answer }}</p>
    <h4>watch监听一个getter函数</h4>
      <button @click="() => (x += 1)">{{ x }}</button>
      <button @click="click">{{ y }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, watchEffect } from 'vue'
const answer = ref('')
const question = ref('')
const x = ref(0)
const y = ref(0)
const obj = reactive({ count: 0 })
// 使用 watch 函数在每次响应式状态发生变化时触发回调函数
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion?.indexOf('?') > -1 || newQuestion?.indexOf('？') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno/wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error!' + error
    }
  }
})

// watch监听一个getter函数
// watch(() => x.value + y.value, (sum) => {
//   return console.log(`sum of X + Y is ${sum}`)
// })

// watch监听一个多个数据源组成的数组,在监听一个数组时，他的老数据也是一个数组
// watch([x, () => y.value], ([newX, newY], [oldX, oldY]) => {
//   console.log(
//     `oldX is ${oldX} and oldY is ${oldY} , x is ${newX} and Y is ${newY}`
//   )
// })

// watch不能监听对象中的数据，若想监听对象中的数据，可以使用一个返回该属性的 getter 函数
watch(() => obj.count, (newCount) => {
  console.log(`count is ${newCount}`)
})

// 直接给atch传入一个响应式对象，会隐式的创建一个深层侦听器，其回调函数所在的所有嵌套的变更时都会被触发，
// 同时，此时newValue和oldValue是相等的，此时是同一个对象
watch(obj, (newValue, oldValue) => {
  console.log(`newValue is ${newValue.count}, oldValue is ${oldValue.count}`)
})

// 给watch添加一个deep属性，可以将其转换成深度侦听器
watch(() => obj.count, (newCount) => {
  console.log(`count is ${newCount}`)
}, { deep: true })

// watch 默认是懒执行的：仅当数据源变化时，才会执行回调
// 给watch添加一个immediate属性，会在创建侦听器时，立即执行一遍回调
// watch(
//   x,
//   (newX, oldX) => {
//     console.log(`oldX is ${oldX}, newX id ${newX}`)
//     y.value += 1
//   },
//   { immediate: true }
// )

// watchEffect, 可以消除手动维护以来的负担，它只跟踪回调中被使用的属性，而不是递归的跟踪所有属性
// 同时，他也会在侦听器创建时，立即执行一边回调
// Vue 3 在同一个响应式追踪周期内会避免重复执行相同的响应式函数
watchEffect(() => {
  x.value += 1
})

const click = () => {
  y.value += 1
  obj.count += 1
  x.value += 1
}
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
