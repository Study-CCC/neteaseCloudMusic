<template>
  <div class="listBox">
    <div class="listTit">
      <h3>榜单</h3>
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
.listBox {
  .listTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;

    .more {
      margin-left: auto;
    }
  }
}
</style>