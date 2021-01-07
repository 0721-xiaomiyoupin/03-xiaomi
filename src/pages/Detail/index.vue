<template>
  <div class="detail">
    <div class="container">
      <div>
        <div class="header">
          <div class="banner">
            <div class="bigImg">
              <img :src="geturl" alt="" />
            </div>
            <div>
              <div class="swiper-container thumb" ref="swiper">
                <div
                  class="swiper-wrapper thumb-container"
                  v-if="detail.detail"
                >
                  <div
                    class="swiper-slide thumb-pic"
                    style="height: 300px"
                    v-for="(item, index) in detail.detail[0].goods
                      .carouselMapList"
                    :key="index"
                    @click="putUrl($event)"
                  >
                    <img :src="item.url" :data-id="index" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sku-container" v-if="detail.detail">
            <div class="name">
              <div class="lable">
                <img
                  class="img"
                  src="https://img.youpin.mi-img.com/editor1/6806242c24790e6789530db953219086.png?w=156&h=57"
                  alt=""
                />
              </div>
              <div class="good-name">
                {{ detail.detail[0].goods.goodsInfo.name }}{{ size }}
              </div>
            </div>
            <div class="summary">
              {{ detail.detail[0].goods.goodsInfo.summary }}
            </div>
            <div class="promotion-box">
              <div class="content">
                <span class="left">更多:</span>
                <span class="right"
                  >【新年狂欢·小米生活精选】甄选行业爆款跑步鞋、平衡车、电动螺丝刀、背包、电动牙刷、剃须刀等
                  <span> 年终精选低至9.9元！点击查看>></span>
                </span>
              </div>
            </div>
            <div class="crat">
              <div class="price-line">
                <h5>售价</h5>
                <div class="price">
                  <span class="min">￥</span>
                  <span class="big">{{ Totalprice }}</span>
                  <span class="mins">￥2299</span>
                  <span class="bigs">特价</span>
                </div>
              </div>
              <div class="service-line">
                <h5>服务</h5>
                <div class="introduce-container">
                  <p class="icon">!</p>
                  <div class="content-c">
                    <div
                      class="cardmodal-outer-container"
                      style="left: 35px; top: -20px"
                    >
                      <div
                        class="inner-container"
                        style="width: 500px; left: 20px; top: 20px"
                      >
                        <div class="container-b" style="width: 494px">
                          <div class="container-a">
                            <div class="content-item">
                              <p>满99包邮</p>
                              <span
                                >本商品满99元可包邮，不足99元收取运费10元</span
                              >
                            </div>
                            <div class="content-item">
                              <p>小米自营</p>
                              <span>本商品为小米/米家自营产品</span>
                            </div>
                            <div class="content-item">
                              <p>7天无理由</p>
                              <span>本商品支持7天无理由退货</span>
                            </div>
                            <div class="content-item">
                              <p>平台运费说明</p>
                              <span
                                >由小米平台发货的小米自营商品，单笔满99元免运费，不满99元收取10元运费；
                                有品自营产品、有品平台三方产品，单笔订单满99元免运费，不满99元收取10元运费；
                                包邮订单申请退款，剩余订单不达包邮门槛，将补扣10元运费；
                                特殊商品需要单独收取运费，具体以实际结算金额为准；
                                优惠券不能抵扣运费。</span
                              >
                            </div>
                            <div class="content-item">
                              <p>退换货运费声明</p>
                              <span
                                >非质量问题退换货，运费不予返还；
                                因质量问题退换货，运费予以返还，多件产品只退部分产品时，运费按比例返还；
                                电视等大件商品，无质量问题退货产生的运费由购买者承担，从退款中直接扣除。</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="service" v-if="detail.detail">
                  <div
                    class="service-item"
                    v-for="(item, index) in detail.detail[0].goods.services"
                    :key="index"
                  >
                    <p
                      style="cursor: pointer"
                      class="el-icon-circle-check a"
                    ></p>
                    <span>{{ item.text }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="address-line">
              <h5>配送区域</h5>
              <div class="address">
                <span>北京 北京市 海淀区</span>
                <span>&nbsp;有货</span>
                <a href="javascript:;">修改</a>
              </div>
            </div>
            <div
              class="size-line"
              v-for="item in detail.detail[0].goods.shopTags"
              :key="item.tid"
            >
              <h5 class="sku-title">{{ item.name }}</h5>
              <div class="size-container">
                <div
                  v-for="text in item.tags"
                  :key="text.tid"
                  @click="add(text, item.tags, $event)"
                  :class="{ active: text.isCheck }"
                  style="cursor: pointer"
                >
                  {{ text.name }}
                </div>
              </div>
            </div>
            <div class="num">
              <span>数量</span>
              <el-input-number
                size="small"
                v-model="num"
                :min="1"
                :max="10"
              ></el-input-number>
            </div>
            <div class="btns">
              <div class="btn">
                <button class="btn1" @click="dialogVisible = true">
                  加入购物车
                </button>
                <button class="btn2">立即购买</button>
              </div>
              <div class="btn3">
                <button>
                  <i class="el-icon-star-off"></i>
                  <span>收藏</span>
                </button>
              </div>
              <div class="btn3">
                <button>
                  <i class="el-icon-service"></i>
                  <span>客服</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-content">
          <div class="detail-content-left">
            <el-tabs type="card" class="detail-content-content" value="first">
              <el-tab-pane
                label="商品详情"
                name="first"
                class="image"
                v-if="detail.detail"
              >
                <div
                  v-for="(item, index) in detail.detail[0].goods.goodsInfo
                    .introExt[0].imagesArray"
                  :key="index"
                >
                  <img :src="item" alt="" />
                </div>
                <div>
                  <img
                    src="https://img.youpin.mi-img.com/editor1/34d9309abc25227d26891dddcdf946d0.png?w=1080&h=510"
                    alt=""
                  />
                </div>
              </el-tab-pane>
              <el-tab-pane label="评论" name="second">
                <div class="main-body">
                  <div style>
                    <div class="comment-top-container clearfix">
                      <div class="clearfix">
                        <div class="comment-top-positive-rate">
                          <span> 99%满意 </span>
                        </div>
                        <div class="comment-top-ratingbar-container"></div>
                      </div>
                      <div class="comment-top-tabs" v-if="detail.detail">
                        <div class="tabbar-container">
                          <div
                            class="tabbar-item"
                            v-for="(item, index) in detail.detail[0].comment
                              .index.tags"
                            :key="item.id"
                            :class="{
                              active: index === 0,
                            }"
                          >
                            <span
                              href="javascript:;"
                              class="comment-top-tabs-item m-btns m-btn-xs m-btn-brown"
                              >{{ item.name }}({{ item.count }})</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div v-if="detail.comment">
                        <div
                          class="commentItem"
                          v-for="(item, index) in detail.comment[0].data.list"
                          :key="index"
                        >
                          <div class="t-div">
                            <div class="myimg">
                              <img :src="item.avatar" alt="" />
                            </div>
                            <div class="info">
                              <div class="name">{{ item.nick_name }}</div>
                              <div class="attach">
                                <span> {{ time }} </span
                                ><span class="margin">|</span
                                ><span>{{ item.pid_spec }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="m-div">
                            {{ item.text }}
                          </div>
                          <div class="img-div">
                            <div class="imggroup-container">
                              <div
                                class="imggroup-tabs-container clear-tl"
                                style="height: 40px"
                              >
                                <div
                                  class="imggroup-tabs-item"
                                  style="
                                    margin-right: 4px;
                                    width: 40px;
                                    height: 40px;
                                  "
                                  v-for="(img, index) in item.pics"
                                  :key="index"
                                >
                                  <img
                                    :src="img"
                                    alt=""
                                    style="
                                      height: 53.3333px;
                                      width: 40px;
                                      margin-top: -6.66667px;
                                    "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="b-div"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="常见问题" name="third">
                <div style="min-height: 900px">
                  <img
                    style="width: 774px; height: 723px"
                    src="https://img.youpin.mi-img.com/shopmain/6fa6e6f8111dc6a379bc63e5c513b8db.jpg?w=1080&h=1009"
                    alt=""
                  />
                  <img
                    style="width: 774px; height: 723px"
                    src="https://img.youpin.mi-img.com/shopmain/acd008c06d6997071e073c4997419bac.jpg?w=1080&h=804"
                    alt=""
                  /></div
              ></el-tab-pane>
            </el-tabs>
            <!-- </div> -->
          </div>
          <div class="detail-content-right">
            <div class="detail-content-right-title">
              <div class="image">
                <img
                  src="https://img.youpin.mi-img.com/youpinoper/shop_72bacf474dfad998341d995c6fcb9db1.jpg"
                  alt=""
                />
                <div class="image-title">
                  <div class="title" style="cursor: pointer">
                    <h6>小米</h6>
                    <span>自营</span>
                  </div>
                  <div>让每个人都能享受科技的乐趣</div>
                </div>
                <button style="cursor: pointer">进入</button>
              </div>
            </div>
            <div class="detail-content-bottom">
              <h2>—— 相关推荐 ——</h2>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/shopmain/db939842a5e702082803c2d8ee137467.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>多功能可伸缩，防爆玻璃面</p>
                  <p>pt002茶几电视柜</p>
                  <p>￥499</p>
                </div>
              </div>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/800_pic/b1656469dbbe1810015f0a6d85cd3fb8.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>植物基配方 / 温和亲肤 /</p>
                  <p>洗手液（三瓶装）</p>
                  <p>￥39.9</p>
                </div>
              </div>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/shopmain/d855cc5cd0a3730232de9d50fb1be894.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>304不锈钢，金刚纳米防爆膜</p>
                  <p>大白不锈钢淋浴房</p>
                  <p>￥699</p>
                </div>
              </div>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/shopmain/a0589cca422863b8e23455332036393f.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>进口全实木，柔软靠包</p>
                  <p>大师实木软包床</p>
                  <p>￥949</p>
                </div>
              </div>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/shopmain/4c8378796775b3e4d9c9e9d2818fabf9.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>进口全实木，巧妙设计</p>
                  <p>大师实木书房系列</p>
                  <p>￥1299</p>
                </div>
              </div>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/shopmain/1b6fdbd30746859af1cb4de974d6dd42.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>方寸之间 尽显奢华</p>
                  <p>金韵天成茶室家具</p>
                  <p>￥1399</p>
                </div>
              </div>
              <div class="detail-container">
                <div class="container">
                  <img
                    src="https://img.youpin.mi-img.com/shopmain/1398b1a2109d0bc75863de9f9ea5275d.jpg"
                    alt=""
                  />
                </div>
                <div class="container-image">
                  <p>双核引擎 智能沐浴好助手</p>
                  <p>智能暖悅浴霸</p>
                  <p>￥219</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="声明与政策"
      center
      :visible.sync="dialogVisible"
      width="30%"
      top="20%"
    >
      <div>
        <p>欢迎您来到小米有品！</p>
        我们依据最新法律法规要求，制定并更新了<a
          class="policy"
          href="javascript:void(0)"
          >《隐私政策》</a
        >、<a class="policy" href="javascript:void(0)">《小米有品用户协议》</a
        >以及<a class="policy" href="javascript:void(0)">《小米账号使用协议》</a
        >。 您需阅读并同意相关政策条款方可进行登录。
      </div>
      <span
        slot="footer"
        class="dialog-footer"
        style="display: flex; justify-content: space-around"
      >
        <el-button
          type="primary"
          @click="dialogVisible = false"
          style="background: #845f3f"
          >同意并继续</el-button
        >
        <el-button
          style="border-color: #845f3f; color: #845f3f"
          @click="dialogVisible = false"
          >不同意</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import Swiper from "swiper";
import ajax from "../../api/Api";
export default {
  name: "Detail",
  data() {
    return {
      detail: {},
      geturl: "",
      num: 1,
      price: 2100,
      isShow: false,
      size: "",
      dialogVisible: false,
    };
  },
  computed: {
    // 总价
    Totalprice() {
      return this.num * this.price;
    },
    // 转时间格式
    time() {
      return moment(this.detail.comment[0].data.list[0].ctime).format(
        "YYYY-MM-DD HH:mm:ss"
      );
    },
  },
  methods: {
    // Tab切换随着滚动条动而动完成
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.querySelector(".el-tabs__header").offsetTop;
      let Tabs = document.querySelector(".el-tabs__header");
      if (scrollTop - offsetTop > 500) {
        this.isShow = true;
        Tabs.classList.add("active");
      } else {
        this.isShow = false;
        Tabs.classList.remove("active");
      }
    },

    // 获取商品详情数据
    async getUrl() {
      let result = await ajax("/product/detail");
      this.detail = result;
      // console.log(this.detail.detail[0]);
      this.geturl = this.detail.detail[0].goods.carouselMapList[0].url;
    },

    // 点击缩略图切换大图
    putUrl(e) {
      let { id } = e.target.dataset;
      if (!id) return;
      this.geturl = e.target.currentSrc;
    },

    // 计算价钱
    add(value, List, e) {
      this.size = e.target.innerHTML;
      List.forEach((li) => (li.isCheck = false));
      value.isCheck = true;
      this.price = value.price;
    },
  },
  mounted() {
    // 一上来就请求商品详情数据
    this.getUrl();
    window.addEventListener("scroll", this.handleScroll);
    // 缩略图
    this.swiper = new Swiper(this.$refs.swiper, {
      direction: "vertical",
    });
  },
};
</script>

