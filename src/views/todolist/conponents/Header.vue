<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 15:14:02
-->
<template>
  <header className="header">
    <!-- <h1>todos</h1> -->
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      v-model="iptValue"
      @keydown="keydown"
    />
  </header>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['add'])
const iptValue = ref('')

const keydown = (e) => {
  if (e.keyCode === 13) {
    emit('add', iptValue)
    iptValue.value = ''
  }
}
</script>
