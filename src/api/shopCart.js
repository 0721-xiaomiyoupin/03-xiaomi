import request from "../utils/request"
//发请求
export const reqGetUpdateCart = function (skuId, skuNum) {
  return request({
    method: "POST",
    url: `/shop`,
  })
}