<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-20 16:38:56
-->
<template>
  <div class="home">
    <div class="left">
      <input type="text" v-model="inputValue" />
      <button @click="addTodos">确认</button>
      <ul>
        <li v-for="item in myObject.data" :key="item.id">
          <div v-if="item.isEdit">
            <input
              type="text"
              autofocus
              v-model="item.content"
              @blur="obBlur(item.id)"
            />
          </div>
          <div v-else>
            <span @dblclick="onDblclick(item.id)">{{ item.content }}</span
            ><button @click="deleteTodos(item.id)">删除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const myObject = reactive({
  data: [
    {
      id: 0,
      content: 'This is todos!',
      isEdit: false
    }
  ]
})
const inputValue = ref('')

const addTodos = () => {
  myObject.data = [
    ...myObject.data,
    {
      id: myObject.data.length,
      content: inputValue.value
    }
  ]
  inputValue.value = ''
}

const deleteTodos = (id) => {
  myObject.data = myObject.data.filter((item) => item.id !== id)
}

const onDblclick = (id) => {
  myObject.data = myObject.data.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isEdit: !item.isEdit
      }
    } else {
      return item
    }
  })
}

const obBlur = (id) => {
  myObject.data = myObject.data.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isEdit: !item.isEdit
      }
    } else {
      return item
    }
  })
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
</style>
