<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-21 16:11:22
-->
<template>
  <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  </header>
</template>
<script setup>
import { defineProps, ref, watchEffect } from 'vue'
const iptValue = ref('')
const props = defineProps({
  inputValue: {
    type: String
  }
})
watchEffect(() => {
  iptValue.value = props.inputValue
})
</script>
