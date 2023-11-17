<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 18:05:41
-->
<template>
  <div class="home">
    <div class='left'>
    <DependencyInjection />
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import DependencyInjection from './component/DependencyInjection.vue'
provide('title', '标题')

const location = ref('North Pole')

const updateLocation = () => {
  location.value = 'South Pole'
}

provide('location', { location, updateLocation })
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
