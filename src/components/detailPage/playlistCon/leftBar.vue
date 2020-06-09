<template>
  <div class="leftBarBox clearFloat">
    <div class="header clearFloat">
      <img class="authImg" src="../../../assets/TEST.jpg" alt />
      <div class="introduce">
        <div class="headerTit">
          <el-tag type="danger"></el-tag>
          <h3>[华语速爆新歌] 最新华语音乐推荐</h3>
        </div>
        <div class="creatTime">
          <a>
            <img src="../../../assets/TEST.jpg" alt />
          </a>
          <a href="#">网易云音乐</a>
          <i></i>
          <span>2017-09-19 创建</span>
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
        <div class="tag">
          标签:
          <el-tag>华语</el-tag>
        </div>
        <p class="desc">
          介绍： 优质华语新歌，网易云音乐每周二精选推荐。
          本周封面：李荣浩
        </p>
      </div>
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
      width: 208px;
      height: 208px;
      float: left;
    }
    .introduce {
      float: left;
      .headerTit {
      }
      .creatTime {
        // float: left;
        img {
          width: 35px;
          height: 35px;
        }
      }
    }
    .headerBtn {
      float: left;
      .norBtn {
        margin-right: 20px;
      }
    }
    .tag{
      float: left;
    }
    .desc{
      font-size: 12px;
      color:#666;
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