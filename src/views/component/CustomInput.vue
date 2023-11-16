<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 09:48:40
-->
<template>
  <div class="home">
    <div class="left">
      <!-- <input type="text" :value="modelValue" @input="(e) => $emit('update:modelValue',e.target.value)"> -->
      <input type="text" v-model="value">
      <h4>v-model参数</h4>
      <input type="text" :value="title" @input="(e) => $emit('update:title',e.target.value)">
      </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps(['modelValue', 'title'])
const emit = defineEmits(['update:modelValue', 'update:title'])

const value = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

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
