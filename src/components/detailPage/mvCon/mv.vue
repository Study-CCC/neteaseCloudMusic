<template>
  <div class="mv">
    <el-row>
      <el-col :span="18">
        <LeftBar :leftData="leftData" class="leftPad" />
      </el-col>
      <el-col :span="6">
        <RightBar :rightData="rightData" class="rightPad" />
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
      leftData: {},
      rightData: {}
    };
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      const { data, status } = await this.$http.get(`/mv/detail?mvid=${id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      const { desc, playCount, publishTime, name, artistName,artistId } = data.data;
      this.rightData = { desc, playCount, publishTime };
      this.leftData = { name, artistName,artistId };
    }
  },
  created() {
    this.getData();
  },
  components: {
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>
.mv {
  width: 980px;
  margin: 0 auto;
}
</style>