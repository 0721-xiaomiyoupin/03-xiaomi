<template>
  <div>
    <button class="btn" @click="addCart">加入购物车</button>
    <!-- <router-link to="/shopCart">加入购物车</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    //跳转页面
    addCart() {
      this.$router.push('/shopCart');
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  width: 170px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  background-color: #845f3f;
  border-color: #845f3f;
  outline: none;
}
</style>
