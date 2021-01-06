<template>
  <div>
    <Header v-if="!$route.meta.isFooterHide" />
    <Menu v-if="!$route.meta.isFooterHide" />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu,
  },
};
</script>

<style lang="less">
#a {
  height: 200px;
}
</style>
