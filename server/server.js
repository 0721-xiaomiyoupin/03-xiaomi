const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
//获取购物车数据
let shopcart = require("./datas/shopcart.json");
router.get("/getShopCart", (ctx, next) => {
  console.log(shopcart, '/getShopCart')
  ctx.body = { code: 200, data: shopcart };
});

//添加数量
let addcart = require("./datas/addcart.json")
router.get("/getAddCart", function (ctx, next) {
  //1.获取传递过来的id
  let {
    id,
    count
  } = ctx.query
  console.log("getAddCart", id, count)
  //2.通过id查找对应的商品
  // @ts-ignore
  let cart = addcart.find((cart) => {
    return cart.id = id * 1
  })
  //3.将商品id返回
  ctx.body = cart
})


app.use(router.routes()).use(router.allowedMethods());

app.listen("3001", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success http://localhost:3001");
  }
});