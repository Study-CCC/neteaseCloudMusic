<template>
  <div class="noFindBox">
      <i></i>
      很抱歉，未能找到相关搜索结果！
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
<style lang='less' scoped>
.noFindBox{
    margin-top: 105px;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    i{
        margin-right: 17px;
        width: 64px;
    height: 50px;
    background: url('../../assets/icon.png');
    background-position: 0px -347px;
    }
}
</style>