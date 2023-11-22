<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-22 16:04:23
-->
<template>
  <section className="main">
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      :checked="props.checkedAllStatue"
      @click="emit('changedAllStatus')"
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      <li
        :className="item.checked ? 'completed' : 'view'"
        v-for="item in props.list"
        :key="item.id"
      >
        <div className="view" v-show="!item.isEdit">
          <input
            className="toggle"
            type="checkbox"
            :checked="item.checked"
            @click="emit('handelClickSelect', item.id)"
          />
          <label @dblclick="emit('dblClick', item.id)">{{
            item.content
          }}</label>
          <button
            className="destroy"
            @click="emit('deleteItem', item.id)"
          ></button>
        </div>
        <div v-show="item.isEdit">
          <input
            className="edit"
            v-model="item.content"
            @blur="emit('dblClick', item.id)"
            :autoFocus="item.isEdit"
          />
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['list', 'checkedAllStatue'])
const emit = defineEmits([
  'changedAllStatus',
  'deleteItem',
  'dblClick',
  'handelClickSelect'
])
</script>