<style lang="less" scoped>
.policy {
  color: #9f8052;
}
.detail {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 100px;
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  .container {
    width: 1080px;
    margin: 0 auto;
  }
}
.header {
  margin-bottom: 67px;
  display: flex;
}
.banner {
  width: 465px;
  height: 374px;
  display: flex;
}
.bigImg {
  width: 372px;
  height: 372px;
  background-color: #f4f4f4;
  border: 1px solid #ececec;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
.thumb {
  width: 86px;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-left: 10px;
  .thumb-container {
    position: absolute;
    left: 0;
    top: 0;
    flex-direction: column;
    .thumb-pic {
      width: 83px;
      height: 83px !important;
      margin-bottom: 11px;
      border: 1px solid #ccc;
      background-color: #f4f4f4;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide.thumb-pic.active {
      border: 1px solid #845f3f;
    }

    .el-icon-caret-top {
      display: none;
      position: absolute;
      top: 0px;
      z-index: 2000;
      // left: 30%;
      font-size: 14px;
      text-align: center;
      height: 15px;
      width: 86px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .el-icon-caret-bottom {
      display: none;
      position: absolute;
      bottom: 108px;
      z-index: 2000;
      // left: 30%;
      font-size: 14px;
      text-align: center;
      height: 15px;
      width: 86px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  /deep/.thumb-container:hover .a {
    display: block;
  }
}
.sku-container {
  width: 561px;
  margin-left: 50px;
}
.name {
  margin-bottom: 4px;
  display: flex;
  .label {
    width: 52px;
    height: 20px;
  }
}
.img {
  width: 52px;
  height: 20px;
  margin-right: 8px;
  margin-top: 3px;
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
}
.good-name {
  font-size: 20px;
  line-height: 26px;
  vertical-align: middle;
}
.summary {
  width: 84%;
  font-size: 12px;
  line-height: 18px;
  color: #999;
}
.promotion-box {
  margin-top: 10px;
  margin-bottom: 18px;

  .content {
    width: 100%;
    background-color: #fff;
    margin-top: 2px;
    .left {
      line-height: 18px;
      color: #999;
      font-size: 12px;
      margin-top: 4px;
    }
    .right {
      line-height: 18px;
      margin-left: 5px;
      color: #333;
      font-size: 12px;
      margin-top: 4px;
      span {
        color: #c00000;
        margin-left: 4px;
        cursor: pointer;
      }
    }
  }
}
.crat {
  padding: 10px;
  margin-bottom: 26px;
  background-color: #f9f9f9;
  .price-line {
    margin: 12px 0;
    height: 37px;
    line-height: 40px;
    vertical-align: bottom;
    font-size: 30px;
    overflow: hidden;
    display: flex;
    h5 {
      font-size: 12px;
      font-weight: 400;
      line-height: 32px;
      vertical-align: bottom;
      margin-right: 30px;
    }
    .price {
      color: #c00000;
      line-height: 30px;
      overflow: hidden;
      .min {
        margin-right: 4px;
        font-size: 14px;
        vertical-align: 0;
      }
      .mins {
        font-size: 12px;
        margin-left: 14px;
        color: #ccc;
        text-decoration: line-through;
      }
      .bigs {
        height: 20px;
        line-height: 20px;
        padding: 0 6px;
        margin-left: 8px;
        background-color: #c00000;
        color: white;
        font-size: 14px;
        border-radius: 2px;
        vertical-align: 2px;
      }
    }
  }
}
.service-line {
  margin-bottom: 12px;
  vertical-align: bottom;
  line-height: 24px;
  font-size: 24px;
  display: flex;
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 32px;
    vertical-align: bottom;
  }
  .introduce-container {
    position: relative;
    margin-left: -30px;
    overflow: visible;
    cursor: pointer;
    margin-left: 10px;
    .icon {
      margin-top: 9px;
      border: 1px solid #c00000;
      width: 12px;
      height: 12px;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      color: #c00000;
      cursor: pointer;
      border-radius: 50%;
      margin-left: -5px;
      margin-right: 10px;
    }
  }
}
.size-line {
  display: flex;
  margin-bottom: 14px;
  padding: 0 10px 12px 10px;
  .sku-title {
    margin-right: 10px;
    width: 48px;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    vertical-align: bottom;
  }
  .size-container {
    margin-bottom: -14px;
    width: 473px;
    display: flex;
    overflow: hidden;
    align-items: center;
    div {
      border: 1px solid #ccc;
      margin-right: 14px;
      box-sizing: border-box;
      padding: 4px;
      color: #845f3f;
      line-height: 22px;
      // font-size: 14px;
      margin-bottom: 14px;
    }
    div.active {
      border: 1px solid #845f3f;
    }
  }
}
.service {
  overflow: hidden;
  display: flex;
  .service-item {
    overflow: hidden;
    font-size: 16px;
    margin-right: 13px;
    line-height: 28px;
    .a {
      width: 16px;
      height: 16px;
      color: #c00000;
      margin-left: 8px;
    }
    span {
      margin-left: 8px;
      line-height: 16px;
    }
  }
}
.content-c {
  display: none;
  z-index: 1000;
  position: relative;
}
/deep/.introduce-container:hover .content-c {
  display: block;
}
.content-c.content-show {
  overflow: visible;
  font-size: 14px;
  left: 60px;
  top: 30px;
  position: absolute;
  color: #999;
  display: inherit;
}
.cardmodal-outer-container {
  position: relative;
  overflow: visible;
}
.inner-container {
  position: absolute;
  border: 1px solid #e7e7e7;
  background: #fff;
  padding: 15px 0;
  margin-left: -60px;
}
.container-b::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
.container-b::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
}
.container-b::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(0, 0, 0, 0);
}
.container-b {
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0 17px;
  height: 300px;
}
.container-a {
  max-height: 350px;
}
.content-item {
  margin-top: 10px;
  p {
    font-size: 14px;
    color: #000;
  }
  span {
    font-size: 12px;
    color: #666;
  }
}
.address-line {
  padding: 0 10px 26px;
  overflow: hidden;
  display: flex;
  h5 {
    line-height: 14px;
    font-size: 12px;
    font-weight: 400;
    vertical-align: bottom;
    margin-right: 10px;
  }
  .address {
    font-size: 14px;
    line-height: 14px;
    margin-right: 10px;
    a {
      margin-left: 10px;
    }
  }
}
.num {
  margin-bottom: 40px;
  margin-top: 10px;
  margin-left: 10px;
  span {
    margin-right: 40px;
  }
}
.btns {
  height: 52px;
  display: flex;
  .btn {
    button {
      width: 167px;
      height: 52px;
      margin-right: 15px;
      border-color: #845f3f;
      color: white;
      font-size: 20px;
      outline: none;
    }
    .btn1 {
      background: #845f3f;
      cursor: pointer;
    }
    .btn1:hover {
      opacity: 0.4;
    }
    .btn2 {
      color: #845f3f;
      background: white;
      cursor: pointer;
    }
    .btn2:hover {
      background: #845f3f;
      color: white;
    }
  }
  .btn3 {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 12px;
    color: #999;
    margin-right: 15px;
    button {
      background: white;
      width: 100%;
      height: 100%;
      border: none;
      cursor: pointer;
      i {
        width: 40px;
        height: 30px;
        font-size: 20px;
        line-height: 30px;
      }
    }
    button:hover {
      background: #845f3f;
      color: white;
    }
  }
}
.detail-content {
  overflow: hidden;
  display: flex;
  .detail-content-left {
    width: 774px;
    height: 32350px;
    margin-right: 40px;
    .detail-content-title {
      background: #e7e7e7;
      height: 41px;
      .ul {
        display: flex;
        height: 15px;
        // padding: 16px 0 13px;
        position: relative;
        .li {
          height: 13px;
          line-height: 13px;
          font-size: 13px;
          border-right: 1px solid #ccc;
          padding: 0 40px;
        }
        .li.alert::before {
          content: "";
          position: absolute;
          left: 0px;
          bottom: 0;
          width: 130px;
          height: 2px;
          border-radius: 6rpx;
          border-bottom: 2px solid #845f3f;
          box-sizing: border-box;
        }
        .li:nth-child(3) {
          border: none;
        }
      }
    }
  }
}
.detail-content-content {
  min-height: 900px;
  .image img {
    width: 100%;
  }
}
.detail-content-right {
  width: 262px;
  .detail-content-right-title {
    padding-bottom: 13px;
    margin-bottom: 17px;
    border-bottom: 1px solid #e7e7e7;
    .image {
      display: flex;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #333;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .image-title {
        width: 156px;
        .title {
          display: flex;
          h6 {
            font-size: 14px;
            line-height: 14px;
            overflow: hidden;
            font-weight: 400;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          span {
            border: 1px solid red;
            border-radius: 8px;
            width: 24px;
            height: 10px;
            padding: 2px 4px;
            text-align: center;
            vertical-align: middle;
            margin-left: 6px;
            line-height: 10px;
            display: inline-block;
            white-space: nowrap;
            font-size: 12px;
            color: #bf1111;
          }
        }

        div {
          margin-top: 4px;
          overflow: hidden;
          font-size: 12px;
          line-height: 12px;
          text-overflow: ellipsis;
        }
      }
      button {
        height: 30px;
        min-width: 48px;
        line-height: 25px;
        border-radius: 3px;
        margin-left: 15px;
        background: #845f3f;
        color: white;
      }
      button:hover {
        opacity: 0.4;
      }
    }
  }
  .detail-content-bottom {
    h2 {
      text-align: center;
      font-weight: 300;
      font-size: 16px;
      height: 42px;
      color: #333;
      line-height: 42px;
      margin-bottom: 17px;
    }
    .detail-container {
      margin-bottom: 5px;
      border: 1px solid #f4f4f4;
      overflow: hidden;
      transition: all 0.5s;
      cursor: pointer;
      .container {
        width: 260px;
        // height: 197px;
        padding: 22px 53px;
        img {
          width: 154px;
          height: 154px;
          border: 1px solid black;
        }
      }
      .container-image {
        text-align: center;
        p {
          padding: 0 15px;
          text-align: center;
          font-size: 16px;
        }
        p:nth-child(1) {
          color: #845f3f;
          height: 38px;
        }
        p:nth-child(2) {
          background: #f4f4f4;
          height: 30px;
          line-height: 30px;
        }
        p:nth-child(3) {
          background: #f4f4f4;
          color: #c33300;
          font-size: 14px;
          height: 25px;
        }
      }
    }
    .detail-container:hover {
      box-shadow: 0px 0px 10px #ccc;
      transform: translate3d(-2px, 0);
    }
  }
}
/deep/.el-tabs__header {
  margin: 0;
  background: #e7e7e7;
  width: 774px;
}
/deep/.el-tabs__header.active {
  margin: 0;
  position: fixed;
  top: 51px;
  background: #e7e7e7;
  width: 774px;
  z-index: 9999;
}
.main-body {
  min-height: 900px;
}
.comment-top-container {
  margin: 16px 0;
}
.comment-top-container .comment-top-positive-rate {
  float: left;
  line-height: 40px;
  color: #845f3f;
}
.comment-top-container .comment-top-positive-rate {
  float: left;
  line-height: 40px;
  color: #845f3f;
  font-size: 14px;
}
.comment-top-container .comment-top-ratingbar-container {
  float: right;
  line-height: 40px;
  margin-left: 30px;
  color: #845f3f;
}
.comment-top-container .comment-top-tabs {
  padding-top: 5px;
  text-align: center;
}
.tabbar-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: direction;
  flex-direction: direction;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: start;
  justify-content: start;
  -ms-flex-align: center;
  align-items: center;
}
.tabbar-container .tabbar-item {
  margin-bottom: 10px;
  margin-right: 20px;
}
.tabbar-container .tabbar-item.active {
  background: #845f3f;
  span {
    color: white;
  }
}
.m-btn-xs {
  min-width: 70px;
  height: 28px;
  line-height: 26px;
  font-size: 13px;
}

