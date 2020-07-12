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
import { getPlaylist } from "../../../utils/api/playlistApi";
export default {
  data() {
    return {
      playlist: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const id = this.$route.query.id;
      getPlaylist(id)
        .then(res => {
          this.playlist = res.data.playlist;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  watch: {
    $route() {
      this.getData();
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