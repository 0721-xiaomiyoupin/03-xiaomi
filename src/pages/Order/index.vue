<template>
  <div class="order">
    <div class="order-container">
      <div class="order-top">
        <span class="order-span-one"
          ><router-link class="to-home" to="/home">首页</router-link>></span
        >
        <span class="order-span-two"><a>个人中心</a>></span>
        <span class="order-span-last"><a>确认页</a></span>
      </div>
      <div class="order-address">
        <p>收货地址</p>
        <div class="order-address-detail" v-if="address.data">
          <div>
            姓名：&nbsp;&nbsp;&nbsp;<span>{{
              address.data.address[0].consignee
            }}</span>
          </div>
          <div>
            地址：&nbsp;&nbsp;&nbsp;<span>{{
              address.data.address[0].province.name
            }}</span
            ><span>({{ address.data.address[0].city.name }})</span
            ><span
              >{{ address.data.address[0].district.name
              }}{{ address.data.address[0].area.name }}</span
            >
          </div>
          <div>
            电话：&nbsp;&nbsp;&nbsp;<span>{{
              address.data.address[0].tel
            }}</span>
          </div>
          <div>
            编码：&nbsp;&nbsp;&nbsp;<span>{{
              address.data.address[0].zipcode
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="order-address-more"
        :class="color ? 'colors' : ''"
        @click="flag = !flag"
        @mouseenter="color = true"
        @mouseleave="color = false"
      >
        <div v-if="flag">
          <span>显示更多收货地址</span>
        </div>
        <div v-else>
          <span>收起更多收货地址</span>
        </div>
      </div>
      <!-- 底部信息 -->
      <div class="order-info">
        <div class="order-info-title">
          <img src="./images/youpin.png" />
          <span>有品精选</span>
        </div>
        <div class="order-info-container">
          <div class="order-info-product">
            <img src="./images/shopmain.png" />
            <span class="order-info-product-name">
              <span class="order-product-tag"
                >小米10青春版 6GB+128GB 白桃乌龙</span
              >
              <span class="order-product-support">支持七天无理由退款</span>
            </span>
            <span class="order-product-price">1999.00元×1</span>
            <span class="order-product-total">￥1999.00</span>
          </div>
          <div class="order-product-bill-type">
            <span class="order-bill-one">发票类型</span>
            <span class="order-bill-two">不开发票</span>
            <span class="order-bill-last">电子发票</span>
          </div>
          <div class="order-product-invoice">
            <span class="order-bill-one">发票抬头</span>
            <span class="order-bill-two">个人</span>
            <span class="order-bill-last order-invoice">企业</span>
          </div>
          <a>常见发票问题>></a>
          <div class="order-buyer-word">
            <span class="order-bill-one order-buyer-title">买家留言</span>
            <span>
              <textarea
                type="text"
                class="order-buyer-text"
                placeholder="填写内容，45字以内"
                placeholder-name="placeholder"
              ></textarea>
            </span>
          </div>
        </div>
        <p class="order-discount">无可用优惠券</p>

        <div class="order-price">
          <span>商品总价：</span>
          <span class="order-price-two"> 1999.00元</span>
        </div>
        <div class="order-price">
          <span>运费 ：</span>
          <span class="order-price-two"> 0.00元</span>
        </div>
        <div class="order-price">
          <span>优惠：</span>
          <span class="order-price-two"> 0.00元</span>
        </div>
        <div class="order-total-price order-price">
          <span>合计：</span>
          <span class="order-price-two order-total-two">￥1999.00</span>
        </div>
        <div class="order-go">
          <span @click="submit">去下单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../../api/Api";
export default {
  name: "Order",
  data() {
    return {
      flag: true,
      color: false,
      address: {},
    };
  },
  methods: {
    submit() {
      const location = {
        name: "pay",
      };
      location.query = {
        traceId: this.address.traceId,
      };
      this.$router.push(location);
    },
  },
  async mounted() {
    const address = await Api("/product/addressList");
    //if(address.traceId===this.$route.query.traceId){this.address = address;}
    this.address = address;
  },
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
}
.order-container {
  width: 1080px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.order-top {
  border-top: 1px solid #e7e7e7;
  padding: 30px 0;
  height: 15px;
  font-size: 13px;
  color: #000;
}
.order-span-one .to-home {
  margin-right: 6px;
}
.order-span-two a {
  margin: 0 6px;
}
.order-span-last a {
  margin: 0 6px;
  color: #999;
}
.order-address p {
  margin-bottom: 15px;
  font-size: 19px;
  color: #333;
}
.order-address-detail div {
  font-size: 18px;
  padding: 5px 5px 5px;
}
.order-address-detail div span {
  padding-right: 5px;
}
.order-address-more {
  margin-top: 15px;
  margin-bottom: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  line-height: 42px;
  background-color: #fafafa;
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}
.colors {
  color: #845f3f;
}
.order-info-title {
  height: 30px;
  margin: 55px 0 17px;
  display: flex;
  align-items: center;
}
.order-info-title img {
  width: 30px;
  height: 30px;
}
.order-info-title span {
  padding-left: 10px;
  font-size: 14px;
  color: #333;
}
.order-info-container {
  border: 1px solid #e7e7e7;
  padding: 0 20px;
}
.order-info-product {
  height: 90px;
  line-height: 90px;
  border-bottom: 1px solid #e7e7e7;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.order-info-product img {
  width: 50px;
  height: 50px;
}
.order-info-product-name {
  width: 400px;
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
  color: #333;
}
.order-product-tag {
  font-size: 14px;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.order-product-support {
  line-height: 20px;
  font-size: 12px;
  color: #ccc;
}
.order-product-price {
  flex-grow: 1;
  color: #333;
  text-align: end;
}
.order-product-total {
  width: 180px;
  text-align: end;
  color: #cc0000;
}
.order-product-bill-type {
  padding-top: 30px;
  color: #333;
  font-size: 14px;
}
.order-bill-one {
  font-size: 19px;
}
.order-bill-two {
  display: inline-block;
  width: 220px;
  height: 44px;
  line-height: 42px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  border: 1px solid #e7e7e7;
  padding: 0 60px;
  margin: 0 10px 0 60px;
}
.order-bill-last {
  display: inline-block;
  width: 220px;
  height: 44px;
  line-height: 42px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  color: #845f3f;
  border: 1px solid #845f3f;
}
.order-invoice {
  border: 1px solid #e7e7e7;
  color: #333;
}
.order-product-invoice {
  padding: 40px 0 20px;
}
.order-info-container a {
  display: inline-block;
  padding-left: 138px;
  font-size: 14px;
  color: #67a3d9;
  text-decoration: underline;
}
.order-buyer-word {
  padding: 30px 0 20px;
}
.order-buyer-title {
  float: left;
}
.order-buyer-text {
  margin: 23px 0 0 60px;
  resize: none;
  width: 760px;
  height: 100px;
  border: 1px solid #e7e7e7;
  outline: none;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 14px;
  padding-top: 12px;
}
.order-discount {
  padding-top: 10px;
  color: #cc0000;
  font-size: 14px;
}
.order-bottom {
  position: fixed;
  right: 0;
}
.order-price {
  width: 1080px;
  text-align: right;
  font-size: 14px;
  padding: 5px 0;
}
.order-price-two {
  padding-right: 30px;
  padding-left: 60px;
  color: #c00000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.order-total-price {
  font-size: 18px;
  padding-top: 20px;
}
.order-total-two {
  padding-left: 35px;
}
.order-go {
  width: 1080px;
  text-align: right;
  padding: 10px 0 50px;
}
.order-go span {
  display: inline-block;
  width: 160px;
  height: 52px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: #845f3f;
  border-color: #845f3f;
}
</style>