<template>
  <div  class="djradioBox pageCon">
      <el-row>
          <el-col :span="19"> <LeftBar /></el-col>
          <el-col :span="5"><RightBar /></el-col>
      </el-row>
  </div>
</template>

<script>
import LeftBar from './leftBar'
import RightBar from './rightBar'
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


</style>