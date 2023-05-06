<template>
  <div class="home">
    {{ data.message }}
    <p><button @click="click">点击  {{ data.count }} - {{ countRef }}</button></p>
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
