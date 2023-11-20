<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-20 10:00:11
-->
<template>
  <!-- <div class="home"> -->
    <!-- <div class='left'> -->
      <button @click="show = !show">点击</button>
      <Transition v-if="show">
        <p>hello world!</p>
      </Transition>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)

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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
