<template>
  <div class="albumBox">
      <div class="hotAlb">
        <div class="hotTit">
          <h3>热门新碟</h3>
        </div>
        <ul class="itemGroup">
          <li v-for="item in hotAlbums" :key="item.id">
            <img :src="item.blurPicUrl" alt />
            <a href="#" class="bgc"></a>
            <a href="#" class="play"></a>
            <h3>{{item.name}}</h3>
            <a href="#"><span>{{item.artist.name}}</span></a>
          </li>
        </ul>
      </div>
      <div class="AllAlb">
        <div class="AllTit">
          <h3>全部新碟</h3>
        </div>
       <ul class="itemGroup">
          <li v-for="item in allAlbums" :key="item.id">
            <img :src="item.blurPicUrl" alt />
            <a href="#" class="bgc"></a>
            <a href="#" class="play"></a>
            <h3>{{item.name}}</h3>
            <a href="#"><span>{{item.artist.name}}</span></a>
          </li>
        </ul>
      </div>
      <el-pagination background layout="prev, pager, next" :page-size="35" :total="total"></el-pagination>
  </div>
</template>

<script>
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
      console.log(data);
      data.albums.length = 10;
      this.hotAlbums = data.albums;
    },
    async getAllAlbums(){
      const { data, status } = await this.$http.get("/top/album");
      if (status !== 200) return this.$message.error("数据获取错误");
      this.allAlbums = data.albums
      this.total = data.total
      // console.log(this.total)
    }
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
    li {
      position: relative;
      margin-top: 20px;
      margin-right: 55px;
      img {
        width: 130px;
        height: 130px;
      }
      h3 {
        width: 130px;
        color: #000;
        font-size: 14px;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
      }
      span{
                display: inline-block;
        width: 130px;
        font-size: 12px;
        color: #666;
         white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
      }
      .bgc {
        position: absolute;
        top: 0;
        left: 0;
        width: 153px;
        height: 130px;
        background: url("../../../assets/coverall.png");
        background-position: 0 -845px;
      }
      .play {
        position: absolute;
        width: 28px;
        height: 28px;
        right: 10px;
        top: 95px;
        background: url("../../../assets/iconall.png");
        background-position: 0 -140px;
      }
    }
  }
  .AllTit,.hotTit{
        border-bottom: 2px solid #c20c0c;
  }
}
</style>