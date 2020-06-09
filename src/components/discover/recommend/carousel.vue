<template>
  <div class="carouselBox">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in dataimg" :key="index">
        <img :src="item.imageUrl" />
      </el-carousel-item>
      <!-- <div class="download">
        <img src="../../../assets/download.png" alt="">
        <el-button type="primary">下载客户端</el-button>
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p></div>-->
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataimg: [
      ]
    };
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/banner");
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data);
      this.dataimg = data.banners
    }
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
      }
    }
  }
}
</style>