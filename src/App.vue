<template>
  <div>
    <!-- 头部 -->
    <Header />
    <Home />
    <!-- 尾部 -->
    <Footer />
    <!-- 侧边栏 -->
    <Menu />
  </div>
</template>

<script>
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
export default {
  name: "App",
  components: {
    Home,
    Menu,
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
