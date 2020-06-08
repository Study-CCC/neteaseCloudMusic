<template>
  <div class="newBox">
    <div class="newTit">
      <h3>新碟上架</h3>
      <a href="#" class="more">更多</a>
    </div>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 2" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.newBox {
  .newTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 35px;
    .more {
      margin-left: auto;
    }
  }
}
</style>