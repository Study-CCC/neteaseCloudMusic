<template>
  <div class="categoryBox">
    <TopBar />
    <Category />
  </div>
</template>

<script>
import Category from "../../discover/djradio/category";
import TopBar from "../../discover/djradio/topBar";
export default {
  data() {
    return {};
  },
  components: {
    Category,
    TopBar
  }
};
</script>
<style lang='less' scoped>
.categoryBox {
  width: 900px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #d3d3d3;
    background-color: #fff;
}
</style>