<template>
  <div class="moreDownBox">
    <h3>网易云音乐多端下载</h3>
    <ul>
      <li>
        <a href="#" class="ios"></a>
      </li>
      <li>
        <a href="#" class="pc"></a>
      </li>
      <li>
        <a href="#" class="android"></a>
      </li>
    </ul>
    <p>同步歌单，随时畅听320k好音乐</p>
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
.moreDownBox {
  margin-top: 20px;
  h3 {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
  }
  ul {
    display: flex;
    a {
      display: block;
      background: url("../../assets/TEST.jpg");
      height: 48px;
      width: 42px;
    }
    .ios {
    }
    .pc {
      width: 60px;
      margin: 0 26px 0 30px;
    }
    .android {
    }
  }
  p{
      font-size: 12px;
      color:#999;
  }
}
</style>