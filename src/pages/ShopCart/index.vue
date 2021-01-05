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
          <ul
            class="cart-list"
            v-for="(cart, index) in shopCartList"
            :key="cart.id"
          >
            <li class="cart-con1">
              <input
                type="checkbox"
                :checked="cart.check ? 'check' : ''"
                @change="changeSelected(+!cart.check, index)"
              />
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
                @blur="updateCount(cart)"
              ></el-input-number>
            </li>
            <li class="cart-con5">
              <span>￥{{ cart.count * cart.price }}</span>
            </li>
            <li class="cart-con6">
              <i class="el-icon-close" @click="del(cart.id)"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div>
        <div class="cateName">
          <div class="choice">
            <input
              name="private"
              type="checkbox"
              :checked="isSelectAll"
              @change="selectAll(isSelectAll)"
            />
            <span>小米自营(特殊商品)</span>
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
          <ul
            class="cart-list"
            v-for="(cart, index) in shopCartList"
            :key="cart.id"
          >
            <li class="cart-con1">
              <input
                type="checkbox"
                :checked="cart.check ? 'check' : ''"
                @change="changeSelected(+!cart.check, index)"
              />
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
                @blur="updateCount(cart)"
              ></el-input-number>
            </li>
            <li class="cart-con5">
              <span>￥{{ cart.count * cart.price }}</span>
            </li>
            <li class="cart-con6">
              <i class="el-icon-close" @click="del(cart.id)"></i>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="cart-choose">
        <div class="chooseAll">
          <input
            type="checkbox"
            :checked="isCheckAll"
            @change="checkAll(isCheckAll)"
          />
          <span>全选</span>
          <span
            >已选<span>{{ totalCount }}</span
            >件</span
          >
        </div>
        <div class="total-money">
          <div class="amount">
            合计:<span>￥{{ totalPrice }}</span>
          </div>
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
import Api from '../../api/Api';
export default {
  name: 'ShopCart',
  data() {
    return {
      shopCartList: [],
    };
  },
  async mounted() {
    //获取数据并展示(展示数据出现错误)
    let result = await Api('/getShopCart');
    this.shopCartList = result;
  },
  methods: {
    //数量更新,做表单输入限制
    updateCount(count) {
      //console.log('updateCount');
      if (count < 1) {
        count = 1;
      }
      if (count > 10) {
        count = 10;
      }
    },
    //弹窗删除商品
    del(id) {
      if (window.confirm('您确定要删除吗?')) {
        console.log(id, this.shopCartList);
        this.shopCartList = this.shopCartList.filter((cart) => {
          return cart.id !== id;
        });
      }
      // this.$confirm('您确定要删除吗?', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   callback: (id) => {
      //     console.log(id);
      //     this.shopCartList = this.shopCartList.filter((cart) => {
      //       return cart.id !== id;
      //     });
      //   },
      //});
    },
    //切换选中状态
    changeSelected(check, index) {
      console.log('changeSelected', check, index);
      //修改切换状态
      this.shopCartList[index].check = check;
      // this.$store.commit('changeSelected', { check, index });
    },
    //切换全选状态
    checkAll(check) {
      //判断选中的状态并进行数据转换
      check = check === true ? 0 : 1;
      //console.log(check);
      //遍历数据
      this.shopCartList.forEach((cart) => {
        cart.check = check;
      });
    },
    // //切换单个列表全选功能
    // selectAll(check) {
    //   check = check === true ? 0 : 1;
    //   console.log(check);
    //   //遍历每条数据的时候
    //   this.shopCartList.forEach((cart) => {
    //     cart.check = check;
    //   });
    // },
  },
  computed: {
    //已选数量
    totalCount(shopCartList) {
      return this.shopCartList.reduce((p, c) => {
        // return c.check === 1 ? p + c.count : p;
        return p + (c.check === 1 ? c.count : 0);
      }, 0);
    },
    //合计价格
    totalPrice(shopCartList) {
      return this.shopCartList.reduce((p, c) => {
        return c.check === 1 ? p + c.count * c.price : p;
      }, 0);
    },
    //统计全选
    isCheckAll(shopCartList) {
      return this.shopCartList.every((cart) => cart.check);
    },
    //统计单个列表的全选
    // isSelectAll(shopCartList) {
    //   return this.shopCartList.every((cart) => cart.check);
    // },
  },
};
</script>

<style lang="less" scoped>
input {
  margin-left: 10px;
}
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
.cartTitle {
  font-size: 14px;
  color: #333;
  line-height: 40px;
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
  float: left;
  // border: 1px solid green;
  padding-bottom: 20px;
  height: 60px;
  line-height: 60px;
  margin-right: -400px;
}
.amount {
  height: 30px;
  font-size: 24px;
}
.amount span {
  padding-left: 10px;
  color: #c00000;
}
.break-price {
  height: 30px;
}
.break-price span {
  font-size: 12px;
  color: #999;
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
