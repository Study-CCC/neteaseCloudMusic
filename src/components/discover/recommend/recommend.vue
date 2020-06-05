<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 热门推荐 -->
    <HotRecommend></HotRecommend>
    <!-- 新碟上架 -->
    <New></New>
    <!-- 榜单 -->
    <List></List>
    <!-- 右侧栏 -->
    <RightBar></RightBar>
  </div>
</template>

<script>
import Carousel from './carousel'
import HotRecommend from './hotRecommend'
import List from './list'
import New from './new'
import RightBar from './rightBar'
export default {
  data() {
    return {};
  },
  components:{
    Carousel,
    HotRecommend,
    List,
    New,
    RightBar
  }
};
</script>
<style lang='' scoped>
</style>