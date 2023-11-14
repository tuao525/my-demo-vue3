<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 16:27:39
-->
<template>
  <div class="home">
    <div class="left">
      <!-- {{  title }} -->
      <p>{{ props.title }}</p>
    <p>{{ props.content }}</p>
    <!-- <button v-if="flag" @click="$emit('addFontSize')">点击加大字体</button> -->
    <button v-if="flag" @click="emit('addFontSize')">点击加大字体</button>
      </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
// defineProps(['title'])
const props = defineProps(['title', 'content', 'flag'])
// defineEmits(['addFontSize'])
const emit = defineEmits(['addFontSize'])
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
