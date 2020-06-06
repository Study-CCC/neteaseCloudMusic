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
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists:[]
    };
  },
  created() {
    this.getData()
  },
  methods: {
    async getData(){
        const data = await this.$http.get('localhost:3000/top/playlist?limit=10&order=new')
        console.log('data')
    }
  },
};
</script>
<style lang='less' scoped>
.hotBox {
  .hotTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;

    .more {
      margin-left: auto;
    }
  }
}
</style>