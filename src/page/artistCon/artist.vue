<template>
  <div class="artistBox pageCon">
    <el-row>
      <el-col :span="18">
        <LeftBar class="leftPad" />
      </el-col>
      <el-col :span="6">
        <RightBar class="rightPad" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from "./leftBar";
import RightBar from "./rightBar";
export default {
  data() {
    return {};
  },
  components: {
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>
</style>