<template>
  <nav>
    <router-link to="/baseView">响应式基础</router-link> |
    <router-link to="/computedView">计算属性</router-link> |
    <router-link to="/listRender">列表渲染</router-link> |
    <router-link to="/formInBind">表单输入绑定</router-link>
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
