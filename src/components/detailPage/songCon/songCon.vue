<template>
  <div class="songConBox">
      <el-row>
      <el-col :span="19">
        <LeftBar v-if="playlist.trackCount" :playlist="playlist" />
      </el-col>
      <el-col :span="5">
        <RightBar v-if="playlist.trackCount" :playlist="playlist" />
      </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.songConBox {
  padding: 47px 30px 40px 39px;
  width: 1100px;
  margin: 0 auto;
}
</style>