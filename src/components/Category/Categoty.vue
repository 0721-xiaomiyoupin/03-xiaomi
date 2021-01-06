<template>
  <div>
    <div class="Category">
      <ul style="z-index: 100">
        <li v-for="c1 in Category1" :key="c1.index">
          {{ c1[0].name }} / {{ c1[1].name }}
          <div class="Categoty1">
            <h2>{{ c1[0].name }}</h2>
            <div class="Categoty2" v-for="c2 in Category2" :key="c2.index">
              <h3>{{ c2.name }}</h3>
              <div class="Categoty3">
                <span v-for="c3 in c2.children" :key="c3.index">
                  {{ c3.smallImgCard && c3.smallImgCard.name }}
                </span>
              </div>
            </div>
            <h2>{{ c1[1].name }}</h2>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../../api/Api";
export default {
  name: "Category",
  data() {
    return {
      Category1: [],
      Category2: [],
      Category3: [],
    };
  },

  async mounted() {
    const result = await api("/product/categoryList");
    console.log(result);
    this.Category1 = result;

    const result2 = await api(
      "/product/cateDetailList?id=5d3a9a6c9bbe31fc2aa3958e"
    );
    console.log(result2);
    this.Category2 = result2.children;
  },
};
</script>

<style lang="less" scoped>
ul {
  background-color: rgb(159, 128, 82);
  width: 220px;
  height: 360px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  li {
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    flex-grow: 1;
    line-height: 36px;
    .Categoty1 {
      display: none;
      position: absolute;
      left: 220px;
      top: 0;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 860px;
      padding: 5px 20px;
      box-sizing: border-box;
      text-align: left;
      h2 {
        color: rgb(159, 128, 82);
      }
      .Categoty2 {
        display: flex;
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
        // border: 1px solid black;
        h3 {
          margin-right: 20px;
        }
        .Categoty3 {
          display: flex;
          border-bottom: 1px solid #ccc;
          font-size: 12px;
          flex-wrap: wrap;
          span {
            flex-grow: 1;
            margin: 0 5px;
          }
        }
      }
    }

    &:hover {
      background-color: #ccc;
      .Categoty1 {
        display: block;
      }
    }
  }
}
</style>