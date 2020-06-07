<template>
  <div class="defaultBox">
    <div class="headSinger">
      <h3>入驻歌手</h3>
      <a href="#" class="more">更多</a>
    </div>
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
.defaultBox {
    padding: 40px;
  .headSinger {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #c20c0c;
      .more{
          margin-left:auto ;
      }
  }
}
</style>