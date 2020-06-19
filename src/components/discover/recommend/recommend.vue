<template>
  <div>
    <!-- 轮播图 -->
    <Carousel />
    <div class="reContent">
      <el-card class="leftBox">
        <!-- 热门推荐 -->
        <HotRecommend />
        <!-- 个性化 -->
        <Personal />
        <!-- 新碟上架 -->
        <New />
        <!-- 榜单 -->
        <List />
        <!-- 右侧栏 -->
      </el-card>
      <RightBar />
    </div>
  </div>
</template>

<script>
import Carousel from "./carousel";
import HotRecommend from "./hotRecommend";
import List from "./list";
import New from "./new";
import RightBar from "./rightBar";
import Personal from './personal'
export default {
  data() {
    return {};
  },
  components: {
    Carousel,
    HotRecommend,
    List,
    New,
    RightBar,
    Personal
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