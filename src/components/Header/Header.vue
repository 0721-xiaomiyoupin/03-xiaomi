<template>
  <div style="width: 100%">
    <div class="header">
      <header>
        <div></div>
        <ul>
          <li v-if="isLogin" class="user">
            <div>
              <span
                class="iconfont icon-touxiang"
                style="margin-right: 10px"
              ></span>
              <span>用户名 </span>
              <span class="iconfont icon-icon1"></span>
              <ul>
                <li>我的订单</li>
                <li>退款/售后</li>
                <li>我的资产</li>
                <li>我的收藏</li>
                <li>地址管理</li>
                <li @click="isLogin = false">退出登录</li>
              </ul>
            </div>
          </li>
          <li v-else>
            <a href="##" @click="isLogin = true" style="border: none">登陆 </a>
            <a href="##"> 注册</a>
          </li>
          <li><a href="##">帮助中心</a></li>
          <li>
            <a href="##"
              ><span class="iconfont icon-icon-technology-fn-phone"></span>
              <span>下载APP</span></a
            >
          </li>
          <li class="agreement">
            <a href="##" style="border: none">
              <span>资质证照/协议规则 </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="iconfont icon-icon1"></span>
            </a>
            <ul>
              <li>资质证照</li>
              <li>协议规则</li>
            </ul>
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
  data() {
    return {
      isLogin: true,
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  height: 48px;
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
        height: 48px;
        line-height: 48px;
        margin: 0 10px;
        a {
          display: inline-block;
          height: 15px;
          line-height: 15px;
          border-right: 1px solid #ccc;
          padding-right: 15px;
          font-size: 14px;
          text-decoration: none;
        }
      }
      .user {
        font-size: 14px;
        div {
          position: relative;
          ul {
            position: absolute;
            top: 48px;
            background-color: rgb(248, 248, 248);
            color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            height: 0;
            overflow: hidden;
            li {
              height: 40px;
              line-height: 40px;
              width: 100px;
              border: none;
              margin: 0;
              text-align: center;
              &:hover {
                background-color: rgb(209, 92, 92);
                color: #fff;
              }
            }
          }
        }
        &:hover {
          ul {
            height: 240px;
            transition: height 1s;
          }
        }
      }
      .agreement {
        font-size: 14px;
        position: relative;
        ul {
          position: absolute;
          top: 48px;
          background-color: rgb(248, 248, 248);
          color: rgb(0, 0, 0);
          display: flex;
          flex-direction: column;
          height: 0;
          overflow: hidden;
          li {
            height: 40px;
            line-height: 40px;
            width: 150px;
            border: none;
            margin: 0;
            text-align: center;
            &:hover {
              background-color: rgb(209, 92, 92);
              color: #fff;
            }
          }
        }
        &:hover {
          ul {
            height: 80px;
            transition: height 0.5s;
          }
        }
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
