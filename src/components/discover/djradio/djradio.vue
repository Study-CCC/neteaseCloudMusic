<template>
  <div class="djradioBox">
   <TopBar />
   <el-row>
     <el-col :span='10'>
       <LeftBar />
     </el-col>
     <el-col :span='10' :offset="2">
       <RightBar />
     </el-col>
   </el-row>
   <ContentBar />
  </div>
</template>

<script>
import TopBar from './topBar'
import ContentBar from './contentBar'
import LeftBar from './leftBar'
import RightBar from './rightBar'
export default {
  data() {
    return {};
  },
  components:{
    TopBar,
    ContentBar,
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>
.djradioBox{
   width: 1100px;
  margin: 0 auto;
  padding: 40px;
}
</style>