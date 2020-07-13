<template>
  <div class="songConBox pageCon">
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

</style>