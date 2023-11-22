<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 16:36:54
-->
<template>
  <div class="home">
    <div class="left">
      <SlotDemo v-slot="props">{{ props.title }}</SlotDemo>
      <SlotDemo>{{ message }}</SlotDemo>

      <SlotDemo>
        <template v-slot:header>
          <p>具名插槽</p>
        </template>
      </SlotDemo>
      <SlotDemo>
        <template #header>
          <p>具名插槽缩写</p>
        </template>
      </SlotDemo>
      <SlotDemo>
        <template v-slot:[slotRef]="props">
          <p>动态slot{{ props.title }}</p>
        </template>
      </SlotDemo>
    </div>
  </div>
</template>

<script setup>
import SlotDemo from '../component/SlotDemo.vue'
import { ref } from 'vue'
const message = ref('click me!')
const slotRef = ref('active')
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
