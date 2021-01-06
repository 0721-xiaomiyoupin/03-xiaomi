<template>
  <div>
    <div class="footer">
      <div class="footerBox">
        <img src="../../assets/images/footer2.png" alt="" />
        <div class="footerText">
          <p>
            ©xiaomiyoupin.com 苏B2-20180351 苏ICP备18025642号-1 logo苏公网安备
            32010502010244号
          </p>
          <p>
            企业名称：有品信息科技有限公司 关于我们 入驻有品 知识产权侵权投诉
          </p>
          <p>小米有品平台运营主体变更公告</p>
          <p>南京市建邺区白龙江东街8号3栋9层</p>
        </div>
        <img src="../../assets/images/footer1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="less">
.footer {
  width: 100%;
  height: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .footerBox {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    img {
      height: 40px;
    }
  }
}
</style>