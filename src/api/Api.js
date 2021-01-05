import request from "../utils/request";
export default function(url, data = {}, method = "GET") {
  return request({
    url,
    data,
    method,
  });
}
