<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 10:38:52
-->
<template>
  <footer className="footer">
    <span className="todo-count">
      <strong>{{ props.list.length }}</strong> item left
    </span>
    <ul className="filters">
      <li>
        <a className="selected" href="#/" @click="emit('handleAll')"> All </a>
      </li>
      <li>
        <a href="#/active" @click="emit('handleActive')">Active</a>
      </li>
      <li>
        <a href="#/completed" @click="emit('handleCompleted')">Completed</a>
      </li>
    </ul>
    <button className="clear-completed" @click="emit('handleClearCompleted')">
      Clear completed
    </button>
  </footer>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['list'])
const emit = defineEmits([
  'handleAll',
  'handleActive',
  'handleCompleted',
  'handleClearCompleted'
])
</script>
