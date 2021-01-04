<template>
  <div>
    <ShopCart />
  </div>
</template>

<script>
import ElementUI from 'element-ui';
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import ShopCart from './pages/ShopCart';
Vue.use(ElementUI);
export default {
  name: 'App',
  components: {
    ShopCart,
  },
};
</script>

<style lang="less" scoped>
</style>
