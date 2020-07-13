<template>
  <div class="newBox">
    <div class="newTit">
      <h3>新碟上架</h3>
      <a href="/#/discover/album" class="more">更多</a>
    </div>
    <el-carousel trigger="click" :autoplay="false" height="170px">
      <el-carousel-item v-for="(item1,i) in albums" :key="i">
        <ul>
          <li v-for="item in item1" :key="item.id">
            <AlbumItem :item="item" />
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import AlbumItem from "../../common/albumItem";
import { hotAlbum } from "../../../utils/api/albumApi";
export default {
  data() {
    return {
      albums: [[], []]
    };
  },
  methods: {
    getData() {
      hotAlbum()
        .then(res => {
          res.data.albums.length = 10;
          res.data.albums.map((item, index) => {
            if (index < 5) this.albums[0].push(item);
            else this.albums[1].push(item);
          });
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  created() {
    this.getData();
  },
  components: {
    AlbumItem
  }
};
</script>
<style lang='less' scoped>
.newBox {
  .newTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 35px;
    .more {
      margin-left: auto;
    }
  }
  ul {
    display: flex;
  }
  .el-carousel {
    margin: 20px 0;
    background-color: #f5f5f5;
    padding: 0 10px;
    border: 1px solid #cacaca;
  }
}
</style>