<template>
  <div class="cartContainer">
    <div class="showCart">
      <div class="cartChange">
        <span class="active"><router-link to="/">首页</router-link></span
        >>
        <span class="deactive"><a href="###">购物车</a></span>
      </div>
      <div>
        <div class="showLoginImg" v-if="!shopCartList.length">
          <div class="textImg">
            <img src="./images/05.png" />
            <p>购物车还是空的</p>
          </div>
          <div class="toLogin" @click="$router.push('/')">
            <button class="btn1">继续逛</button>
          </div>
        </div>
        <div class="cart-main" v-else>
          <div class="cart-th">
            <div class="cart-th1">
              <input
                type="checkbox"
                :checked="isCheckAll"
                @change="checkAll(isCheckAll)"
              />
              <span class="all-select">全选</span>
            </div>
            <div class="cart-th2">商品信息</div>
            <div class="cart-th3">单价（元）</div>
            <div class="cart-th4">数量</div>
            <div class="cart-th5">金额（元）</div>
            <div class="cart-th6">操作</div>
          </div>
          <div>
            <div class="cateName">
              <div class="choice">
                <input
                  name="goods"
                  type="checkbox"
                  :checked="isCheckAll"
                  @change="checkAll(isCheckAll)"
                />
                <span>小米有品(特殊商品)</span>
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
                  <el-button slot="reference">已免运费</el-button>
                </el-popover>
              </div>
            </div>
            <div class="cart-body">
              <ul
                class="cart-list"
                v-for="(cart, index) in shopCartList"
                :key="cart.gid"
              >
                <li class="cart-con1">
                  <input
                    type="checkbox"
                    :checked="cart.checked"
                    @change="changeCheck(cart, index)"
                  />
                </li>
                <li class="cart-con2">
                  <div class="urlImg">
                    <img :src="cart.imageUrl" class="cartImg" />
                  </div>
                  <div class="cartTitle">
                    <a href="###">{{ cart.productName }}</a>
                  </div>
                </li>
                <li class="cart-con3">
                  <span>￥{{ cart.salePrice }}</span>
                </li>
                <li class="cart-con4">
                  <el-input-number
                    v-model="cart.count"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                </li>
                <li class="cart-con5">
                  <span>￥{{ cart.count * cart.salePrice }}</span>
                </li>
                <li class="cart-con6">
                  <i class="el-icon-close" @click="del(cart.gid)"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="cart-choose">
            <div class="chooseAll">
              <input
                type="checkbox"
                :checked="isCheckAll"
                @change="checkAll(isCheckAll)"
              />
              <span>全选</span>
              已选<span>{{ totalNum }}</span>
            </div>
            <div class="total-money">
              <div class="amount">
                合计:<span>￥{{ totalAmount }}</span>
              </div>
            </div>
            <div class="btn">
              <button class="btn" @click="toOrder">去结算</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "ShopCart",
  mounted() {
    if (this.$route.query.gid) {
      this.getShopCart();
    }
  },
  methods: {
    ...mapActions(["getShopCart"]),
    ...mapMutations(["delCart", "changeSelected", "changeSelectedAll"]),
    //弹窗删除商品
    del(id) {
      if (window.confirm("您确定要删除吗?")) {
        this.delCart(id);
      }
    },
    //切换单个商品选中
    changeCheck(cart, index) {
      this.changeSelected({ cart, index });
    },
    //切换全选
    checkAll(checked) {
      this.changeSelectedAll(checked);
    },
    //跳转到结算页面
    toOrder() {
      let location = {
        name: "order",
      };
      location.query = {
        traceId: this.shopCartList[0].traceId,
      };
      this.$router.push(location);
    },
  },
  computed: {
    ...mapState({
      shopCartList: (state) => state.shopcart.shopCartList,
    }),
    ...mapGetters(["totalNum", "totalAmount", "isCheckAll"]),
  },
};
</script>

<style lang="less" scoped>
.cartContainer {
  width: 1080px;
  margin: 0 auto;
}
.showLoginImg {
  height: 174px;
  padding: 100px 0 200px;
}
.textImg,
.toLogin {
  margin: 0 450px;
}
.textImg img {
  width: 153px;
  height: 132px;
}
.textImg p {
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  text-align: center;
  width: 200px;
}
.toLogin {
  margin-top: 21px;
  text-align: center;
}
.btn1 {
  width: 100px;
  height: 43px;
  line-height: 43px;
  font-size: 18px;
  color: #666;
  outline: none;
}
.btn1:hover {
  background-color: rgb(134, 107, 68);
  color: white;
}
input {
  margin-left: 10px;
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
  span {
    padding-left: 30px;
  }
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
.cart-th1 {
  width: 15%;
}
.all-select {
  padding-left: 10px;
}
.cart-th2 {
  width: 25%;
}
.cart-th3 {
  width: 20%;
}
.cart-th4 {
  width: 20%;
}
.cart-th5 {
  width: 20%;
}
.cart-th5 {
  width: 15%;
}
.cart-con1 {
  width: 5%;
}
.cart-con2 {
  width: 35%;
  // margin-left: 20px;
}
.cartTitle a {
  font-size: 14px;
  color: #333;
  height: 40px;
  margin-bottom: 30px;
}
.cart-con3 {
  width: 15%;
}
.cart-con4 {
  width: 25%;
  el-input-number {
    border: none;
    outline: none;
  }
}
.cart-con5 {
  width: 15%;
  span {
    color: #c00000;
    font-size: 14px;
  }
}
.cart-con6 {
  width: 5%;
  i {
    font-size: 20px;
    color: #999;
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
  margin-right: -400px;
}
.amount {
  font-size: 24px;
}
.amount span {
  padding-left: 10px;
  color: #c00000;
}
.btn {
  width: 200px;
  height: 80px;
  background: #a9010d;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border: none;
}
</style>
