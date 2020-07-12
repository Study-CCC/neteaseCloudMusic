<template>
  <div class="albumBox pageCon">
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
    <div class="page">
      <el-pagination background layout="prev, pager, next" :page-size="35" :total="total"></el-pagination>
    </div>
  </div>
</template>

<script>
import AlbumItem from "./albumItem";
import { hotAlbum, topAlbum } from "../../../utils/api/albumApi";
export default {
  data() {
    return {
      hotAlbums: [],
      allAlbums: [],
      total: 0
    };
  },
  created() {
    this.getHotAlbums();
    this.getAllAlbums();
  },
  methods: {
    async getHotAlbums() {
      hotAlbum()
        .then(res => {
          res.data.albums.length = 10;
          this.hotAlbums = res.data.albums;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    async getAllAlbums() {
      topAlbum()
        .then(res => {
          this.allAlbums = res.data.albums;
          this.total = res.data.total;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  components: {
    AlbumItem
  }
};
</script>
<style lang='less' scoped>
.albumBox {
  .itemGroup {
    display: flex;
    flex-wrap: wrap;
  }
  .AllTit,
  .hotTit {
    border-bottom: 2px solid #c20c0c;

    h3 {
      font-size: 24px;
      font-weight: normal;
    }
  }
}
</style>