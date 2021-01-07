<template>
  <div style="position: relative; width: 100%; z-index=99">
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
            <el-button type="text" @click="open">
              <a href="javascript:void(0);" style="border: none">登陆 </a>

              <a href=""> 注册 </a>
            </el-button>
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
    <div
      style="position: sticky; top: 0;z-index=99;width:1080px;margin:0 auto"
      class="el-tabs__header"
      @mouseleave="isHidden = false"
    >
      <div class="search">
        <img src="../../assets/images/footer2.png" alt="" />
        <div
          style="margin-left: -200px"
          v-show="buttonHidden"
          @mouseenter="isHidden = true"
        >
          <span>分类</span>
          <span class="iconfont icon-icon1"></span>
        </div>
        <div class="H2">
          <h2>限时抢购</h2>
          <h2>企业采购</h2>
        </div>
        <div style="display: flex">
          <span class="iconfont icon-search"></span>
          <input
            type="text"
            name=""
            id=""
            placeholder="搜一搜"
            v-model="searchName"
            @keyup.enter="search"
          />
          <span class="iconfont icon-che-copy"></span>
        </div>
      </div>
      <Category v-show="isHidden" />
    </div>
  </div>
</template>

<script>
import Category from "../Category/Categoty";
export default {
  name: "Header",
  data() {
    return {
      isLogin: true,
      isHidden: false,
      buttonHidden: false,
      searchName: "",
    };
  },
  methods: {
    search() {
      const location = {
        name: "search",
      };
      if (this.searchName) {
        location.query = {
          keyword: this.searchName,
        };
      }
      this.$router.push(location);
    },
    // 登陆协议弹窗
    open() {
      this.$alert(
        `
      <p>欢迎您来到小米有品！</p>
      <p>我们依据最新法律法规要求，制定并更新了<a href='##'>《隐私政策》、</a></p>
      <p><a href='##'>《小米有品用户协议》</a>以及<a href='##'>《小米账号使用协议》。</a></p>
      <p>您需阅读并同意相关政策条款方可进行登录。</p>
      `,
        "声明与政策",
        {
          showClose: false, // 是否显示右上角关闭按钮
          showCancelButton: true, // 是否显示取消按钮
          confirmButtonText: "同意并继续", // 成功按钮文字
          cancelButtonText: "不同意", // 取消按钮文字
          dangerouslyUseHTMLString: true, // 才会解析html
          roundButton: true, //是否使用圆角按钮
        }
      )
        .then(() => {
          console.log(this);
        })
        .catch(() => {
          console.log("未同意协议不允许登陆");
          return;
        });
    },
    // 滚动条事件
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 50) {
        this.buttonHidden = true;
      } else {
        this.buttonHidden = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    Category,
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  position: relative;
  z-index: 100;
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
              cursor: pointer;
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
            cursor: pointer;
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
      cursor: pointer;
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
