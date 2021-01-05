import request from "../utils/request";
export default function (url, data = {}, method = "GET") {
  // @ts-ignore
  return request({
    url,
    data,
    method,
  });
}