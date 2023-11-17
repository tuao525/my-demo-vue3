<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 18:07:01
-->
<template>
  {{ countRef }}
  <p>{{ location }}</p>
  <button @click="updateLocation">点击</button>
</template>

<script setup>
import { ref, provide, inject } from 'vue'
const countRef = ref(1)
provide('title', countRef)
const { location, updateLocation } = inject('location')

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
