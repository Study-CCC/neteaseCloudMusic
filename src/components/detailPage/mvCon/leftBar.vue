<template>
  <div class="leftBar">
    <div class="mvplay">
      <p>
        <i></i>
        <span>{{leftData.name}}</span>
        <a :href="'/#/artist?id='+leftData.artistId">{{leftData.artistName}}</a>
      </p>
      <div class="mv">
        <Video v-if="flag" :videoData="videoData" />
      </div>
      <div class="mvBtn">
        <el-button>{{countData.likedCount}}</el-button>
        <el-button>{{countData.shareCount}}</el-button>
        <el-button>{{countData.commentCount}}</el-button>
      </div>
    </div>
    <CommentCon />
  </div>
</template>
<script>
import CommentCon from "../../common/commentCon";
import Video from "./video";
import { getSongMv, getMv } from "../../../utils/api/songApi";
export default {
  data() {
    return {
      countData: {},
      videoData: {},
      flag: false,
      id: ""
    };
  },
  created() {
    this.getData();
    this.getMvUrl();
  },
  methods: {
    getData() {
      this.id = this.$route.query.id;
      getMv(getSongMv, id)
        .then(res => {
          this.countData = res.data;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    getMvUrl() {
      this.flag = false;
      getSongMv(this.id)
        .then(res => {
          this.videoData.mvUrl = res.data.data.url;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
      this.videoData.duration = this.leftData.duration;
      this.flag = true;
    }
  },
  components: {
    CommentCon,
    Video
  },
  props: ["leftData"],
  watch: {
    $route() {
      this.getData();
      this.getMvUrl();
    }
  }
};
</script>
<style lang='less' scoped>
.leftBar {
  .mvplay {
    p {
      i {
        margin: 7px 5px auto auto;
        width: 29px;
        height: 18px;
        background: url("../../../assets/icon2.png");
        background-position: -230px -480px;
        display: inline-block;
      }
      span {
        font-size: 24px;
        color: #333;
      }
      a {
        color: #0c73c2;
        font-size: 12px;
      }
    }
  }
}
</style>