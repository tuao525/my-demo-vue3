<template>
  <nav>
    <!-- <router-link to="/baseView">响应式基础</router-link> |
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
    <router-link to="/combinedFunction">组合式函数</router-link> |
    <router-link to="/transition">Transition 组件</router-link> | -->
    <!-- <router-link to="/todos">dodos</router-link> -->
  </nav>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home {
  display: flex;
  justify-content: center;
}
.left {
  width: 500px;
  text-align: left;
}
.button {
  padding: 3px 15px;
  background-color: #44bd87;
  border: none;
  outline: none;
  color: #fff;
  margin: 0.5rem 0;
  border-bottom: 2px solid #2e8f5c;
  text-shadow: 1px 1px 1px #2e8f5c;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  vertical-align: middle;
  margin: 0 5px;
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
hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px dashed #c5c5c5;
  border-bottom: 1px dashed #f7f7f7;
}

.learn a {
  font-weight: normal;
  text-decoration: none;
  color: #b83f45;
}

.learn a:hover {
  text-decoration: underline;
  color: #787e7e;
}

.learn h3,
.learn h4,
.learn h5 {
  margin: 10px 0;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
}

.learn h3 {
  font-size: 24px;
}

.learn h4 {
  font-size: 18px;
}

.learn h5 {
  margin-bottom: 0;
  font-size: 14px;
}

.learn ul {
  padding: 0;
  margin: 0 0 30px 25px;
}

.learn li {
  line-height: 20px;
}

.learn p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0;
}

#issue-count {
  display: none;
}

.quote {
  border: none;
  margin: 20px 0 60px 0;
}

.quote p {
  font-style: italic;
}

.quote p:before {
  content: '“';
  font-size: 50px;
  opacity: 0.15;
  position: absolute;
  top: -20px;
  left: 3px;
}

.quote p:after {
  content: '”';
  font-size: 50px;
  opacity: 0.15;
  position: absolute;
  bottom: -42px;
  right: 3px;
}

.quote footer {
  position: absolute;
  bottom: -40px;
  right: 0;
}

.quote footer img {
  border-radius: 3px;
}

.quote footer a {
  margin-left: 5px;
  vertical-align: middle;
}

.speech-bubble {
  position: relative;
  padding: 10px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  top: 100%;
  right: 30px;
  border: 13px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.04);
}

.learn-bar > .learn {
  position: absolute;
  width: 272px;
  top: 8px;
  left: -300px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  transition-property: left;
  transition-duration: 500ms;
}

@media (min-width: 899px) {
  .learn-bar {
    width: auto;
    padding-left: 300px;
  }

  .learn-bar > .learn {
    left: 8px;
  }
}
</style>
