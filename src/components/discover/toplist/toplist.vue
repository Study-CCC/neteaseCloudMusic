<template>
  <div class="toplist">
    <el-row>
      <el-col :span="5">
        <LeftBar></LeftBar>
      </el-col>
      <el-col class="rightBox" :span="19">
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
.toplist {
  width: 1100px;
  margin: 0 auto;
  border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    .rightBox{
      padding: 20px;
    }
}
</style>