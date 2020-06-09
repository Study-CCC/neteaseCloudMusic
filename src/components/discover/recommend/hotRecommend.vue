<template>
  <div class="hotBox">
    <div class="hotTit">
      <h3>热门推荐</h3>
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>
          <a href="/">华语</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">流行</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">摇滚</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">民谣</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">电子</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <a href="#" class="more">更多</a>
    </div>
    <ul class="hotContent">
      <li v-for="item in playlists" :key="item.id">
        <div class="hotImg">
          <img :src="item.picUrl" alt />
          <a href="#" class="hotClick"></a>
          <div class="itemBottom">
            <span class="el-icon-headset"></span>
            <span>{{item.playCount}}}</span>
            <span class="el-icon-video-play"></span>
          </div>
        </div>
        <a class="itemTit" href="#">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/personalized");
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data);
      data.result.length = 8;
      this.playlists = data.result;
    }
  }
};
</script>
<style lang='less' scoped>
.hotBox {
  .hotTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 35px;
    .more {
      margin-left: auto;
    }
  }
  .hotContent {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 32px;
      width: 140px;
      .itemTit {
        color: #000;
        vertical-align: middle;
        font-size: 14px;
        width: 100%;
      }
      .hotImg {
        width: 140px;
        height: 140px;
        position: relative;
      }
      .hotClick {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .itemBottom {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        background: url("../../../assets/coverall.png");
        background-position: 0 -537px;
        font-size: 12px;
        color: #ccc;
        .el-icon-headset {
          margin-left: 10px;
        }
        .el-icon-video-play {
          margin-left: auto;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>