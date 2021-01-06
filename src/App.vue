<template>
  <div>
    <!-- <Detail /> -->
    <!-- <ShopCart /> -->
    <!-- <Home /> -->
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Home from './components/Home';
import Footer from './components/Footer';
// import Detail from './pages/Detail';
// import ShopCart from './pages/ShopCart';
export default {
  name: 'App',
  components: {
    Home,
    Footer,
    // ShopCart,
    // Detail,
  },
};
</script>

<style lang="less" scoped>
</style>

