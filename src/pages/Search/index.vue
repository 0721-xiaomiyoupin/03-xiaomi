<template>
  <div class="search">
    <div class="search-container">
      <!-- 有搜索结果的 -->
      <div v-if="$route.query.keyword === '手机'" v-loading="loading">
        <div class="search-result" v-show="searchList.length">
          为您找到{{ searchList.length }}条结果
        </div>
        <div class="search-allItem">
          <div
            class="search-item"
            v-for="(good, index) in searchList"
            :key="index"
            @click="toDetail(good.data && good.data.goodsInfo.gid)"
          >
            <div class="search-item-image">
              <img :src="good.data && good.data.goodsInfo.imgSquare" />
            </div>
            <p class="search-item-info">
              {{ good.data && good.data.goodsInfo.name }}
            </p>
            <p class="search-item-price">
              ¥{{ good.data && good.data.goodsInfo.marketPrice }}
            </p>
          </div>
        </div>
        <div class="search-pagination" v-if="searchList.length > 8">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="searchList.length"
            :page-size="3"
            style="margin: 0 auto; width: 100%"
            hide-on-single-page
          >
          </el-pagination>
        </div>
      </div>
      <!-- 无搜索结果的 -->
      <div v-else>
        <div class="no-result">
          <div class="no-result-image"></div>
          <p>抱歉，暂无任何商品</p>
          <span>继续逛</span>
        </div>
        <div class="recommend">
          <p class="recommend-p">为您推荐</p>
          <div class="search-allItem">
            <div
              class="search-item"
              v-for="recommend in recommendList"
              :key="recommend.id"
              @click="$router.push('/detail')"
            >
              <div class="search-item-image">
                <img :src="recommend.imgUrl" />
              </div>
              <p class="search-item-info">
                {{ recommend.tital }}
              </p>
              <p class="search-item-price">¥{{ recommend.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      loading: true,
      time: null,
    };
  },
  computed: {
    ...mapState({
      recommendList: (state) => state.search.recommendList,
      searchList: (state) => state.search.searchList,
    }),
  },
  methods: {
    ...mapActions(["getRecommentList", "getSearchList"]),
    toDetail(id) {
      const location = {
        name: "detail",
      };
      const good = this.searchList.find(
        (item) => item.data.goodsInfo.gid === id
      );
      //给location添加属性
      location.query = {
        gid: good.data.goodsInfo.gid,
      };
      //跳转到detail页面
      this.$router.push(location);
    },
  },
  watch: {
    loading() {
      clearTimeout(this.time);
    },
  },
  mounted() {
    // 搜索页面loading时长
    if (this.$route.query.keyword === "手机") {
      this.time = setTimeout(() => {
        this.getSearchList();
        this.loading = false;
      }, 1000);
    }
    this.getRecommentList();
  },
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
}
.search {
  width: 100%;
  padding-bottom: 100px;
  background: #f2f2f2;
}
.search-container {
  width: 1080px;
  margin: 0 auto;
  padding: 30px 0;
}
.no-result {
  padding-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.no-result-image {
  width: 153px;
  height: 132px;
  margin: 0 auto;
  background-image: url(./images/01search.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.no-result p {
  margin-top: 24px;
  color: #333;
  font-size: 14px;
}
.no-result span {
  margin-top: 21px;
  width: 50px;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid black;
}
.recommend {
  margin-top: 100px;
}
.recommend-p {
  height: 42px;
  line-height: 42px;
  text-align: center;
  padding: 20px 0;
  color: #333;
  font-size: 16px;
  font-weight: 400;
}
.search-result {
  width: 100%;
  height: 19px;
  font-size: 14px;
  color: #333;
  margin: 0 0 10px;
}
.search-allItem {
  display: flex;
  flex-flow: wrap;
}
.search-item {
  width: 264px;
  background: white;
  padding-bottom: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
  transition: all 0.4s;
}
.search-item:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.search-item-image {
  width: 100%;
  height: 195px;
  line-height: 195px;
  text-align: center;
  img {
    width: 195px;
    height: 195px;
  }
}
.search-item-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 26px;
  line-height: 26px;
  text-align: center;
  margin-top: 10px;
  color: #333;
  font-size: 16px;
}
.search-item-price {
  height: 26px;
  line-height: 26px;
  text-align: center;
  color: #a92112;
  font-size: 14px;
}
.search-pagination {
  display: flex;
  text-align: center;
  padding-top: 30px;
}
</style>