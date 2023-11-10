<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-10 17:05:19
-->
<template>
    <div class="home">
        <div class='left'>
        <h4>基本用法</h4>
       <p>message is： {{text}}</p>
        <input type="text" v-model='text'>

        <h4>实时触发</h4>
        <p>message is： {{test}}</p>
        <input type="text" @input='(e) => test = e.target.value'>

        <h4>多行文本</h4>
        <p>message is： {{ textArea }}</p>
        <textarea  v-model='textArea'></textarea>

        <h4>复选框</h4>
        <p>checkboxs： <span v-for='item in checkbox' :key='item'>{{ item }}，</span></p>
        <input type="checkbox" value="Jack"  v-model='checkbox'>
        <label for="jack">jack</label>
        <input type="checkbox" value="rose" v-model='checkbox'>
        <label for="rose">rose</label>
        <input type="checkbox" value="tom" v-model='checkbox'>
        <label for="tom">tom</label>

        <h4>单选框</h4>
        <p>radio：{{ radio }} </p>
        <input type="radio" value="yes"  v-model='radio'>
        <label for="yes">yes</label>
        <input type="radio" value="no"  v-model='radio'>
        <label for="no">no</label>

        <h4>选择器</h4>
        <p>select：{{ select }}</p>
        <select name="" id="" v-model='select' multiple>
            <option value="" disabled>请选择</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>

        <p>v-for动态渲染: {{ selectRef }}</p>
        <select name="" id="" v-model='selectRef'>
            <option value="" disabled>请选择</option>
            <option v-for='item in selectData' :value='item.value' :key='item.value'>{{ item.text }}</option>
        </select>

        <h4>修饰符:</h4>
        <!-- 在失去焦点时，更新数据 -->
        <p>lazy：{{ lazyRef }}</p>
        <p></p>
        <input type="text" v-model.lazy='lazyRef'>
        <!-- 自动转化成数字 -->
        <p>number：{{ numberRef }}</p>
        <input type="number" v-model.number='numberRef'>
        <!-- 默认去除输入内容的前后空格 -->
        <p>trim：{{ trimRef }}</p>
        <input type="text" v-model.trim='trimRef'>
    </div>
</div>
  </template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const test = ref('')
const textArea = ref('')
const checkbox = ref([])
const radio = ref('')
const select = ref('')
const selectRef = ref('')
const selectData = ref([
  { text: 'one', value: 'A' },
  { text: 'two', value: 'B' },
  { text: 'three', value: 'C' }
])
const lazyRef = ref('')
const numberRef = ref(0)
const trimRef = ref('')
</script>
<style lang="less">
.home{
    display: flex;
    justify-content: center;
}
.left {
    width:500px;
    text-align:left
}
</style>
