<template>
  <div class="cartContainer">
    <div class="cartChange">
      <span class="active"><a href="###">首页</a></span
      >>
      <span class="deactive"><a href="###">购物车</a></span>
    </div>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">
          <i class="el-icon-circle-check point active"></i>
          <span class="all-select">全选</span>
        </div>
        <div class="cart-th2">商品信息</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">金额（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cateName">
        <div class="choice">
          <i class="el-icon-circle-check point active"></i>
          <span>有品精选</span>
        </div>
        <div class="popover">
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            content="有品精选商品，即有品配送和第三方商家发货的商品，
              2018年1月1日起，单笔订单满99元免运费，不满99元收10元运费。
              *包邮订单拆单后若部分订单退款使得剩余订单不满足包邮条件时将补扣10元运费。"
          >
            <el-button slot="reference">满99元免运费</el-button>
          </el-popover>
        </div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in shopCartList" :key="cart.id">
          <li class="cart-con1">
            <i class="el-icon-circle-check point active"></i>
          </li>
          <li class="cart-con2">
            <img :src="cart.imgUrl" class="cartImg" />
            <div class="cartTitle">
              <a href="###">{{ cart.name }}</a>
            </div>
          </li>
          <li class="cart-con3">
            <span>￥{{ cart.price }}</span>
          </li>
          <li class="cart-con4">
            <el-input-number
              @click="updateCount"
              v-model="cart.count"
              :min="1"
              :max="10"
              label="描述文字"
              @input="formatSkuNum"
              @blur="updateAdd(cart, $event.target.value * 1 - cart.skuNum)"
            ></el-input-number>
          </li>
          <li class="cart-con5">
            <span>￥399.00</span>
          </li>
          <li class="cart-con6">
            <i class="el-icon-close"></i>
          </li>
        </ul>
      </div>
      <div class="cart-choose">
        <div class="chooseAll">
          <i class="el-icon-circle-check point"></i>
          <span>全选</span>
          <span>已选<span>0</span>件</span>
        </div>
        <!-- <div class="choosed">已选择<span>3</span>件商品</div> -->
        <div class="total-money">
          <div class="amount">合计:<span>￥0</span></div>
          <div class="break-price">
            <span>总额：￥798.00,</span>
            <span> 立减￥150.00 </span>
          </div>
        </div>
        <div class="btn">
          <button class="submit">去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request';
export default {
  name: 'ShopCart',
  data() {
    return {
      // num: 1,
      shopCartList: [],
    };
  },
  async mounted() {
    //获取数据并展示(展示数据出现错误)
    let result = await request('/getShopCart');
    console.log(result, 'result');
    this.shopCartList = result;
    console.log(this.shopCartList);
  },
  methods: {
    checkChange() {
      console.log(checkChange);
    },
    //添加或减少数量操作
    updateCount() {},
  },
};
</script>

<style lang="less" scoped>
.cartContainer {
  width: 1080px;
  margin: 0 auto;
}
.cartChange {
  padding: 30px 0;
  font-size: 13px;
}
.cartChange span {
  padding: 0 3px;
}
.active a {
  color: #000;
}
.deactive a {
  color: #999;
}
.cart-main {
  margin-bottom: 160px;
}
.cart-main .cart-th {
  background: #fafafa;
  display: flex;
  justify-content: space-between;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #999;
  padding-right: 10px;
}
.point {
  color: #999;
  font-size: 18px;
  margin: 0 20px 0 10px;
  cursor: pointer;
  &.active {
    color: red;
  }
}
.cateName {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  height: 47px;
  line-height: 47px;
  border-bottom: 1px solid #e7e7e7;
}
.choice {
  font-size: 14px;
}
.cart-body {
  margin: 15px 0;
}
.cart-list {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  height: 142px;
  line-height: 142px;
}
.cart-list li {
  float: left;
}
.cartImg {
  width: 120px;
  height: 120px;
  float: left;
}

.cart-con1 {
  width: 5%;
}
.cart-con2 {
  width: 35%;
}
.cart-con3 {
  width: 15%;
}
.cart-con4 {
  width: 20%;
  el-input-number {
    border: none;
  }
}
.cart-con5 {
  width: 20%;
}
.cart-con6 {
  width: 5%;
  i {
    font-size: 20px;
  }
}
.cart-choose {
  margin-top: 100px;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  background: #fafafa;
}
.chooseAll {
  font-size: 18px;
}
.chooseAll span {
  padding: 0 10px;
}
.total-money {
  float: left;
  // border: 1px solid green;
  padding-bottom: 20px;
  height: 60px;
  line-height: 60px;
  margin-right: -400px;
}
.amount {
  height: 30px;
  font-size: 20px;
  color: #333;
}
.amount span {
  padding-left: 10px;
  color: #c00000;
}
.break-price {
  height: 30px;
}
.submit {
  width: 200px;
  height: 80px;
  background: #a9010d;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border: none;
}
</style>
