<template>
  <div class="playlistConBox pageCon">
    <el-row>
      <el-col :span="18">
        <LeftBar v-if="playlist.trackCount" :playlist="playlist" />
      </el-col>
      <el-col :span="5" :offset="1">
        <RightBar v-if="playlist.trackCount" :playlist="playlist" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from "./leftBar";
import RightBar from "./rightBar";
export default {
  data() {
    return {
      playlist:{},
      id:''
    };
  },
  created() {
    this.getData();
  },
  methods: {
  
    async getData() {
      const id = this.$route.query.id;
      // console.log(id)
      const { data, status } = await this.$http.get(
        `/playlist/detail?id=${id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      // this.detail = data.playlist;
      // const { tracks, trackCount, playCount } = data.playlist;
      // this.songList = { tracks, trackCount, playCount };
      this.playlist = data.playlist
    }
  },
  watch: {
    $route(){
      // console.log(123)
      this.getData()
    }
  },
  components: {
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>
</style>