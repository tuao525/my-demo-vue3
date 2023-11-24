<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-23 16:36:40
-->
<template>
  <div class="home">
    <div class="left">
      <p>
        <button @click="startTimer()">开始</button>
        <button @click="reStop()">结束</button>
      </p>
      {{ text }} - {{ flag }}
    </div>
  </div>
</template>

<script setup>
import { useTimeoutFn } from '@vueuse/core'
import { ref } from 'vue'
const text = ref('')
const timer = ref(0)
const flag = ref(false)

let stopTimer

const startTimer = () => {
  text.value = 'Please wait for 3 seconds'
  timer.value = 3000
  if (timer.value > 0) {
    ;({ isPending: flag.value, stop: stopTimer } = useTimeoutFn(() => {
      text.value = 'Fired!'
    }, timer.value))
  }
}

const reStop = () => {
  text.value = 'Stop!'
  stopTimer()
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
.dark {
  background-color: #000;
}
</style>
