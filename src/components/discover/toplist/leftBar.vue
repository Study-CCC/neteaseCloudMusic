<template>
  <div class="leftBox">
    <h2 class="title">云音乐特色榜</h2>
    <ul>
      <li v-for="(item,i) in list" :key="i">
        <a :href="'/#/discover/toplist?id='+item.id">
          <div  :class="['itemBox',item.id==id?'visited':'']">
            <img :src="item.coverImgUrl" alt />
            <div class="itemText">
              <p>{{item.name}}</p>
              <p style="color:#999">{{item.updateFrequency}}</p>
            </div>
          </div>
        </a>
        <h2 v-if="i==3" class="title">全球媒体榜</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      id:0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/toplist");
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data)
      this.list = data.list;
    }
  },
  watch: {
    $route(){
      this.id = this.$route.query.id
    }
  },
};
</script>
<style lang='less' scoped>
.leftBox {
  width: 243px;
  .visited{
     background-color: #f4f2f2;
  }
  a:hover{
    text-decoration: none;
  }

  .title {
    font-size: 14px;
    margin-top: 25px;
    color: #000;
    margin-left: 10px;
  }
  .itemBox {
    display: flex;
    height: 62px;
    padding: 6px 0 6px 20px;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
    }
    .itemText {
      margin-left: 20px;
      p {
        font-size: 12px;
        line-height: 20px;
        margin: 0;
        color: #000;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    &:hover {
      background-color: #f4f2f2;
    }
  }
}
</style>
