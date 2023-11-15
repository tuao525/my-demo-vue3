<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-15 15:58:15
-->
<template>
  <div class="home">
    <div class="left">
      <button @click="add">点击</button>
      <button @click="$emit('click-me')">点击</button>

      <h4>事件校验</h4>
      用户名：<input type="text" v-model="userName">
      密码：<input type="text" v-model="password">
      <button @click="submit(userName,password)">登录</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
const emit = defineEmits({
  'add-number': null,
  'submit-form': ({ userName, password }) => {
    if (userName !== '' && password !== '') {
      console.log('true')
      return true
    } else {
      console.log('please input userName or password')
      return false
    }
  }
})

const userName = ref('')
const password = ref('')

const add = () => {
  emit('add-number', 1)
}
const submit = (userName, password) => {
  emit('submit-form', { userName, password })
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
