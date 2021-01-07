<template>
  <div>
    <!-- 头部 -->
    <Header v-if="!$route.meta.isFooterHide" />
    <router-view></router-view>
    <!-- 尾部 -->
    <Footer v-if="!$route.meta.isFooterHide" />
    <!-- 侧边栏 -->
    <Menu v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
export default {
  name: "App",
  components: {
    Menu,
    Header,
    Footer,
  },
};
</script>

<style>
body {
  padding-right: 0px !important;
  overflow: hidden;
}
</style>

