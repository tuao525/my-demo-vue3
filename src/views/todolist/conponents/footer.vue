<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-21 15:29:55
-->
<template>
  <footer className="footer">
    <span className="todo-count"> <strong>0</strong> item left </span>
    <ul className="filters">
      <li>
        <a className="selected" href="#/"> All </a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
</template>
<script setup></script>
