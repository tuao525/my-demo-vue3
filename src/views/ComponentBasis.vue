<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:34:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-14 17:44:41
-->
<template>
  <div class="home">
    <div class="left" :style="{fontSize: fontSize + 'px'}">
      <h4>组件基础</h4>
      <ComponentDemo :title='title' content='这是内容' />
      <h4>配合v-for使用</h4>
      <ComponentDemo
        v-for="item in posts"
        :title="item.title"
        :key="item.id"
      >
      </ComponentDemo>

      <h4>监听事件</h4>
      <!-- <ComponentDemo
        flag='true'
        :title='title'
        content='这是内容'
        @addFontSize="()=> {
          fontSize = fontSize + 2
      }" /> -->

        <h4>动态组件</h4>
        <!-- <component />组件是vue中内置组件，类似于tab组件，可用于组件的切换
              is属性决定了 component 当前渲染的组件
              is属性可以是组件或字符串，当是字符串时代表组件的注册名或者标签名
        -->
        <button
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab  }}
        </button>
      <component :is="tabs[currentTab]" class="tab"></component>
    </div>
  </div>

</template>
<script setup>
import ComponentDemo from './component/ComponentDemo.vue'
import BaseView from './BaseView.vue'
import FormInBind from './FormInBind.vue'
import WatchDemo from './WatchDemo.vue'
import { ref } from 'vue'
const title = ref('标题')
const posts = ref([
  { id: 1, title: '标题1' },
  { id: 2, title: '标题2' },
  { id: 3, title: '标题3' }
])
const fontSize = ref(12)

const tabs = {
  BaseView,
  FormInBind,
  WatchDemo
}
const currentTab = ref('BaseView')
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
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
