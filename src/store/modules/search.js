import Api from "../../api/Api";
export default {
  state: {
    recommendList: [],
  },
  getters: {},
  actions: {
    async getRecommentList({ commit }) {
      const recommendList = await Api("/product/recommendList");
      commit("GET_RECOMMENT_LIST", recommendList);
    },
  },
  mutations: {
    GET_RECOMMENT_LIST(state, recommendList) {
      state.recommendList = recommendList;
    },
  },
};
