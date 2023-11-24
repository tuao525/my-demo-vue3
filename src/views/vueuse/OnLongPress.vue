<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-24 16:37:49
-->
<template>
  <div class="home">
    <div class="left">
      {{ flag }}
      <p ref="htmlRefHook">
        <button class="button">onLongPress</button>
        <button class="button" @click="flag = false">reset</button>
      </p>
      {{ flag1 }}
      <p>
        <button class="button" v-on-long-press="onLongPressBtn1">点击</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onLongPress } from '@vueuse/core'
import { vOnLongPress } from '@vueuse/components'
import { ref } from 'vue'
const flag = ref(false)
const flag1 = ref(false)
const htmlRefHook = ref(null)

const onLongPressBtn = () => {
  flag.value = true
}
const onLongPressBtn1 = () => {
  flag1.value = true
}
// .prevent: 阻止默认行为
// .stop： 阻止事件冒泡
// once : 一次
onLongPress(htmlRefHook, onLongPressBtn, {
  modifiers: { capture: true },
  delay: 3000
})
</script>
