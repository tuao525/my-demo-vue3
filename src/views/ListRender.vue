<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-09 15:56:44
-->
<template>
  <div class="home">
    <div v-for='item in itemsRef' :key='item'> {{item.message}} </div>
    <ul>
      <li v-for='(item, index) in itemsRef' :key='index'>{{parentMessage}} - {{index}} - {{item.message}}</li>
    </ul>
    <h4>解构</h4>
    <ul>
      <li v-for='({message}, index) in itemsRef' :key='index'>{{parentMessage}} - {{index}} - {{message}}</li>
    </ul>
    <h4>使用作为分隔符代替in</h4>
    <ul>
      <li v-for='({message}, index) of itemsRef' :key='index'>{{parentMessage}} - {{index}} - {{message}}</li>
    </ul>
    <h4>遍历对象</h4>
    <ul>
      <!-- 第一个参数为属性值，第二个参数为属性名，第三个为索引 -->
      <li v-for='(item,key,index) in myObject' :key='index'>{{ key }}:  {{ item }}</li>
    </ul>
    <h4>展示过滤或排序后的结果</h4>
    <ul>
      <li v-for='item in evenNumbers' :key='item'>{{item}}</li>
    </ul>
    <h4>多层嵌套</h4>
    <ul v-for='(item,index) in sets' :key='index'>
      <li v-for='n in even(item)' :key='n'>{{ n }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
const parentMessage = ref('Parent')
const itemsRef = ref(
  [{ message: 'bmw' }, { message: 'bba' }])
const numbers = ref([1, 2, 3, 4, 5])
const sets = ref([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

const evenNumbers = computed(() => {
  return numbers.value.filter(item => item % 2 === 0)
})
const even = (number) => {
  return number.filter(item => item % 2 === 0)
}
</script>
