<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-21 15:53:54
-->
<template>
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked />
          <label>Taste JavaScript</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li>
    </ul>
  </section>
</template>
<script setup>
// import { defineProps } from 'vue'
// const props = defineProps(['list'])
</script>
