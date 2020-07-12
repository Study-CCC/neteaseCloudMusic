<template>
  <div class="leftBarBox clearFloat">
    <HeaderInfo :detail="detail" :tracks="songList.tracks"/>
    <div class="songlist"></div>
    <SongCon :songsList="songList" />
    <div class="seeMore">
      <h3>查看更多内容，请下载客户端</h3>
      <el-button type="danger">立即下载</el-button>
    </div>
    <CommentCon />
  </div>
</template>

<script>
import Comment from "../../common/comment";
import CommentCon from "../../common/commentCon";
import HeaderInfo from '../../common/headerInfo'
import SongCon from "../../common/songCon";
export default {
  data() {
    return {
      detail: {
        creator: {
          coverImgUrl: "",
          avatarUrl: "1"
        }
      },
      songList: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.detail = this.playlist;
      const { tracks, trackCount, playCount } = this.playlist;
      this.songList = { tracks, trackCount, playCount };
    }
  },

  components: {
    Comment,
    CommentCon,
    SongCon,
    HeaderInfo
  },
  watch: {
    playlist(){
      this.getData()
    }
  },
  props: ["playlist"]
};
</script>
<style lang='less' scoped>
.leftBarBox {
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