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
import LeftBar from './leftBar'
  export default {
    data () {
      return {

      };
    },
  }

</script>
<style lang='less' scoped>
.artistBox{

}
</style>