<template>
  <div class="carouselBox">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in dataimg" :key="index">
        <div :style="{backgroundImage:'url('+item.imageUrl+')',color:'red'}" class="indexBanner">
          <a :href="'/#/song?id='+item.targetId">
            <img :src="item.imageUrl" />
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataimg: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/banner");
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data);
      this.dataimg = data.banners;
    }
  }
};
</script>
<style lang='less' scoped>
.carouselBox {
      min-width: 980px;
  height: 285px;
  .el-carousel__item {
    .indexBanner {
      width: 100%;
      background-size: 6000px;
      background-position: center center;
      img {
        margin: 0 auto;
        width: 980px;
        height: 285px;
        display: block;
      }
    }

  }
}
</style>