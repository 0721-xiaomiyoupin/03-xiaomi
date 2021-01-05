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
//删除商品
// let deleteCart = require("./datas/deletecart.json");
// router.delete('/getDeleteCart/{id}', (ctx, next) => {
//   ctx.body = deleteCart
//   console.log(deleteCart, '1111')
// });


app.use(router.routes()).use(router.allowedMethods());

app.listen("3001", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success http://localhost:3001");
  }
});