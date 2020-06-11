<template>
  <div class="likeBox">
      <h3>喜欢这个歌单的人</h3>
      <ul>
          <li v-for="item in subscribers" :key="item.userId">
                <el-tooltip effect="light" :content="item.nickname" placement="bottom" :open-delay="200">
                             <a :href="'/#/user/home?id='+item.userId"> <img :src="item.avatarUrl" alt=""></a>
                </el-tooltip>
            </li>
      </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      };
    },
    created() {
      
    },
    methods: {
      
    },
    props:['subscribers']
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