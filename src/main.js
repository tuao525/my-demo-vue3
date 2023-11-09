/*
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-05-06 15:09:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-09 14:29:27
 */
import { createApp } from 'vue'
import './registerServiceWorker'
import router from './router'
import App from './App.vue'
createApp(App).use(router).mount('#app')
