<template>
  <div>
    <Detail />
    <!-- <ShopCart /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Detail from './pages/Detail';
// import ShopCart from './pages/ShopCart';
export default {
  name: 'App',
  components: {
    // ShopCart,
    Detail,
  },
};
</script>

<style lang="less" scoped>
</style>

