import Api from "../../api/Api"
const state = {
  //初始化购物车数据
  shopCartList: [],
  isShowLogin: false,
  isShowShoping: false
}
const actions = {
  //发送请求获取购物车数据
  async getShopCart ({ commit }) {
    const shopCartList = await Api('/product/cartList')
    commit('GET_SHOP_CART', shopCartList)
  }
}
const mutations = {
  GET_SHOP_CART (state, shopCartList) {
    state.shopCartList = shopCartList
  },
  //删除数据
  delCart (state, id) {
    state.shopCartList = state.shopCartList.filter((cart) => {
      return cart.gid !== id;
    });
  },
  //切换选中的商品
  changeSelected (state, { cart, index }) {
    //做判断是否选中
    const checked = cart.checked === true ? false : true;
    console.log(checked, index)
    state.shopCartList[index].checked = checked
  },
  //切换全选按钮
  changeSelectedAll (state, checked) {
    checked = checked === true ? false : true;
    state.shopCartList.forEach((cart) => {
      cart.checked = checked
    })
  }

}
const getters = {
  //总数量
  totalNum (state) {
    return state.shopCartList.reduce((p, c) => {
      return p + (c.checked === true ? c.count : 0);
    }, 0)
  },
  //总价格
  totalAmount (state) {
    return state.shopCartList.reduce((p, c) => {
      return c.checked === true ? p + c.count * c.salePrice : p;
    }, 0)
  },
  //统计全选计算
  isCheckAll (state) {
    return state.shopCartList.every((cart) => cart.checked);
  },
}
export default {
  state,
  actions,
  mutations,
  getters
}