<template>
  <div class="artist">
      <el-card>
        <el-row>
          <el-col :span="4">
            <LeftBar></LeftBar>
          </el-col>
          <el-col :span="20">
            <RightBar></RightBar>
          </el-col>
        </el-row>
      </el-card>
  </div>
</template>

<script>
import LeftBar from './leftBar'
import RightBar from './RightBar'
  export default {
    data () {
      return {

      };
    },
    components:{
      LeftBar,
      RightBar
    }
  }

</script>
<style lang='less' scoped>
.artist{
  width: 1100px;
  margin: 0 auto;
}
</style>