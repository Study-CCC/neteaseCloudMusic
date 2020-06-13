<template>
  <div class="artistBox">
    <el-row>
      <el-col :span="19">
        <LeftBar />
      </el-col>
      <el-col :span="5">
        <RightBar />
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
.artistBox {
  padding: 47px 30px 40px 39px;
  width: 1100px;
  margin: 0 auto;
}
</style>