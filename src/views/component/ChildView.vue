<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 14:59:24
-->
<template>
  <div class="home">
    <div class="left">
      {{  countRef }}
      </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
const countRef = ref(1)
defineExpose({
  countRef
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
