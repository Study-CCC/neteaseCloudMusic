<template>
  <div class="rightBox">
    <div class="rightHeader">
      <div class="rightImg">
        <img src="../../../assets/TEST.jpg" alt />
      </div>
      <div class="headerText">
        <p class="title">云音乐飙升榜</p>
        <p>最近更新：06月05日 （每天更新）</p>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square"></el-button>
        </div>
      </div>
    </div>
    <div class="rightList">
      <div class="listTitle">
        <h3>歌曲列表</h3>
        <span>100首歌</span>
        <span class="play">播放<strong>5253254234325</strong>次</span>
      </div>
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
.rightBox {
  .rightHeader {
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    .rightImg {
      padding: 3px;
      border: 1px solid #ccc;
      height: 150px;
      img {
        width: 150px;
        height: 150px;
      }
    }
    .headerText {
      margin-left: 20px;
      .norBtn {
        margin-right: 20px;
      }
      p {
        font-size: 12px;
      }
      .title {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
      }
    }
  }
  .listTitle{
    display: flex;
    align-items: center;
    margin-left: 20px;
    height: 35px;
    border-bottom: 2px solid #c20c0c;
    .play{
       margin-left:auto;

    }
    h3{
      font-size: 20px;
    line-height: 28px;
    }
    span{
      margin: 9px 0 0 20px;
      color:#666;
      font-size: 12px;
    }
  }
}
</style>