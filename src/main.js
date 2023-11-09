import { createApp } from "vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "./registerServiceWorker"
import router from "./router"
import App from "./App.vue"
createApp(App).use(router).use(ElementUI).mount("#app")
