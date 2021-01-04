<template>
  <div>
    分类

    <div class="Category">
      <ul>
        <li>
          一级分类 / 一级分类
          <div class="Categoty1">
            <h2>一级分类</h2>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <h2>一级分类</h2>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
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
        <li>
          一级分类 / 一级分类
          <div class="Categoty1">
            <h2>一级分类</h2>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <h2>一级分类</h2>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
            <div class="Categoty2">
              <h3>二级分类</h3>
              <div class="Categoty3">
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
                <span>三级分类</span>
              </div>
            </div>
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
export default {
  name: 'Category',
}
</script>

<style lang="less" scoped>
.Category {
  width: 1080px;
  margin: 0 auto;
  border: 1px solid black;
}
ul {
  background-color: skyblue;
  width: 220px;
  height: 360px;
  box-sizing: border-box;
  li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    position: relative;
    .Categoty1 {
      display: none;
      position: absolute;
      left: 220px;
      top: 0;
      background-color: hotpink;
      width: 860px;
      padding: 5px 20px;
      box-sizing: border-box;
      text-align: left;
      .Categoty2 {
        display: flex;
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
        border: 1px solid black;
        h3 {
          margin-right: 20px;
        }
        .Categoty3 {
          display: flex;
          border: 1px solid blue;
          span {
            flex-grow: 1;
            margin: 0 10px;
          }
        }
      }
    }

    &:hover {
      .Categoty1 {
        display: block;
      }
    }
  }
}
</style>