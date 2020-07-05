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
          <p v-if="detail.alia[0]">{{detail.alia[0]}}</p>
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
        <HeaderBtn />
        <div class="lyric" v-if="lyric">
          <div ref="descCon" :class="['userInfo',openFlag?'':'close']">{{lyric}}</div>
          <a href="javascript:void(0)" @click="isOpen">
            {{openFlag?'收起':'展开'}}
            <i :class="openFlag?'closeIcon':'openIcon'"></i>
          </a>
        </div>
        <div v-else class="noLyric">
          暂时没有歌词
          <a href="javascript:void(0)">求歌词</a>
        </div>
      </div>
    </div>
    <CommentCon />
  </div>
</template>

<script>
import Comment from "../../common/comment";
import CommentCon from "../../common/commentCon";
import HeaderBtn from "../../common/headerBtn";
export default {
  data() {
    return {
      transLyric: "",
      lyric: "",
      id: "",
      transUser: "",
      lyricUser: "",
      openFlag: false,
      // openShow: false,
      detail: {
        al: {},
        ar: [{}],
        alia: []
      }
    };
  },
  created() {
    this.getDetail();
    this.getLyric();
  },
  mounted() {
    this.isShow();
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
      if(data.nolyric) return;
      this.transLyric = data.tlyric.lyric;
      this.lyric = data.lrc.lyric;
      this.transUser = data.transUser;
      this.lyricUser = data.lyricUser;
    },
    isOpen() {
      this.openFlag = !this.openFlag;
    },
    isShow() {
      // if (!this.$refs.descCon) return;
        setTimeout(()=>{
          // console.log(this.$refs.descCon.clientHeight);
          console.log(this.$refs.descCon.offsetHeight);
          // console.log(this.$refs)
        },50)
        

      // if (this.$refs.descCon.clientHeight > 318) {
      //   this.openFlag = false;
      //   this.openShow = true;
      //   console.log(111)
      // }
    }
  },
  components: {
    Comment,
    CommentCon,
    HeaderBtn
  },
  watch: {
    $route() {
      this.getDetail();
      this.getLyric();
    }
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
      width: 430px;
      .headerTit {
        i {
          display: inline-block;
          background: url("../../../assets/icon.png");
          width: 54px;
          background-position: 0 -243px;
          height: 24px;
          vertical-align: middle;
        }
        h3 {
          font-size: 20px;
          color: #333;
          display: inline-block;
          font-weight: normal;
          margin-left: 5px;
        }
        p {
          color: #bababa;
          margin-left: 64px;
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
    .lyric {
      margin-top: 20px;
      .userInfo {
        white-space: pre-line;
        font-size: 12px;
        color: #333;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 23px;
      }
      .close {
        height: 318px;
        overflow: hidden;
      }
      a {
        font-size: 12px;
        color: #0c73c2;
      }
      i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: 2px solid #999;
        border-left: 2px solid #999;
      }
      .openIcon {
        transform: rotate(-135deg);
      }
      .closeIcon {
        transform: rotate(45deg);
      }
    }
    .noLyric {
      color: #666;
      margin-top: 20px;
      font-size: 12px;
      a {
        text-decoration: underline;
        color: #666;
      }
    }
  }
}
</style>