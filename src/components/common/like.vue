<template>
  <div class="likeBox">
      <h3>喜欢这个歌单的人</h3>
      <ul>
          <li v-for="item in 8" :key="item"><img src="../../assets/TEST.jpg" alt=""></li>
      </ul>
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
.likeBox{
    h3{
        height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
    }
    ul{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        li{
            img{
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
        }
    }
}
</style>