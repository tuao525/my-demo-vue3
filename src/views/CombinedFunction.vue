<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-17 16:52:51
-->
<template>
  <div class="home">
    <div class='left'>
      {{ x }} - {{ y }}
      {{ mouse.x }} - {{  mouse.y }}
      <!-- {{ data }} - {{ error }} -->
      <ul>
        <li v-for="item in data" :key="item.id">
          <span>{{ item.id }}&nbsp;&nbsp;</span>
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <input type="text" v-model="id">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useFetch, useMouse } from './utile'
const x = ref(0)
const y = ref(0)
const mouse = useMouse()
const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
// const url = ref('1')
const id = ref('1')
const url = computed(() => baseUrl + id.value)
const { data, error } = useFetch(url)

// watchEffect(() => {
//   url.value = baseUrl + id.value
// })

const update = (e) => {
  x.value = e.pageX
  y.value = e.pageY
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
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

</style>
