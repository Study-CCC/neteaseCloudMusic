<template>
  <div class="leftBarBox clearFloat">
    <div class="header clearFloat">
      <div class="authImg">
        <img :src="detail.coverImgUrl" alt />
        <span class="msk"></span>
      </div>

      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <h3>{{detail.name}}</h3>
        </div>
        <div class="creatTime">
          <img :src="detail.creator.avatarUrl" alt />
          <p>
            <a href="#">{{detail.creator.nickname}}</a>
            <span>{{Date(detail.creator.createTime)}}创建</span>
          </p>
        </div>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add">({{detail.subscribedCount}})</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened">({{detail.shareCount}})</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download">下载</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square"></el-button>
        </div>
        <div class="desc">
          <div class="tag">
            标签:
            <el-tag v-for="(item,i) in detail.tags" :key="i" size="mini" type="info">
              <a :href="'/#/discover/playlist/?cat='+item+'&order=hot'">{{item}}</a></el-tag>
          </div>
          <div class="descCon">介绍: {{detail.description}}</div>
        </div>
      </div>
    </div>
    <div class="songlist"></div>
    <SongCon :songsList="songList" />
    <div class="seeMore">
      <h3>查看更多内容，请下载客户端</h3>
      <el-button type="danger">立即下载</el-button>
    </div>
    <div class="commendTit">
      <h3>评论</h3>
      <span class="total">
        共
        <strong>{{detail.commentCount}}</strong>条
      </span>
    </div>

    <Comment  />
    <CommentCon :commentCount="detail.commentCount" />
  </div>
</template>

<script>
import Comment from "../../common/comment";
import CommentCon from "../../common/commentCon";
import SongCon from "../../common/songCon";
export default {
  data() {
    return {
      detail: {
        creator: {},
        tags: []
      },
      songList:{
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get(
        "/playlist/detail?id=4986087000"
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.detail = data.playlist;
       const {tracks,trackCount, playCount} = data.playlist
      this.songList = {tracks,trackCount, playCount}
      
    }
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
      img {
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
          background-position: 0 -243px;
          height: 24px;
        }
        h3 {
          font-size: 20px;
          color: #333;
          display: inline-block;
          font-weight: normal;
        }
      }
      .creatTime {
        height: 35px;
        margin-top: 20px;
        img {
          height: 35px;
          vertical-align: middle;
          width: 35px;
        }
        p {
          display: inline-block;
          margin-left: 10px;
          font-size: 12px;
          color: #666;
          span {
            margin-left: 10px;
          }
        }
      }
      .desc {
        color: #666;
        font-size: 12px;
        white-space: pre-line;
        .el-tag {
          border-radius: 50%;
          margin: 15px 5px 15px 0;
          a{
            color:#666
          }
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
  .seeMore {
    text-align: center;
    h3 {
      font-size: 13px;
      color: #333;
      margin: 20px 0;
    }
  }
}
</style>