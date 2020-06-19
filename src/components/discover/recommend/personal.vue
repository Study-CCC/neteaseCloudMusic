<template>
  <div class="personalBox">
    <h3>个性化推荐</h3>
    <ul>
      <li>
        <div class="data boxItm">
          <div class="week">星期五</div>
          <div class="day">19</div>
          <span class="msk"></span>
        </div>
        <p class="tit">每日歌曲推荐</p>
        <p class="con">
          根据你的口味生成，
          每天6:00更新
        </p>
      </li>
      <li></li>
    </ul>
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
.personalBox {
  h3 {
    border-bottom: 2px solid #c20c0c;
  }
  ul {
    display: flex;
    li {
      width: 140px;
      .boxItm {
        width: 140px;
        height: 140px;
      }
      .data {
        position: relative;
        background: url("../../../assets/date.png");
        margin-top: 20px;
        background-position: 0px 0px;
        width: 140px;
        height: 140px;
        .week {
          height: 33px;
          line-height: 33px;
          font-size: 14px;
          color: #fed9d9;
          text-align: center;
        }
        .day {
          line-height: 102px;
          font-size: 94px;
          font-weight: bold;
          color: #202020;
          text-align: center;
        }
        .msk {
          position: absolute;
          top: 33px;
          background: url("../../../assets/date.png");
          width: 140px;
          height: 107px;
          background-position: 0px -150px;
          left: 0;
        }
      }
      .tit {
        font-size: 14px;
        color: #000;
        line-height: 20px;
      }
      .con {
        font-size: 12px;
        color: #999;
        line-height: 20px;
      }
    }
  }
}
</style>