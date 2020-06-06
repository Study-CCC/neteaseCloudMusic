<template>
  <div class="carouselBox">
    <el-carousel :interval="5000" arrow="always">
     
      <el-carousel-item v-for="(item,index) in dataimg" :key="index">
        <img :src="item.src" />
      </el-carousel-item>
       <!-- <div class="download">
        <img src="../../../assets/download.png" alt="">
        <el-button type="primary">下载客户端</el-button>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p></div>  -->
    </el-carousel>
       </div>
</template>
<script>
export default {
  data() {
    return {
      dataimg: [
        { src: require("../../../assets/109951165038927533.jpg") },
        { src: require("../../../assets/109951165039439602.jpg") },
        { src: require("../../../assets/109951165039822495.jpg") },
        { src: require("../../../assets/109951165039826320.jpg") },
        { src: require("../../../assets/109951165039833145.jpg") },
        { src: require("../../../assets/109951165039987799.jpg") },
        { src: require("../../../assets/109951165039992796.jpg") },
        { src: require("../../../assets/109951165040441944.jpg") },
        { src: require("../../../assets/109951165040444187.jpg") }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.carouselBox {
  height: 285px;
 
  .el-carousel__item {
    img {
      margin: 0 auto;
      width: 730px;
      height: 285px;
      display: block;
  }
  .download {
    z-index: 20;
    width: 254px;
    height: 285px;
    p {
      margin: 10px auto;
      text-align: center;
      color: #8d8d8d;
      font-size: 12px;
    
  }}}
}
</style>