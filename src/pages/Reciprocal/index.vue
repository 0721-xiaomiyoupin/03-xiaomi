<template>
  <div>
    <div class="g_nav">
      <div class="g_nav-fixwidth">
        <ul>
          <li>您好，欢迎使用支付宝付款！</li>
          <li><a href="#faq" id="J-faq-trigger">常见问题</a></li>
          <li class="g_nav-sep">|</li>
          <li>唯一热线：95188</li>
        </ul>
      </div>
    </div>

    <div id="header">
      <div class="header-container fn-clear">
        <div class="header-title">
          <span class="logo">支付宝<s></s></span>
          <span class="logo-title">我的收银台</span>
        </div>
      </div>
    </div>
    <div class="fBig">
      <div class="fBig">支付成功，即将跳转首页，还有 {{ num }} 跳转到首页</div>
      <!-- <router-link to="/home">自行跳转到首页请点击这里</router-link> -->
      <div class="shouye fBig" @click="jump">自行跳转到首页请点击这里</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reciprocal",
  data() {
    return {
      num: 5,
    };
  },
  methods: {
    Ba() {
      let nums = setInterval(() => {
        if (this.num === 0) {
          clearInterval(nums);
          return this.$router.replace("/home");
        }
        this.num--;
      }, 2000);
    },
    jump() {
      this.$router.replace("/home");
    },
  },
  mounted() {
    this.Ba();
  },
};
</script>

<style lang="less" scoped>
.shouye {
  cursor: pointer;
  color: rgb(21, 70, 230);
}
.shouye:hover {
  color: rgb(243, 24, 24);
}
.fBig {
  font-size: 40px;
  text-align: center;
  margin-top: 60px;
  //   margin-left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  //   padding: 0;
  //   margin: 0;
}
.g_nav {
  height: 36px;
  line-height: 36px;
  background: #242735;
}
.g_nav-fixwidth {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  zoom: 1;
  ul {
    display: flex;
    color: aliceblue;
    font-size: 18px;
    padding-left: 900px;
    box-sizing: border-box;
  }
}
#J-faq-trigger {
  color: aliceblue;
}
.header-title {
  float: left;
  padding-top: 10px;
  padding-right: 15px;
}
#header .header-title .logo {
  width: 144px;
  height: 50px;
  float: left;
  position: relative;
  text-align: center;
  margin-right: 10px;
  text-indent: 0px;
  //   font: 400 24px / 30px "Microsoft YaHei", 微软雅黑, 宋体;
  background: 0px 0px;
}
#header .logo s {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(https://t.alipayobjects.com/images/rmsweb/T13IFgXjlaXXXXXXXX.png);
  background-size: 144px;
}
#header .logo-title {
  //   font: 400 18px/26px "Microsoft YaHei", SimSun;
  border-left: 1px solid grey;
  color: #1a1a1a;
  float: left;
  padding-left: 10px;
  margin-top: 2px;
  font-size: 35px;
}
</style>