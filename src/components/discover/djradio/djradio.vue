<template>
  <div class="djradioBox">
    <TopBar />
    <el-row>
      <el-col :span="11">
        <LeftBar />
      </el-col>
      <el-col :span="11" :offset="2">
        <RightBar />
      </el-col>
    </el-row>
    <ContentBar />
  </div>
  <!-- <PlaylistCon></PlaylistCon> -->
</template>

<script>
// 测试
// import PlaylistCon from '../../detailPage/playlistCon/playlistCon'
import TopBar from "./topBar";
import ContentBar from "./contentBar";
import LeftBar from "./leftBar";
import RightBar from "./rightBar";
export default {
  data() {
    return {};
  },

  components: {
    TopBar,
    ContentBar,
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>
.djradioBox {
  width: 900px;
  margin: 0 auto;
  padding: 40px;
}
</style>