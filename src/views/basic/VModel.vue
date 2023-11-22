<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 16:41:49
-->
<template>
  <div class="home">
    <div class="left">
      <!-- <CustomInput v-model="message"/> -->
      <!-- <p>{{ message }}</p> -->
      <CustomInput v-model:title="title" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomInput from '../component/CustomInput.vue'
// const message = ref('')
const title = ref('')
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
</style>
