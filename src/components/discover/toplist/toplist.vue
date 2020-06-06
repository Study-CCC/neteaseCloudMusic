<template>
  <div class="toplist">
    <el-row >
      <el-col :span="7">
        <LeftBar></LeftBar>
      </el-col>
      <el-col :span="13">
        <RigthBar></RigthBar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from "./leftBar";
import RigthBar from "./rightBar";
export default {
  data() {
    return {};
  },
  components: {
    LeftBar,
    RigthBar
  }
};
</script>
<style lang='less' scoped>
  .toplist{
    width: 1100px;
      margin: 0 auto;
  }
</style>