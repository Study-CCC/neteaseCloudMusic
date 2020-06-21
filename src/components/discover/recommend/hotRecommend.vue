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
        <PlaylistItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import PlaylistItem from '../../common/playlistItem'
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
  },
  components:{
    PlaylistItem
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
    }
  }
}
</style>