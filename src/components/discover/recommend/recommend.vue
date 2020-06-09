<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <div class="reContent">
      <el-card class="leftBox">
        <!-- 热门推荐 -->
        <HotRecommend></HotRecommend>
        <!-- 新碟上架 -->
        <New></New>
        <!-- 榜单 -->
        <List></List>
        <!-- 右侧栏 -->
      </el-card>
      <RightBar></RightBar>
    </div>
  </div>
</template>

<script>
import Carousel from "./carousel";
import HotRecommend from "./hotRecommend";
import List from "./list";
import New from "./new";
import RightBar from "./rightBar";
export default {
  data() {
    return {};
  },
  components: {
    Carousel,
    HotRecommend,
    List,
    New,
    RightBar
  }
};
</script>
<style lang='less' scoped>
.reContent {
  display: flex;
  margin: 0 auto;
  width: 986px;
  .leftBox {
    width: 730px;
  }
}
</style>