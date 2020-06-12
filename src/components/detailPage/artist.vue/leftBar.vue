<template>
  <div class="leftBarBox">
    <h3>{{artist.name}}</h3>
    <div class="imgBox">
      <img :src="artist.picUrl" alt />
      <a href></a>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">热门作品</el-menu-item>
        <el-menu-item index="2">所有专辑</el-menu-item>
        <el-menu-item index="3">相关MV</el-menu-item>
        <el-menu-item index="4">艺人介绍</el-menu-item>
      </el-menu>
    </div>
    <div class="btn">
      <el-button-group class="norBtn">
        <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
        <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
      </el-button-group>
      <el-button icon="el-icon-folder-add"></el-button>
      <el-dropdown>
        <el-button>
          热门单曲
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>热门单曲</el-dropdown-item>
          <el-dropdown-item>作词作品</el-dropdown-item>
          <el-dropdown-item>作曲作品</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artist: {},
      hotSongs: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      const { data, status } = await this.$http.get(`/artists?id=${id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      this.artist = data.artist;
      this.artist = data.hotSongs;
    }
  }
};
</script>
<style lang='less' scoped>
</style>