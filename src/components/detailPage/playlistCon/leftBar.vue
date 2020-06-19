<template>
  <div class="leftBarBox clearFloat">
    <HeaderInfo :detail="detail" />
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
      // const id = this.$route.query.id
      // // console.log(id)
      // const { data, status } = await this.$http.get(
      //   `/playlist/detail?id=${id}`
      // );
      // if (status !== 200) return this.$message.error("数据获取错误");
      // this.detail = data.playlist;
      //  const {tracks,trackCount, playCount} = data.playlist
      // this.songList = {tracks,trackCount, playCount}
      this.detail = this.playlist;
      const { tracks, trackCount, playCount } = this.playlist;
      this.songList = { tracks, trackCount, playCount };
      // console.log(this.detail)
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