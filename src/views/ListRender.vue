<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-09 11:00:15
-->
<template>
  <div class="home">
    {{ data.message }}
    <p>
      <button @click="click">点击 {{ data.count }} - {{ countRef }}</button>
    </p>
    <p>{{ object.foo + 1 }} - {{ object.foo.value + 1 }} - {{ object.foo }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// @ is an alias to /src
// export default {
// name: 'baseView',
// setup () {
const data = reactive({
  message: '我是vue3响应式基础',
  count: 1
})
const countRef = ref(0)
const object = { foo: ref(0) }
function click () {
  data.count += 1
  countRef.value++
}
// return {
//   data,
//   click
// }
// }
// }
</script>
