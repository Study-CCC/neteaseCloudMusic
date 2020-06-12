<template>
  <div class="leftBarBox clearFloat">
    <div class="header clearFloat">
      <div class="authImg">
        <img src="../../../assets/TEST.jpg" alt />
        <span class="msk"></span>
      </div>

      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <h3>[华语速爆新歌] 最新华语音乐推荐</h3>
        </div>
        <div class="creatTime">
          <p>
            歌手:
            <a href="#">颜人中</a>
          </p>
          <p>发行时间:2020-05-23</p>
          <p>发行公司： 智慧大狗 × 网易云音乐</p>
        </div>
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
    <div class="desc">
          <h3>专辑介绍</h3>
          <p>Track 03《遇到》</p>
        </div>
    <div class="songlist"></div>
    <SongCon />
    <div class="commendTit">
      <h3>评论</h3>
      <span class="total">
        共
        <strong>5253254234325</strong>条
      </span>
    </div>
    <Comment />
    <CommentCon />
    <SongCon />
  </div>
</template>

<script>
import Comment from "../../common/comment";
import CommentCon from "../../common/commentCon";
import SongCon from "../../common/songCon";
export default {
  data() {
    return {};
  },
  components: {
    Comment,
    CommentCon,
    SongCon
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  .header {
    .authImg {
      width: 177px;
      height: 177px;
      float: left;
      position: relative;
      img{
        height: 100%;
        width: 100%;
      }
      .msk {
        width: 209px;
        height: 177px;
        background: url("../../../assets/coverall.png");
        background-position: 0 -986px;
        top: 0;
        left: 0;
        position: absolute;
      }
    }

    .introduce {
      float: left;
      margin-left: 50px;
      .headerTit {
        i {
          display: inline-block;
          background: url("../../../assets/icon.png");
          width: 54px;
          height: 24px;
          background-position: 0 -186px;
        }
        h3 {
          font-size: 30px;
          color:#333;
          display: inline-block;
        }
      }
      .creatTime {
        p{
          font-size: 12px;
          color: #666;
         line-height: 24px;
        }
      }
    }
    .headerBtn {
      margin-top: 20px;
      .norBtn {
        margin-right: 10px;
      }
    }
  
  }
  .desc{
    margin-top: 20px;
    h3{
      font-size: 12px;
      color:#333;
    }
    p{
      font-size: 12px;
      color: #666;
      line-height: 24px;
    }
    }
  .commendTit {
    height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
    .total {
      color: #666;
      font-size: 12px;
    }
  }
}
</style>