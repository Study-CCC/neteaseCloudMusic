<template>
  <div class="tasteBox">
    <el-row>
      <el-col :span="18">
        <div class="leftBox">
          <div class="leftebg">
            <div class="data">
              <div class="week">星期五</div>
              <div class="day">{{date.day}}</div>
              <span class="msk"></span>
            </div>
          </div>
          <div class="leftBtn">
            <el-button-group class="norBtn">
              <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
              <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
            </el-button-group>
            <el-button class="norBtn" size="mini" icon="el-icon-folder-add">收藏全部</el-button>
          </div>
          <div class="leftList">
            <SongCon v-if="songsList.tracks" :songsList="songsList" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="rightBox">
          <div class="personalInfo">
            <h2>
              <i></i>个性化推荐如何工作
            </h2>
            <div class="textInfo">
              <span>
                <p>
                  它聪明、熟悉每个用户的喜好，从海量音乐中挑选出你可能喜欢的音乐。
                  它通过你每一次操作来记录你的口味
                </p>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p>你提供给云音乐的信息越多，它就越了解你的音乐喜好。</p>
              </span>
            </div>
          </div>
          <MoreDown />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SongCon from "../../common/songCon";
import MoreDown from "../../common/moreDown";
export default {
  data() {
    return {
      songsList: { tracks: "", trackCount: "" },
      date:{}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get(
        "/recommend/songs?cookie=MUSIC_U=ffbcce5163f478a4a617025f289da15b585a7fdf08c89a2a3ea5c8d8481921b09cb4377b2d7ba249; Expires=Sat, 04-Jul-2020 06:57:07 GMT; Path=/;__remember_me=true; Expires=Sat, 04-Jul-2020 06:57:07 GMT; Path=/;__csrf=b2407d4efcaf1744492c5fc48a4385a5; Expires=Sat, 04-Jul-2020 06:57:17 GMT; Path=/"
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.songsList.tracks = data.data.dailySongs;
      this.songsList.trackCount = data.data.dailySongs.length;
      this.songsList.taste = true;
      this.songsList.width = 200;
      let nowDate = new Date()
      this.date.week = nowDate.getDay()
      this.date.day = nowDate.getDate()
    }
  },
  components: {
    SongCon,
    MoreDown
  }
};
</script>
<style lang='less' scoped>
.tasteBox {
  width: 943px;
  margin: 0 auto;
  .leftBox {
    padding: 47px 30px 40px 39px;
    width: 640px;
    .leftebg {
      width: 640px;
      height: 179px;
      padding-top: 1px;
      background: url("../../../assets/recmd_daily.jpg");
      .data {
        width: 114px;
        height: 114px;
        margin: 34px 0 0 54px;
        position: relative;
        background: url("../../../assets/date.png");
        background-position: 0 -270px;
        .week {
          height: 26px;
          line-height: 26px;
          font-size: 12px;
          color: #fed9d9;
          text-align: center;
        }
        .day {
          font-size: 74px;
          line-height: 80px;
          font-weight: bold;
          color: #202020;
          text-align: center;
        }
        .msk {
          position: absolute;
          top: 26px;
          background: url("../../../assets/date.png");
          background-position: 0 -400px;
          left: 0;
          width: 142px;
          height: 86px;
        }
      }
    }
    .leftBtn {
      margin-top: 30px;
      .norBtn {
        margin-right: 10px;
      }
    }
  }
  .rightBox {
    padding: 20px 5px 0 10px;
    .personalInfo{
      width: 270px;
      i{
        width: 22px;
    height: 22px;
    display: inline-block;
    vertical-align: middle;
    background: url('../../../assets/icon2.png');
    background-position: 0 0;
    margin-right: 10px;
}
      h2{
        height: 22px;
        font-size: 18px;
        font-weight: normal;
        line-height: 22px;
        padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
      }
      span{
        p{
          font-size: 12px;
          line-height: 19px;
          color:#666;
          margin: 1em 0;
          width: 200px;
        }
      }
    }
  }
}
</style>