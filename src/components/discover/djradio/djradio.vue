<template>
  <div class="djradioBox pageCon">
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
</template>

<script>
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

</style>