import Api from "../../api/Api"
const state = {
  //获取token数据
  token: localStorage.getItem("token") || "",
}
const actions = {
  //发送请求获取login数据
  async toLogin ({ commit }) {
    const user = await Api('/product/login')
    console.log(user)
    commit('TO_LOGIN', user)
  }
}
const mutations = {
  TO_LOGIN (state, user) {
    state.token = user.token;
  },

}
const getters = {


}
export default {
  state,
  actions,
  mutations,
  getters
}