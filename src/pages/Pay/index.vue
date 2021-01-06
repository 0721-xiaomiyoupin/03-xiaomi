<template>
  <div class="pay">
    <div class="pay-container">
      <div class="pay-container-warp">
        <div class="pay-top">
          <span class="pay-span-one"><a>首页</a>></span>
          <span class="pay-span-two"><a>个人中心</a>></span>
          <span class="pay-span-last"><a>确认订单</a></span>
        </div>
        <div class="pay-info">
          <div class="pay-title">订单提交成功！去付款咯～</div>
          <p class="pay-warn">请在14分钟内完成支付, 超时后将取消订单</p>
          <ul class="pay-detail" v-if="pay.data">
            <li>
              <span>订单编号：</span>
              <span>{{ pay.traceId }}</span>
            </li>
            <li>
              <span>订单价格：</span>
              <span class="pay-price"
                >{{ pay.data.orderInfo.orderPrice.paidPrice }}元</span
              >
            </li>
            <li>
              <span>收货信息：</span>
              <span>{{ pay.data.orderInfo.addressInfo.consignee }}</span>
              <span>{{ pay.data.orderInfo.addressInfo.province.name }}</span>
              <span>{{ pay.data.orderInfo.addressInfo.city.name }}</span>
              <span>{{ pay.data.orderInfo.addressInfo.district.name }}</span>
              <span>{{ pay.data.orderInfo.addressInfo.area.name }}</span>
              <span>{{ pay.data.orderInfo.addressInfo.address }}</span>
            </li>
            <li>
              <span>商品名称 ：&nbsp;&nbsp;&nbsp;</span>
              <span>{{
                pay.data.orderInfo.orderItemInfo.unShippedList[0].productName
              }}</span>
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
    <div class="pay-method">
      <div class="pay-method-warp">
        <h3 class="pay-method-tit">选择以下支付方式付款</h3>
        <h3 class="pay-method-pay">支付平台</h3>
        <ul class="pay-method-ul">
          <li class="pay-method-li"><img src="./images/01order.png" /></li>
          <li><img src="./images/02weixin.png" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../../api/Api";
export default {
  name: "Pay",
  data() {
    return {
      pay: {},
    };
  },
  async mounted() {
    const pay = await Api("/product/pay");
    if (pay.traceId === this.$route.query.traceId) {
      this.pay = pay;
    }
  },
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
}
.pay {
  width: 100%;
}
.pay-container {
  background-color: #f2f2f2;
}
.pay-container-warp {
  width: 1080px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.pay-top {
  padding: 30px 0;
  height: 15px;
  font-size: 13px;
  color: #000;
}
.pay-span-one a {
  margin-right: 6px;
}
.pay-span-two a {
  margin: 0 6px;
}
.pay-span-last a {
  margin: 0 6px;
  color: #999;
}
.pay-info {
  color: #333;
  padding: 30px 0;
  font-size: 14px;
}
.pay-title {
  height: 37px;
  padding-bottom: 26px;
  font-size: 28px;
}
.pay-detail {
  margin-top: 10px;
}
.pay-detail li {
  height: 25px;
  line-height: 25px;
}
.pay-price {
  color: #c00000;
}
.pay-method {
  background: white;
  padding-bottom: 100px;
}
.pay-method-warp {
  width: 1080px;
  margin: 0 auto;
  padding: 80px;
}
.pay-method-tit {
  height: 30px;
  line-height: 30px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e7e7e7;
  color: #333;
  font-size: 18px;
  font-weight: 400;
}
.pay-method-pay {
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
}
.pay-method-ul li {
  float: left;
  border: 1px solid #ccc;
  margin-right: 15px;
}
.pay-method-ul li img {
  width: 173px;
  height: 59px;
}
</style>