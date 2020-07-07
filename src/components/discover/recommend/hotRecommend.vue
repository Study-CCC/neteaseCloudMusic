<template>
  <div class="hotBox">
    <div class="hotTit">
      <h3>热门推荐</h3>
      <div class="hotItem">
        <a href="/#/discover/playlist/?cat=华语">华语</a>
        <span>|</span>

        <a href="/#/discover/playlist/?cat=流行">流行</a>
        <span>|</span>

        <a href="/#/discover/playlist/?cat=摇滚">摇滚</a>
        <span>|</span>

        <a href="/#/discover/playlist/?cat=民谣">民谣</a>
        <span>|</span>

        <a href="/#/discover/playlist/?cat=电子">电子</a>
      </div>
      <a href="/#/discover/playlist" class="more">更多</a>
    </div>
    <ul class="hotContent">
      <li v-for="item in playlists" :key="item.id">
        <PlaylistItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import PlaylistItem from "../../common/playlistItem";
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
  components: {
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
    .hotItem{
      a{
        font-size: 12px;
        margin: 0 20px;
        color: rgb(102, 102, 102);
      }
      span{
        font-size: 12px;
        color: rgb(102, 102, 102);
      }
    }
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