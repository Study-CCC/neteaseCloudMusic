<template>
  <div class="categoryBox pageCon">
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

</style>