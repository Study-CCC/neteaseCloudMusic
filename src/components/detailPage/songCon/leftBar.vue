<template>
  <div class="leftBarBox">
    <div class="header clearFloat">
      <div class="authImg">
        <img :src="detail.al.picUrl" alt />
        <span class="msk"></span>
      </div>

      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <h3>{{detail.name}}</h3>
        </div>
        <div class="creatTime">
          <p>
            歌手:
            <a :href="'/#/artist?id='+detail.ar[0].id">{{detail.ar[0].name}}</a>
          </p>
          <p>
            所属专辑:
            <a :href="'/#/album?id='+detail.al.id">{{detail.al.name}}</a>
          </p>
        </div>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add">收藏</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened">分享</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download">下载</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square">
            <span>()</span>
          </el-button>
        </div>
        <div class="lyric" v-if="lyric">
          <div class="userInfo">
            <span>
              贡献歌词:
              <a :href="'/#/user/home?id='+lyricUser.id">{{lyricUser.nickname}}</a>
            </span>
            <span>
              贡献翻译:
              <a :href="'/#/user/home?id='+transUser.id">{{transUser.nickname}}</a>
            </span>
          </div>
        </div>
        <div v-else class="noLyric">
          暂时没有歌词
          <a href="#">求歌词</a>
        </div>
      </div>
    </div>

    <CommentCon />
  </div>
</template>

<script>
import Comment from "../../common/comment";
import CommentCon from "../../common/commentCon";

export default {
  data() {
    return {
      transLyric: "",
      lyric: "",
      id: "",
      transUser: "",
      lyricUser: "",
      detail: {
        al: {},
        ar: [{}]
      }
    };
  },
  created() {
    this.getLyric(), this.getDetail();
  },
  methods: {
    async getDetail() {
      this.id = this.$route.query.id;
      const { data, status } = await this.$http.get(
        `/song/detail?ids=${this.id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.detail = data.songs[0];
    //   console.log(this.detail);
    },
    async getLyric() {
      const { data, status } = await this.$http.get(`/lyric?id=${this.id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      this.transLyric = data.tlyric.lyric;
      this.lyric = data.lrc.lyric;
      this.transUser = data.transUser;
      this.lyricUser = data.lyricUser;
    }
  },
  components: {
    Comment,
    CommentCon
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  .header {
    .authImg {
      width: 130px;
      height: 130px;
      margin: 34px;
      float: left;
      position: relative;
      img {
        height: 100%;
        width: 100%;
      }
      .msk {
        width: 206px;
        height: 205px;
        background: url("../../../assets/coverall.png") no-repeat;
        position: absolute;
        top: -38px;
        left: -39px;
        background-position: -140px -580px;
      }
    }

    .introduce {
      float: left;
      margin-left: 50px;
      width: 530px;
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

        p {
          margin-left: 10px;
          font-size: 12px;
          color: #666;
          a {
            margin-left: 10px;
            color: #0c73c2;
            &:hover {
              text-decoration: underline;
            }
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
   
    .noLyric {
      color: #666;
      margin: 20px;
      font-size: 12px;
      a {
        text-decoration: underline;
        color: #666;
      }
    }
  }
}
</style>