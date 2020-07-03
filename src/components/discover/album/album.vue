<template>
  <div class="albumBox">
      <div class="hotAlb">
        <div class="hotTit">
          <h3>热门新碟</h3>
        </div>
        <ul class="itemGroup">
          <li v-for="item in hotAlbums" :key="item.id">
           <AlbumItem :item="item" />
          </li>
        </ul>
      </div>
      <div class="AllAlb">
        <div class="AllTit">
          <h3>全部新碟</h3>
        </div>
       <ul class="itemGroup">
          <li v-for="item in allAlbums" :key="item.id">
          <AlbumItem :item="item" />
          </li>
        </ul>
      </div>
      <div class="page"><el-pagination background layout="prev, pager, next" :page-size="35" :total="total"></el-pagination></div>
  </div>
</template>

<script>
import AlbumItem from './albumItem'
export default {
  data() {
    return {
      hotAlbums: [],
      allAlbums:[],
      total:0
    };
  },
  created() {
    this.getHotAlbums();
    this.getAllAlbums()
  },
  methods: {
    async getHotAlbums() {
      const { data, status } = await this.$http.get("/album/newest");
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data);
      data.albums.length = 10;
      this.hotAlbums = data.albums;
    },
    async getAllAlbums(){
      const { data, status } = await this.$http.get("/top/album");
      if (status !== 200) return this.$message.error("数据获取错误");
      this.allAlbums = data.albums
      this.total = data.total
    }

  },
  components:{
    AlbumItem
  }
};
</script>
<style lang='less' scoped>

.albumBox {
  width: 1100px;
  margin: 0 auto;
  padding: 40px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  .itemGroup {
    display: flex;
    flex-wrap: wrap;
    }
  .AllTit,.hotTit{
        border-bottom: 2px solid #c20c0c;
       
     h3{   font-size: 24px; font-weight: normal;}
  }
}
</style>