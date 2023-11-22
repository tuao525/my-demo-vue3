<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 16:36:40
-->
<template>
  <div class="home">
    <div class="left">
      <MyButton
        @add-number="addNumber"
        @click-me="console.log('click me')"
        @submit-form="submitForm"
      >
      </MyButton>
      {{ number }}
    </div>
  </div>
</template>

<script setup>
import MyButton from '../component/MyButton.vue'
import { ref } from 'vue'
const number = ref(0)

const addNumber = (n) => {
  number.value += n
}

const submitForm = (payload) => {
  if (payload.userName === '' || payload.password === '') {
    console.log('Submit failed: please input userName or password')
    return
  }
  console.log(payload)
}
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
