<template>
  <div class="order">
    <div class="order-container">
      <div class="order-top">
        <span class="order-span-one"><a>首页</a>></span>
        <span class="order-span-two"><a>个人中心</a>></span>
        <span class="order-span-last"><a>确认页</a></span>
      </div>
      <div class="order-address">
        <p>收货地址</p>
        <div>不会写留出来</div>
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
          <a>W</a>
        </div>
        <div v-else>
          <span>收起更多收货地址</span>
          <a>M</a>
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
              <span class="order-product-tag">有品秒杀</span>
              <span class="order-product-name">左点小仙智能蒸汽足浴盆Z9</span>
            </span>
            <span class="order-product-price">459.00元×2</span>
            <span class="order-product-total">￥918.00</span>
          </div>
          <div>111</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      flag: true,
      color: false,
    };
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
  padding: 30px 0;
  height: 15px;
  font-size: 13px;
  color: #000;
}
.order-span-one a {
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
  margin-left: 20px;
  color: #333;
}
.order-product-tag {
  height: 20px;
  line-height: 20px;
  padding: 0 6px;
  margin-left: 8px;
  background-color: #c00000;
  color: #fff;
  font-size: 12px;
  vertical-align: 2px;
  border-radius: 2px;
}
.order-product-name {
  display: inline-block;
  width: 400px;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
</style>
