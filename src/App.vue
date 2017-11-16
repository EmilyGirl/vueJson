<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header"></div>
    <div class="left">
      <div class="leftOne" v-for="item in leftText" :key="item.id">
        <router-link :to='item.href'>
          {{item.text}}
        </router-link>
      </div>
    </div>
    <div class="right">
      <transition name="el-fade-in">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  data() {
    return {
      leftText: [
        { text: '数据管理1', href: '/'},
        { text: '产品管理', href: '/productManagement'},
        { text: '文件管理', href: '/fileManagement'},
      ],
    }
  },
  methods: {},
  created() { },
  watch: {},
}
</script>
<style lang="less">
@import './assets/css/main';
</style>
