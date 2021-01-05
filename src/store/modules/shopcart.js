import Api from "../../api/Api"
const state = {
  shopCartList: [
    {
      "id": "100",
      "name": "小米热水器",
      "imgUrl": "https://img.youpin.mi-img.com/shopmain/bbfaf5c13800d642621f3f791644c9fc.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080",
      "count": "2",
      "price": "399.00",
      "check": 0
    },
    {
      "id": "200",
      "name": "小米手机",
      "imgUrl": "https://img.youpin.mi-img.com/shopmain/9cfe34493cbc6b3ca8dae36e4cde4216.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080",
      "count": "1",
      "price": "1899.00",
      "check": 1
    },
    {
      "id": "300",
      "name": "小米尊享手机",
      "imgUrl": "https://img.youpin.mi-img.com/shopmain/d55c652891772646e147930f78ce4bc8.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080",
      "count": "1",
      "price": "2099.00",
      "check": 0
    }
  ]
}
const actions = {
}
const mutations = {
  //切换选中的商品
  changeSelected (state, { check, index }) {
    console.log(check, index)
    state.shopCartList[index].check = check
  },
  //切换全选按钮
  changeSelectedAll (state, check) {
    state.shopCartList.forEach((cart) => {
      cart.check = check
    })
  }

}
const getters = {
  //总数量
  totalCount (state) {
    return state.shopCartList.reduce((p, c) => {
      return c.check === 1 ? p + c.count : p
    }, 0)
  },
  //总价格
  totalPrice (state) {
    return state.shopCartList.reduce((p, c) => {
      return c.check === 1 ? p + c.count * c.price : p
    }, 0)
  },
  //统计全选计算
  isCheckAll (shopCartList) {
    return this.shopCartList.every((cart) => cart.check);
  },
}
export default {
  state,
  actions,
  mutations,
  getters
}