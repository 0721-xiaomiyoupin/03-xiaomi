<template>
  <div>
    <h2>home组件</h2>
    <div @click="goShopCart">
      <i class="el-icon-shopping-cart-2"></i>
    </div>
    <Detail />
  </div>
</template>

<script>
import Detail from '../../pages/Detail';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      //isLogin: false,
    };
  },
  components: {
    Detail,
  },
  methods: {
    goShopCart() {
      this.$router.push('/shopCart');
      if (this.token) {
        // console.log(this.token);
        this.isShowShoping;
      } else {
        this.isShowLogin;
      }
    },
    ...mapActions(['toLogin']),
  },
  computed: {
    ...mapState({
      //获取登录标识数据及切换状态
      token: (state) => state.toShopCart.token,
      isShowLogin: (state) => state.shopCart.isShowLogin,
      isShowShoping: (state) => state.shopCart.isShowShoping,
      shopCartList: (state) => state.shopCart.shopCartList,
    }),
  },
};
</script>

<style lang="less" scoped>
i {
  font-size: 30px;
  color: red;
}
</style>
