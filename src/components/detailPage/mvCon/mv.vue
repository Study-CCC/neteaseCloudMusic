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
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      leftData: {},
      rightData: {},
      flag:false
    };
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      const { data, status } = await this.$http.get(`/mv/detail?mvid=${id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      const { desc, playCount, publishTime, name, artistName,artistId,duration } = data.data;
      this.rightData = { desc, playCount, publishTime };
      this.leftData = { name, artistName,artistId,duration };
    this.flag = true
    },
    ...mapActions(['isMvPage'])
  },
  created() {
    this.getData();
    this.isMvPage(true)
  },
  watch:{
    $route(){
      this.getData()
    }
  },
  beforeDestroy() {
    this.isMvPage(false)
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