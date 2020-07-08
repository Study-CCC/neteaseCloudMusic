<template>
  <div class="songConBox">
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
    return {

    };
  },
  created() {},
  methods: {
  },
  components: {
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>
.songConBox {
  padding: 47px 30px 40px 39px;
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
    background-color: #fff;
}
</style>