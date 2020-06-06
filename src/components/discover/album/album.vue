<template>
  <div class="albumBox">
    <el-card>
      <div class="hotAlb">
        <div class="hotTit">
          <h3>热门新碟</h3>
        </div>
      </div>
      <div class="AllAlb">
        <div class="AllTit">
          <h3>全部新碟</h3>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
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
.albumBox {
  width: 1100px;
  margin: 0 auto;
  padding: 40px;
  .hotTit,
  .AllTit {
    border-bottom: 2px solid #c20c0c;
  }
}
</style>