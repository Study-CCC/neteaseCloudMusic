<template>
  <div>
    <el-row :gutter="16">
      <el-col :span="4" :offset="4">
        <LeftBar></LeftBar>
      </el-col>
      <el-col :span="12">
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
<style lang='' scoped>
</style>