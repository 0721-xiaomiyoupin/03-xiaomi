<template>
  <div>
    <Header />
    <Category />
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Category from "./components/Category/Categoty";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu,
    Category,
  },
};
</script>

<style lang="less">
#a {
  height: 200px;
}
</style>
