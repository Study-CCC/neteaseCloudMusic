<template>
  <div class="RightBox">
      <div class="userLogin">
        <p class="rightText">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <div class="page">
          <el-button size="small" type="danger">用户登录</el-button>
        </div>
      </div>
      <!-- 热门主播 -->
      <div class="hotAnchor">
        <div class="hotTit">
          <h3 class="tit1">热门主播</h3>
          <ul >
            <li class="clearFloat" v-for="item in hotAnchor" :key="item.id">
              <a :href="'/#/user/home?id='+item.id"><img :src="item.picUrl" ></a>
              <div class="anchText">
                <p><a :href="'/#/user/home?id='+item.id">{{item.name}}</a></p>
                <span>{{item.rcmdtext}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotAnchor: []
    };
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/dj/toplist?type=hot&limit=5");
      if (status !== 200) return this.$message.error("数据获取错误");
      this.hotAnchor = data.toplist
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang='less' scoped>
.RightBox {
  width: 254px;
  .userLogin {
    
    background: url('../../../assets/index.png');
    height: 126px;
    .rightText {
      color: #666;
      line-height: 22px;
      font-size: 12px;
      margin: 20px 20px 0 20px;
    }
    .el-button {
    }
  }
.hotAnchor{
  margin: 20px 0 0 20px;
  .hotTit {
    ul{
      margin-left: 5px;
      li{
        margin-top: 10px;
        img{
          width: 40px;
    height: 40px;
    box-shadow: 0 0 1px #333333 inset;
    float: left;
        }
        .anchText{
          width: 160px;
          margin-left: 10px;
          float: left;
             p{
          a{
            font-size: 12px;
            color:#333;
          }
        }
        span{
          margin-top: 10px;
          color:#999;
          font-size: 12px;
        }
        }
     
      }
    }
  }
  .tit1 {
    font-size: 12px;
    color: #333;
    height: 30px;
    line-height: 30px;
        border-bottom: 1px solid rgb(204, 204, 204);
  }
}

}
</style>