.m-btns {
  display: inline-block;
  border-radius: 2px;
  text-align: center;
  color: #666;
  border: 1px solid #666;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 6px;
  -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
  -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
  transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
}
.commentItem {
  width: 774px;
  position: relative;
}
.commentItem .t-div {
  margin-top: 35px;
  display: inline-block;
}
.commentItem .m-div {
  margin: 10px 0 10px 66px;
  font-size: 14px;
  line-height: 24px;
  color: #333;
}
.commentItem .img-div {
  margin-top: 10px;
  margin-bottom: 24px;
  margin-left: 64px;
}
.commentItem .b-div {
  margin-top: 24px;
  height: 1px;
  width: 711px;
  margin-left: 64px;
  background: #eee;
}
.commentItem .t-div .myimg {
  height: 44px;
  width: 44px;
  border-radius: 22px;
  background: #eee;
  overflow: hidden;
  float: left;
}
.commentItem .t-div .myimg img {
  height: 44px;
  width: 44px;
}
.commentItem .t-div .info {
  margin-left: 66px;
}
.commentItem .t-div .info .name {
  font-size: 18px;
}
.commentItem .t-div .info .attach {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
.commentItem .t-div .info .attach .margin {
  margin: 0 10px;
}
.imggroup-container,
.imggroup-container .imggroup-tabs-container {
  width: 100%;
}
.imggroup-container,
.imggroup-container .imggroup-tabs-container {
  width: 100%;
}
.imggroup-container .imggroup-tabs-container .imggroup-tabs-item {
  float: left;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #fff;
  margin-bottom: 10px;
}
.commentItem .b-div {
  margin-top: 24px;
  height: 1px;
  width: 711px;
  margin-left: 64px;
  background: #eee;
}
</style>
