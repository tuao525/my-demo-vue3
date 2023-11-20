<template>
  <nav>
    <router-link to="/baseView">响应式基础</router-link> |
    <router-link to="/computedView">计算属性</router-link> |
    <router-link to="/listRender">列表渲染</router-link> |
    <router-link to="/formInBind">表单输入绑定</router-link> |
    <router-link to="/watchDemo">侦听器</router-link> |
    <router-link to="/templeteReference">模板引用</router-link> |
    <router-link to="/componentBasis">组件基础</router-link> |
    <router-link to="/incidentView">事件</router-link> |
    <router-link to="/vModel">v-model</router-link> |
    <router-link to="/transmitAttribute">attributes透传</router-link> |
    <router-link to="/slotView">插槽</router-link> |
    <router-link to="/provideInject">依赖注入</router-link> |
    <router-link to="/combinedFunction">组合式函数</router-link>
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
