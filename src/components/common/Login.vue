<template>
  <div class="LoginBox">
    <div class="header">登录</div>
    <div class="cnt clearFloat">
      <div class="phone"></div>
      <div class="right">
        <div class="title">扫码登录</div>
        <div class="qrcode">
          <img src="../../assets/TEST.jpg" alt />
        </div>
        <p>
          使用&nbsp;
          <a href="#">网易云音乐APP</a>&nbsp;扫码登录
        </p>
      </div>
      <el-button>选择其他登录模式</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.LoginBox {
  width: 530px;
  height: 372px;
  .header {
      font-weight: bold;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
    color: #fff;
  }
  .cnt {
    .phone {
      background: url("../../assets/qr_guide.png");
      float: left;
      margin-left: 101px;
      width: 125px;
      height: 220px;
    }
    .right {
      float: left;
      margin-left: 25px;
      .title {
          font-size: 18px;
    font-weight: 500;
    text-align: center;
      }
      .qrcode {
        width: 130px;
        height: 130px;
        padding: 4px;
        margin: 13px auto;
      }
      p {
        color: rgba(0, 0, 0, 0.4);
        font-size: 12px;
      }
    }
  }
}
</style>