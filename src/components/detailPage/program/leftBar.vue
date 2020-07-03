<template>
  <div class="leftBarBox">
    <div class="clearFloat">
      <div class="headImg">
        <img :src="program.coverUrl" alt />
        <span class="msk"></span>
      </div>
      <div class="headInfo">
        <h3>
          <i></i>
          <div>{{program.name}}</div>
        </h3>
        <div class="headName">
          <i></i>
          <a :href="'/#/djradio?id='+program.radio.id">{{program.radio.name}}</a>
          <el-button class="el-icon-star-off">订阅({{program.radio.subCount}})</el-button>
        </div>
      </div>
    </div>
    <div class="btnGroup">
      <el-button class="el-icon-video-play" type="primary">播放{{program.duration}}</el-button>
      <el-button class="el-icon-star-off">
        <span v-if="program.likedCount">({{program.likedCount}})</span>
      </el-button>
      <el-button class="el-icon-chat-line-square">
        <span v-if="program.commentCount">({{program.commentCount}})</span>
      </el-button>
      <el-button class="el-icon-folder-opened">
        <span v-if="program.shareCount">({{program.shareCount}})</span>
      </el-button>
      <el-button class="el-icon-download">下载</el-button>
    </div>
    <div class="desc">
      <div class="programInfo">
        <el-button click="cliCate">{{program.radio.category}}</el-button>
        <span class="name">{{program.dj.brand}}  第{{program.serialNum}}期</span>
        <span class="time">{{program.createTime}}</span>
        <span class="play">播放: <span class="count">{{program.listenerCount}}</span>次</span>
      </div>
      <div class="descCon">
          介绍:  {{program.description}}
      </div>
    </div>
    <CommentCon />
  </div>
</template>

<script>
import CommentCon from '../../common/commentCon'
export default {
  data() {
    return {
      program: {
          radio:{},
          dj:{}
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      const { data, status } = await this.$http.get(
        `/dj/program/detail?id=${id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.program = data.program;
    },
    cliCate() {
      this.$router.push(`/discover/djradio/category?id=${program.radio.categoryId}`);
    }
  },
  components:{
      CommentCon
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  padding: 47px 30px 40px 39px;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  .headImg {
    float: left;
    width: 140px;
    height: 140px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .msk {
      width: 148px;
      height: 148px;
      position: absolute;
      background: url("../../../assets/coverall.png");
      background-position: 0 -1285px;
      top: -4px;
      left: -4px;
    }
  }
  .headInfo {
    margin-left: 20px;
    width: 410px;
    float: left;
    h3 {
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
      color: #333;
      i {
        background: url("../../../assets/icon2.png");
        display: inline-block;
        width: 73px;
        height: 24px;
        background-position: 0 -75px;
        vertical-align: top;
      }
      div {
        display: inline-block;
        margin-left: 10px;
        width: 305px;
      }
    }
  }
  .headName {
    line-height: 26px;
    margin-top: 20px;
    i {
      width: 16px;
      height: 17px;
      display: inline-block;
      background: url("../../../assets/icon2.png");
      background-position: -50px -20px;
    }
    a {
      height: 16px;
      color: #666;
      margin: 0 20px;
    }
    .el-button {
      height: 28px;
      padding: 0 10px;
    }
  }
  .desc {
    .programInfo {
        margin-top: 40px;
      .el-button {
        color: #cc0000;
        border-color: #cc0000;
        font-size: 12px;
        height: 16px;
        width: 60px;
        padding: 0;
        border-radius: 0;
        margin-right: 10px;
      }
      .name{
          font-size: 14px;
          color:#333;
          font-weight: bold;
      }
      .time,.play{
          font-size: 12px;
          color:#999;
      }
      .count{
          color:#C20C0C;
      }
    }
    .descCon{
        font-size: 12px;
        color:#666;
        white-space: pre-wrap;
        line-height: 20px;
    }
  }
  .btnGroup {
    margin-top: 20px;
    .el-button {
      height: 31px;
      padding: 0 10px;
    }
  }
}
</style>