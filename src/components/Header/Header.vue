<template>
  <div style="width: 100%">
    <div class="header">
      <header>
        <div></div>
        <ul>
          <li>
            <a href="##">登陆 </a>
            <a href="##"> 注册</a>
          </li>
          <li>帮助中心</li>
          <li>
            <span class="iconfont icon-icon-technology-fn-phone"></span>
            <span>下载APP</span>
          </li>
          <li style="border: none">
            <span>资质证照/协议规则 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="iconfont icon-icon1"></span>
          </li>
        </ul>
      </header>
    </div>
    <div class="search">
      <img src="../../assets/images/footer2.png" alt="" />
      <div class="H2">
        <h2>限时抢购</h2>
        <h2>企业采购</h2>
      </div>
      <div style="display: flex">
        <span class="iconfont icon-search"></span>
        <input type="text" name="" id="" placeholder="搜一搜" />
        <span class="iconfont icon-che-copy"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="less" scoped>
.header {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  color: #fff;
  header {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      li {
        height: 10px;
        line-height: 10px;
        padding: 0 20px;
        border-right: 1px solid #ccc;
      }
    }
  }
}
.search {
  width: 1080px;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 45px;
  }
  .H2 {
    margin-left: -150px;
    h2 {
      display: inline-block;
      margin-right: 35px;
      font-size: 18px;
      font-weight: 500;
    }
  }
  input {
    outline: none;
    width: 245px;
    height: 32px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #ccc;
    font-size: 18px;
    line-height: 32px;
  }
  .icon-search {
    font-size: 22px;
    width: 40px;
    height: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .icon-che-copy {
    font-size: 30px;
    margin-left: 25px;
  }
}
</style>
