<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 15:49:47
-->
<template>
  <div class="home">
    <div class="left">
      <div ref="divRef">{{ state.x }} - {{ state.y }}</div>
    </div>
  </div>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'
import { ref } from 'vue'

const divRef = ref()

const state = useElementBounding(divRef)

console.log('state', state, state.x)
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
