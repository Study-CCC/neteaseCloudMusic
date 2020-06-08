<template>
  <div class="topBarBox">
      <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      };
    },
  }

</script>
<style lang='' scoped>

</style>