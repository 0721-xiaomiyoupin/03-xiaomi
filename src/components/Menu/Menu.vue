<template>
  <div>
    <ul class="menu">
      <li>
        <span class="iconfont icon-kefu"></span>
        <p>联系客服</p>
        <div class="Hiddenbox">
          <p>
            小米有品平台问题，建议反馈，商户和物流问题投诉等请拨打
            小米有品客服热线
          </p>
          <p class="phone">400-100-1199</p>
          <p class="time">(周一至周日8:00-18:00)</p>
          <p>
            小米/米家自营品牌，手机电视智能硬件商品或订单发货/退款售后问题请拨打小米自营客服热线
          </p>
          <p class="phone">400-100-5678</p>
          <p class="time">(周一至周日8:00-18:00)</p>
        </div>
      </li>
      <li>
        <span class="iconfont icon-qrcode1"></span>
        <p>下载APP</p>
        <div class="download">
          <img src="../../assets/images/1.jpg" alt="" />
          <p>这是一个二维码</p>
        </div>
      </li>
      <li>
        <span class="iconfont icon-liwu"></span>
        <p>新人有礼</p>
        <div class="gift">
          <img src="../../assets/images/1.jpg" alt="" />
          <img src="../../assets/images/1.jpg" alt="" />
          <p>这是两个二维码</p>
        </div>
      </li>
      <li>
        <span class="iconfont icon-weixin"></span>
        <p>关注微信</p>
        <div class="wechatQrcode">
          <img src="../../assets/images/1.jpg" alt="" />
          <p>这是一个二维码</p>
        </div>
      </li>
      <li style="border: none">
        <span class="iconfont icon-huojian"></span>
        <p>回到顶部</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style lang="less" scoped>
.menu {
  height: 360px;
  width: 80px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);

  /* border: 1px solid black; */
  background-color: #fff;

  position: fixed;
  top: 20%;
  right: 20px;

  text-align: center;

  li {
    flex-grow: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    .iconfont {
      font-size: 22px;
    }
    p {
      margin-top: 3px;
    }
    .Hiddenbox {
      width: 230px;
      padding: 10px 10px;
      left: -260px;
      position: absolute;
      display: none;
      top: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      .phone {
        font-size: 20px;
        color: chocolate;
      }
      .time {
        font-size: 12px;
        color: #ccc;
      }
    }
    .download {
      position: absolute;
      left: -150px;
      top: 80px;
      display: none;
      text-align: center;
      width: 140px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      padding: 5px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .gift {
      position: absolute;
      left: -230px;
      top: 150px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 5px;
      display: none;
      img {
        width: 100px;
        height: 100px;
        margin: 5px;
        &:nth-child(1) {
          width: 200px;
          height: 100px;
        }
      }
    }
    .wechatQrcode {
      position: absolute;
      left: -150px;
      top: 220px;
      display: none;
      text-align: center;
      width: 140px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      padding: 5px;
      img {
        width: 100px;
        height: 100px;
      }
    }

    &:hover {
      color: rgb(24, 9, 4);
      .Hiddenbox {
        display: block;
        color: black;
      }
      .download {
        display: block;
        color: black;
      }
      .gift {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
      }
      .wechatQrcode {
        display: block;
        color: black;
      }
    }
  }
}
</style>