<template>
  <div class="cartContainer">
    <div class="cartChange">
      <span class="active"><router-link to="/">首页</router-link></span
      >>
      <span class="deactive"><a href="###">购物车</a></span>
    </div>
    <div class="showLoginImg">
      <div class="textImg">
        <img src="./images/04.png" />
        <p>登录后才能看到购物车商品哦~</p>
      </div>
      <div class="toLogin" @click="toLogin">
        <button class="btn1">去登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToLogin",
  methods: {
    toLogin() {
      window.sessionStorage.setItem("path", this.$route.name);
      this.$router.replace("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.cartContainer {
  width: 1080px;
  margin: 0 auto;
}
.showLoginImg {
  height: 174px;
  padding: 100px 0 200px;
}
.textImg,
.toLogin {
  margin: 0 450px;
}
.textImg img {
  width: 153px;
  height: 132px;
}
.textImg p {
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  text-align: center;
  width: 200px;
}
.toLogin {
  margin-top: 21px;
  text-align: center;
}
.btn1 {
  width: 100px;
  height: 43px;
  line-height: 43px;
  font-size: 18px;
  color: #666;
  outline: none;
}
.btn1:hover {
  background-color: rgb(134, 107, 68);
  color: white;
}
</style>
