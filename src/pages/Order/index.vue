<template>
  <div class="order">
    <div class="order-container">
      <div class="order-container-warp">
        <div class="order-top">
          <span class="order-span-one"><a>首页</a>></span>
          <span class="order-span-two"><a>个人中心</a>></span>
          <span class="order-span-last"><a>确认订单</a></span>
        </div>
        <div class="order-info">
          <div class="order-title">订单提交成功！去付款咯～</div>
          <p class="order-warn">请在14分钟内完成支付, 超时后将取消订单</p>
          <ul class="order-detail">
            <li>
              <span>订单编号：</span>
              <span>5210104247503441</span>
            </li>
            <li>
              <span>订单价格：</span>
              <span class="order-price">1599.00元</span>
            </li>
            <li>
              <span>收货信息：</span>
              <span>刘瑶</span>
              <span>156****7839</span>
              <span>北京</span>
              <span>北京市</span>
              <span>西城区</span>
              <span>4059999</span>
            </li>
            <li>
              <span>商品名称</span>
              <span>Redmi</span>
              <span>Note</span>
              <span>9</span>
              <span> Pro</span>
              <span>5G</span>
              <span>6GB+128G</span>
              <span>碧海星辰</span>
            </li>
            <li>
              <span>配送时间： </span>
              <span>不限送货时间</span>
            </li>
            <li>
              <span>发票类型：</span>
              <span>电子普通发票</span>
            </li>
            <li>
              <span>发票信息</span>
              <span>个人</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="order-method">
      <div class="order-method-warp">
        <h3 class="order-method-tit">选择以下支付方式付款</h3>
        <h3 class="order-method-pay">支付平台</h3>
        <ul class="order-method-ul">
          <li class="order-method-li"><img src="./images/01order.png" /></li>
          <li><img src="./images/02weixin.png" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
}
.order {
  width: 100%;
}
.order-container {
  background-color: #f2f2f2;
}
.order-container-warp {
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
.order-info {
  color: #333;
  padding: 30px 0;
  font-size: 14px;
}
.order-title {
  height: 37px;
  padding-bottom: 26px;
  font-size: 28px;
}
.order-detail {
  margin-top: 10px;
}
.order-detail li {
  height: 25px;
  line-height: 25px;
}
.order-price {
  color: #c00000;
}
.order-method {
  background: white;
  padding-bottom: 100px;
}
.order-method-warp {
  width: 1080px;
  margin: 0 auto;
  padding: 80px;
}
.order-method-tit {
  height: 30px;
  line-height: 30px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e7e7e7;
  color: #333;
  font-size: 18px;
  font-weight: 400;
}
.order-method-pay {
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
}
.order-method-ul li {
  float: left;
  border: 1px solid #ccc;
  margin-right: 15px;
}
.order-method-ul li img {
  width: 173px;
  height: 59px;
}
</style>
