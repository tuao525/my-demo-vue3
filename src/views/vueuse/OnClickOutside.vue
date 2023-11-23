<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-22 16:43:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 17:24:01
-->
<template>
  <button @click="modal = true">Open Modal</button>
  <div
    v-if="modal"
    ref="modalRef"
    class="modal"
    v-on-click-outside="() => (modal = false)"
  >
    <div class="inner">
      <button class="button small" title="Close" @click="modal = false">
        𝖷
      </button>
      <p class="heading">Demo Modal</p>
      <p>Click outside of the modal to close it.</p>
    </div>
  </div>

  <div class="ml-2 relative inline-block">
    <button
      @click="dropdown = !dropdown"
      v-on-click-outside.bubble="dropdownHandler"
    >
      Toggle Dropdown
    </button>
    <div v-if="dropdown" class="dropdown-inner">
      Click outside of the dropdown to close it.
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
const target = ref(null)
const modal = ref(false)
const modalRef = ref(false)
const dropdown = ref(false)

// 监听元素外部的点击事件
onClickOutside(target, (e) => {
  console.log('e', e)
})
onClickOutside(modalRef, (e) => {
  modalRef.value = false
})

const dropdownHandler = (event) => {
  console.log(event)
  dropdown.value = false
}
</script>
<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
}
.left {
  width: 500px;
  text-align: left;
}
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}
.inner {
  background-color: #fff;
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid rgba(60, 60, 60, 0.12);
  box-shadow: 2px 2px 10px #0a0a0a1a;
}
.dropdown-inner {
  background-color: #fff;
  padding: 0.5em;
  // position: absolute;
  left: 0;
  z-index: 10;
  border-radius: 5px;
  border: 1px solid rgba(60, 60, 60, 0.12);
  box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
}
.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
.button {
  position: absolute;
  top: -0.9rem;
  right: -0.5rem;
  font-weight: bold;
}
</style>
