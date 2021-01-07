<template>
  <div class="home">
    <!-- banner -->
    <div class="banner-nav container clearfix">
      <div style="width: 220px; height: 360px">
        <Categoty />
      </div>
      <!-- 轮播图 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img class="ele-imgs" :src="item.imgUrl" alt="热门活动" />
          <!-- </div> -->
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- menu 菜单-->
    <div class="menu container">
      <ul>
        <li v-for="menuItem in menuList" :key="menuItem.id">
          <div>
            <img :src="menuItem.img" alt="" />
          </div>
          <p>上新精选</p>
        </li>
      </ul>
    </div>

    <!-- Hot sale 热销 -->
    <div class="hot container">
      <div class="hot-top">
        <h2>小米有品众筹<span>永远好奇 永远年轻</span></h2>
        <span class="more">
          更多
          <a href="#">></a>
        </span>
      </div>
      <div class="hot-body">
        <div class="hot-body-for" v-for="hotItem in hotList" :key="hotItem.id">
          <div class="hot-bottom">
            <div class="hot-one clearfix">
              <img :src="hotItem.img" alt="商品" />
              <div class="hot-one-text">
                <p class="pro-info">{{ hotItem.title }}</p>
                <p class="pro-desc">{{ hotItem.desc }}</p>
                <div class="pro-price">
                  <span class="tag">￥</span>
                  <span>{{ hotItem.price }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hot-one-bottom">
            <div>
              <span class="sup-num">{{ hotItem.number }}</span
              ><span class="sup-size">人支持</span
              ><span
                class="common-tag"
                style="background-color: rgb(254, 207, 0)"
                >{{ (hotItem.isHot = true ? "热" : "爆") }}</span
              >
            </div>
            <div class="m-num">{{ hotItem.baifenbi }}%</div>
          </div>
        </div>
        <!-- <div style="margin-left: 5px">
          <div class="hot-bottom">
            <div class="hot-one clearfix">
              <img
                src="https://img.youpin.mi-img.com/shopmain/e2ff4f4498d543f906a9ccf78eacf28c.png?w=800&h=800"
                alt=""
              />
              <div class="hot-one-text">
                <p class="pro-info">机械臂采耳棒</p>
                <p class="pro-desc">1000W高精内窥镜，采镊两用款，6...</p>
                <div class="pro-price">
                  <span class="tag">￥</span>
                  <span>199</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hot-one-bottom">
            <div>
              <span class="sup-num">1258</span
              ><span class="sup-size">人支持</span
              ><span
                class="common-tag"
                style="background-color: rgb(254, 207, 0)"
                >热</span
              >
            </div>
            <div class="m-num">113%</div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- New products新品 -->
    <div class="new-Products container clearfix">
      <div class="hot-top">
        <h2>每日新品<span>每天10点 惊喜不断</span></h2>
        <span class="more">
          更多
          <a href="#">></a>
        </span>
      </div>
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div v-for="newItem in newsList" :key="newItem.id">
              <div class="swiperss-item">
                <div class="swiper-item-img">
                  <img :src="newItem.imgUrl" alt="" />
                </div>
                <div class="swiper-item-text">
                  <p class="pro-info">{{ newItem.tital }}</p>
                  <p class="pro-desc" style="font-size: 14px">
                    {{ newItem.desc }}
                  </p>
                  <div class="pro-price">
                    <span class="pro-unit">￥</span>
                    <span class="m-num"> {{ newItem.price }}</span>
                    <span class="pro-flag">起</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 需要的按钮 -->
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>

    <!-- recommend专属推荐 -->
    <div class="recommend container">
      <div class="recommend-title">
        <h2>专属推荐</h2>
      </div>
      <!-- recommend专属推荐主体 -->
      <div class="recommend-img">
        <div
          class="recommend-cons"
          v-for="recommendItem in recommendList"
          :key="recommendItem.id"
        >
          <router-link to="/detail">
            <div class="imgs">
              <img :src="recommendItem.imgUrl" alt="商品" />
              <p class="pro-desc descc">{{ recommendItem.desc }}</p>
            </div>
            <div class="recommend-box-con">
              <div class="common-tag-con">
                <div class="m-goods-common-tag-con">
                  <span
                    v-if="recommendItem.isNew === 'true'"
                    class="common-tag-text"
                    style="background-color: rgb(141, 186, 109)"
                    >新品</span
                  ><span
                    v-if="recommendItem.isMe === 'true'"
                    class="common-tag-text"
                    style="background-color: rgb(255, 103, 1)"
                    >小米自营</span
                  >
                  <span
                    v-if="recommendItem.isKill === 'true'"
                    class="common-tag-text"
                    style="background-color: rgb(217, 107, 108)"
                    >有品秒杀</span
                  >
                  <span
                    v-if="recommendItem.isSpecial === 'true'"
                    class="common-tag-text"
                    style="background-color: rgb(217, 107, 108)"
                    >特价</span
                  >
                </div>
              </div>
              <p class="pro-info xiaomi">{{ recommendItem.tital }}</p>
              <div class="pro-price pricee">
                <span class="pro-unit">￥</span>
                <span class="m-num">{{ recommendItem.price }}</span>
                <span class="pro-flag">起</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categoty from "../../components/Category/Categoty";
import request from "../../api/Api";
import "swiper/swiper-bundle.css";
import Swiper, { Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);
export default {
  name: "Home",
  data() {
    return {
      bannerList: [], //大轮播图
      hotList: [], //小米众筹
      menuList: [], //menu的列表数据
      newsList: [], //新品推荐
      recommendList: [], //专属推荐
    };
  },
  methods: {
    //首页大轮播图
    async onebanner() {
      const result = await request("/product/bannerList");
      //console.log(result);
      this.bannerList = result;
    },

    //小米众筹热度
    async hot() {
      const result = await request("/product/crowdList");
      //console.log(result);
      this.hotList = result;
    },

    //menu的列表数据
    async menu() {
      const result = await request("/product/menuList");
      //   console.log(result);
      this.menuList = result;
    },

    //new的列表数据
    async new() {
      const result = await request("/product/newsList");
      console.log(result);
      this.newsList = result;
    },

    //recommend的列表数据
    async recommend() {
      const result = await request("/product/recommendList");
      //   console.log(result);
      this.recommendList = result;
    },
    //swiper轮播图
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        // loop: true,
        // centeredSlides: true,
        // spaceBetween: 30,
        // loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  mounted() {
    this.onebanner();
    this.hot();
    this.menu();
    this.new();
    this.recommend();
    this.initSwiper();
  },
  components: {
    Categoty,
  },
};
</script>

<style lang="less" scoped>
.banner-nav {
  display: flex;
}

.swiper-slide {
  width: 270px !important;
  display: flex;
  margin-left: -270px;
  img {
    width: 265px;
    height: 260px;
  }
}
// .swiperss-item {
//   width: 270px;
// }
.swiper-pagination-icon {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 500px;
  color: transparent;
  outline: 0;
  border: 1px solid #cecece;
  background: #fff;
  transition: all 0.5s;
  margin: 0 6px;
}

.ele-imgs {
  width: 100%;
  height: 100%;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 10;
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination-icon.active {
  box-shadow: 0 0 0 4px #ccc;
  background: #a7936e;
  border: none;
}

.swiperss-button-next {
  width: 50px;
  height: 50px;
  font-size: 38px;
  color: rgb(231, 213, 213);
  background-color: rgba(173, 124, 124, 0.4);
  border-radius: 50px;
}

.swiper-button-next.right {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -22px;
  z-index: 10;
  margin-right: 6px;
  text-align: center;
}

.swiper-button-next.left {
  position: absolute;
  top: 50%;
  margin-top: -22px;
  z-index: 10;
  margin-left: 6px;
  text-align: center;
}

.menu {
  padding-top: 30px;
  height: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(240, 230, 230);
  ul {
    display: flex;
    height: 148px;
    overflow: hidden;
    padding-bottom: 10px;
    justify-content: space-between;
    li {
      div {
        padding: 25px 25px 15px;
        img {
          width: 80px;
          height: 80px;
          cursor: pointer;
        }
      }
      p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
.hot {
  margin-top: 35px;
}

.hot-top {
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 28px;
    font-weight: 400;
    span {
      margin-left: 12px;
    }
  }
  .more {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
}

.hot-bottom {
  position: relative;
  width: 537px;
  height: 210px;
  background: #f3f0e9;
  .hot-one {
    img {
      position: absolute;
      right: 15px;
      bottom: 10px;
      width: 215px;
      height: 215px;
      z-index: 4;
    }
  }
}

.hot-one-text {
  position: relative;
  z-index: 6;
  padding-top: 25px;
  padding-left: 23px;
}

.pro-price {
  margin-top: 16px;
  span {
    font-size: 24px;
    line-height: 28px;
    height: 28px;
    color: #a92112;
  }
  span.tag {
    font-size: 15px;
    vertical-align: top;
    margin-right: 7px;
  }
}

.pro-info {
  color: #333;
  margin-top: 0;
  font-size: 20px;
  line-height: 24px;
  height: 24px;
}

.pro-desc {
  color: #666;
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  margin-top: 8px;
}

.hot-body {
  display: flex;
}

.hot-body-for:nth-child(1) {
  margin-right: 5px;
}

.hot-one-bottom {
  margin-top: 10px;
  width: 537px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  .sup-num {
    margin-right: 6px;
    color: #a92112;
    font-size: 18px;
  }
}

.swiper-wrapper {
  display: flex;
  //   width: 1080px;
  //   overflow: auto;
}
.sup-size {
  font-size: 15px;
  padding-right: 5px;
}

.m-num {
  color: #a92112;
  font-size: 18px;
}

.common-tag {
  height: 18px;
  border-radius: 2px;
  vertical-align: bottom;
  padding: 0 6px;
  color: #fff;
  font-size: 13px;
  line-height: 18px;
}

.new-Products {
  margin-top: 60px;
  padding-bottom: 28px;
}

.swiperss-item {
  position: relative;
  float: left;
  width: 260px;
  text-align: center;
  background: #fff;
  transition: all 0.4s;
  cursor: pointer;
  margin-right: 10px;
}

.swiperss-item:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}

.swiper-item-text {
  padding: 11px 0;
}

.pro-price .pro-unit {
  font-size: 15px;
}

.pro-price .pro-flag {
  font-size: 12px;
}

.recommend {
  margin-top: 50px;
  margin-bottom: 60px;
}

.recommend-title {
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
  h2 {
    color: #333;
    font-size: 28px;
    font-weight: 400;
  }
}

.recommend-cons {
  width: 262px;
  padding-bottom: 0;
  margin-bottom: 5px;
  border: 1px solid #e7e7e7;
  background: none;
  margin-bottom: 5px;
  margin-right: 5px;
  transition: all 0.4s;
}

.recommend-cons:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}

.imgs img {
  height: 195px;
  width: 195px;
  padding-left: 35px;
  padding-right: 35px;
}

.recommend-img {
  display: flex;
  flex-wrap: wrap;
}

.recommend-box-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  padding: 13px 0 10px;
  background: #f8f8f8;
}

.common-tag-con {
  text-align: center;
  height: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
  span {
    padding: 0 6px;
    margin: 0 3px;
    color: white;
    font-size: 14px;
    line-height: 20px;
    border-radius: 2px;
    vertical-align: bottom;
  }
  span:nth-child(1) {
    background-color: rgb(141, 186, 109);
  }
  span:nth-child(2) {
    background-color: rgb(255, 103, 1);
  }
}

.xiaomi {
  margin-top: 10px;
  font-size: 18px;
  line-height: 20px;
  height: 20px;
}

.descc {
  color: #845f3f;
  margin: 0;
  text-align: center;
}

.pricee {
  margin-top: 11px;
  margin-bottom: 0;
  height: 20px;
  line-height: 20px;
  span.m-num {
    font-size: 20px;
  }
}
.swiper-container {
  --swiper-navigation-size: 30px;
}
.swiper-button-prev,
.swiper-button-next {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  color: rgba(31, 45, 61, 0.11);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: rgb(255, 255, 255);
  opacity: 0.8;
  background-color: rgb(224, 149, 51);
}

/deep/.el-carousel__container {
  width: 859px;
  height: 100%;
}

/deep/.el-carousel__button {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 500px;
  color: transparent;
  outline: 0;
  border: 1px solid #cecece;
  background: #fff;
  color: #fff;
  opacity: 1;
  transition: all 0.5s;
  margin: 0 6px;
}

/deep/.el-carousel__button:hover {
  box-shadow: 0 0 0 4px #ccc;
  background: #a7936e;
  border-radius: 500px;
  border: none;
}

/deep/.el-carousel__indicator.is-active button {
  box-shadow: 0 0 0 4px #ccc;
  background: #a7936e;
  border-radius: 500px;
  border: none;
}
</style>
