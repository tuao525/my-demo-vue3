<!--
 * @Author: 涂澳
 * @email: 2250467773@qq.com
 * @Date: 2023-11-09 10:55:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-11-16 16:38:23
-->
<template>
  <div class="home">
    <div class='left'>
        <!-- <slot /> -->
        <button>
          <slot  :title="1">submit</slot>
        </button>
        <slot name="header"></slot>
        <slot name="active" :title="123456"></slot>
    </div>
  </div>
</template>

<script setup>

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
