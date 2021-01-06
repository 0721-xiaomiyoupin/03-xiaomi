<template>
  <div class="wrapper">
    <div class="main">
      <!-- 表单登陆 -->
      <div class="formLogin">
        <div class="login">
          <div class="loginHeader">
            <div class="logo">
              <img src="../../assets/images/logo.svg" alt="" />
            </div>
            <h2>小米账号登录</h2>
            <div class="qrcode">
              <img src="../../assets/images/icon_ercode.png" alt="" />
            </div>
          </div>

          <!-- 登陆用表单 -->
          <form action="" v-if="isPhone">
            <input type="text" name="user" placeholder="邮箱/手机密码/小米ID" />
            <input type="password" name="password" placeholder="密码" />
            <button>登陆</button>
            <div class="div1">
              <a href="">手机短信登陆/注册</a>
            </div>
            <div class="div2">
              <a href="">立即注册</a>
              |
              <a href="">忘记密码？</a>
            </div>
          </form>
          <!-- 手机登陆用表单 -->
          <form class="register" v-else>
            <el-input placeholder="手机号码" class="inputPhone">
              <template slot="prepend">+86</template>
            </el-input>
            <el-input placeholder="短信验证码" class="inputQrcode">
              <template slot="append">获取验证码</template>
            </el-input>
            <button>登陆</button>
            <div class="div1">
              <a href="">手机短信登陆/注册</a>
            </div>
            <div class="div2">
              <a href="">立即注册</a>
              |
              <a href="">忘记密码？</a>
            </div>
          </form>
        </div>

        <div class="loginFooter">
          <div class="br">
            <div></div>
            <p>其他方式登陆</p>
            <div></div>
          </div>
          <div class="icon">
            <span class="iconfont icon-QQ"></span>
            <span class="iconfont icon-weibo"></span>
            <span class="iconfont icon-alipay_app"></span>
            <span class="iconfont icon-weixin2"></span>
          </div>
        </div>
      </div>

      <!-- 二维码登陆 -->
      <div class="qrCodeLogin"></div>
    </div>

    <footer>
      <p>简体 | 繁体 | English | 常见问题 | 隐私政策</p>
      <p>
        小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isPhone: false,
      user: {
        phone: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  background-color: rgb(245, 245, 245);
  width: 100%;
  min-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .main {
    width: 850px;
    height: 545px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    position: relative;
    padding-bottom: 15px;
    .loginHeader {
      height: 127px;
      text-align: center;
      padding-top: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .logo {
        img {
          width: 48px;
          height: 48px;
        }
      }
      h2 {
        font-size: 22px;
        font-weight: 100;
      }
      .qrcode {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 80px;
        overflow: hidden;
        img {
          position: absolute;
          left: 0;
        }
        &:hover {
          img {
            left: -80px;
          }
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      input {
        width: 356px;
        height: 48px;
        padding: 13px 16px 13px 14px;
        box-sizing: border-box;
        line-height: 48px;
        background: #fff;
        outline: none;
        margin: 10px auto;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      button {
        width: 356px;
        height: 48px;
        margin: 10px auto;
        outline: none;
        color: #fff;
        background-color: rgb(255, 103, 0);
        border: none;
      }
      div {
        margin: 5px auto;
        text-align: center;
      }
      .div1 {
        a {
          color: rgb(255, 103, 0);
        }
        a:hover {
          color: rgb(255, 103, 0) !important;
          text-decoration: underline;
        }
      }
      .div2 {
        a {
          color: #b0b0b0;
        }
        a:hover {
          color: rgb(255, 103, 0) !important;
          text-decoration: underline;
        }
      }
    }
    .register {
      .inputPhone {
        width: 356px;
      }
      .inputQrcode {
        width: 356px;
      }
    }
    .loginFooter {
      width: 358px;
      box-sizing: border-box;
      margin: 30px auto 0px;
      display: flex;
      // align-items: center;
      flex-direction: column;
      .br {
        display: flex;
        color: #b0b0b0;
        div {
          border-top: 1px solid #b0b0b0;
          flex-grow: 1;
          margin-top: 7px;
        }
        p {
          font-size: 14px;
        }
      }
      .icon {
        display: flex;
        text-align: center;
        margin: 15px auto;
        span {
          font-size: 30px;
          width: 30px;
          height: 30px;
          margin: 0 12px;
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 10px;
      font-size: 14px;
    }
  }
}
</style>