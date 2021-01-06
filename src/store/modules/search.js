import Api from "../../api/Api";
export default {
  state: {
    recommendList: [],
    searchList: [],
  },
  getters: {},
  actions: {
    async getRecommentList({ commit }) {
      const recommendList = await Api("/product/recommendList");
      commit("GET_RECOMMENT_LIST", recommendList);
    },
    async getSearchList({ commit }) {
      let searchList = await Api("/search/searchList");
      searchList = searchList.goods;
      commit("GET_SEARCH_LIST", searchList);
    },
  },
  mutations: {
    GET_RECOMMENT_LIST(state, recommendList) {
      state.recommendList = recommendList;
    },
    GET_SEARCH_LIST(state, searchList) {
      state.searchList = searchList;
    },
  },
};