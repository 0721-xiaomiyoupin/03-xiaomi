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
          <form v-on:submit.prevent="submit" v-if="phoneLogin">
            <ValidationProvider
              rules="required|length|phone"
              v-slot="{ errors }"
              style="margin: 0 auto"
            >
              <input
                type="text"
                name="user"
                placeholder="邮箱/手机密码/小米ID"
                v-model="user.phone"
              />
              <span
                style="color: red; position: absolute; top: 176px; left: 610px"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
            <ValidationProvider
              rules="passLength"
              v-slot="{ errors }"
              style="margin: 0 auto"
            >
              <input
                type="password"
                name="password"
                placeholder="密码"
                v-model="user.password"
              />

              <span
                style="color: red; position: absolute; top: 246px; left: 610px"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
            <button>登陆</button>
            <div class="div1">
              <span @click="phoneLogin = false">手机短信登陆/注册</span>
            </div>
            <div class="div2">
              <span>立即注册</span>
              |
              <span>忘记密码？</span>
            </div>
          </form>
          <!-- 手机登陆用表单 -->
          <form class="register" v-show="!phoneLogin">
            <div class="inputPhone">
              <div>+86</div>
              <input type="text" placeholder="手机号码" />
            </div>
            <div class="inputQrcode">
              <input type="password" placeholder="验证码" />
              <div>获取验证码</div>
            </div>
            <button>登陆</button>
            <div class="div1">
              <span @click="phoneLogin = true">用户名密码登陆</span>
            </div>
            <div class="div2">
              <span>收不到验证码？</span>
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
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import api from "../../api/Api";

extend("required", {
  ...required,
  message: "手机号必须要填写", // 错误信息
});

extend("length", {
  validate(value) {
    return value.length === 11;
  },
  message: "长度必须为11位", // 错误信息
});

extend("phone", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范",
});

extend("passLength", {
  validate(value) {
    return value.length >= 6 && value.length <= 16;
  },
  message: "密码长度为6-16位",
});
export default {
  name: "Login",
  data() {
    return {
      phoneLogin: true,
      user: {
        phone: "",
        password: "",
      },
      loginUser: {},
    };
  },

  methods: {
    // 登陆
    async submit() {
      if (!this.user.phone) {
        this.$message.error("请输入登陆账号");
        return;
      }
      if (!this.user.password) {
        this.$message.error("请输入登陆密码");
        return;
      }
      const result = await api("/product/login");
      this.loginUser = result.user[0];
      localStorage.setItem("name", this.loginUser.name);
      localStorage.setItem("token", this.loginUser.token);
      localStorage.setItem("image", this.loginUser.image);
      //回退到上一次浏览的地方
      const path = window.sessionStorage.getItem("path");
      if (path === "tologin") {
        this.$router.replace("/shopcart");
      } else {
        this.$router.back();
      }
    },
  },

  components: {
    ValidationProvider,
  },
};
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
        cursor: pointer;
      }
      div {
        margin: 5px auto;
        text-align: center;
      }
      .div1 {
        span {
          color: rgb(255, 103, 0);
          cursor: pointer;
        }
        span:hover {
          color: rgb(255, 103, 0);
        }
      }
      .div2 {
        span {
          color: #b0b0b0;
          cursor: pointer;
        }
        span:hover {
          color: rgb(255, 103, 0);
        }
      }
    }
    .register {
      .inputPhone {
        // border: 1px solid black;
        display: flex;
        margin: 10px auto 15px;
        width: 356px;
        height: 48px;
        box-sizing: border-box;
        input {
          border-left: none;
          margin: 0;
        }
        div {
          height: 46px;
          width: 70px;
          text-align: center;
          padding: 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          margin: 0;
          line-height: 48px;
        }
      }
      .inputQrcode {
        display: flex;
        width: 356px;
        margin-bottom: 10px;
        height: 48px;
        box-sizing: border-box;
        input {
          border-right: none;
          margin: 0;
        }
        div {
          height: 46px;
          width: 150px;
          text-align: center;
          padding: 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          margin: 0;
          line-height: 48px;
          cursor: pointer;
          color: skyblue;
        }
      }
    }
    .loginFooter {
      width: 358px;
      box-sizing: border-box;
      //margin: 30px auto 0px;
      margin: 5px auto 0px;
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