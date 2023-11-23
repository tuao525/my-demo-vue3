<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 14:57:26
-->
<template>
  <div class="home">
    <div class="left">
      <input type="text" v-model="state.name" />
      <input type="text" v-model="state.color" />
      {{ state.name }} - {{ state.color }}
    </div>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

const defaultValue = ref({
  name: 'Banana',
  color: 'skybule'
})

const state = useStorage('vue-use-local-storage', defaultValue)
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
.dark {
  background-color: #000;
}
</style>
