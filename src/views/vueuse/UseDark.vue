<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 14:36:57
-->
<template>
  <div class="home">
    <div class="left">
      <button @click="isDark = !isDark">
        <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()
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
