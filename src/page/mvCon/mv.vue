<template>
  <div class="mv">
    <el-row>
      <el-col :span="18">
        <LeftBar v-if="flag" :leftData="leftData" class="leftPad" />
      </el-col>
      <el-col :span="6">
        <RightBar v-if="flag" :rightData="rightData" class="rightPad" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from "./leftBar";
import RightBar from "./rightBar";
import { mapActions } from "vuex";
import { getMvInfo } from "../../utils/api/songApi";
export default {
  data() {
    return {
      leftData: {},
      rightData: {},
      flag: false
    };
  },
  methods: {
     getData() {
      const id = this.$route.query.id;
      getMvInfo(id)
        .then(res => {
          const {
            desc,
            playCount,
            publishTime,
            name,
            artistName,
            artistId,
            duration
          } = res.data.data;
          this.rightData = { desc, playCount, publishTime };
          this.leftData = { name, artistName, artistId, duration };
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
      this.flag = true;
    },
    ...mapActions(["isMvPage"])
  },
  created() {
    this.getData();
    this.isMvPage(true);
  },
  watch: {
    $route() {
      this.getData();
    }
  },
  beforeDestroy() {
    this.isMvPage(false);
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
  border: 1px solid #d3d3d3;
  background-color: #fff;
}
</style>