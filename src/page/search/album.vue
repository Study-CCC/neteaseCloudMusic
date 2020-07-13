<template>
  <div class="albumBox">
    <ul>
      <li v-for="item in albums" :key="item.id">
        <AlbumItem :item="item" />
      </li>
    </ul>
    <div class="page">
      <el-pagination
        v-if="total>pageSize"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import AlbumItem from "../../components/common/albumItem";
import { getSearch } from "../../utils/api/searchApi";
export default {
  data() {
    return {
      albums: [],
      total: 0,
      offset: 0,
      pageSize: 90,
      search: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleCurrentChange(e) {
      this.offset = (e - 1) * this.pageSize;
      this.getNext();
    },
    getNext() {
      getSearch(this.search, 10, this.offset)
        .then(res => {
          this.albums = res.data.result.albums;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    getData() {
      this.search = this.$route.query.s;
      getSearch(this.search, 10)
        .then(res => {
          this.total = res.data.result.albumCount;
          this.albums = res.data.result.albums;
           this.$emit("getNum", this.total, res.data.result[Object.keys(res.data.result)[0]] == 0
              ? true
              : false,false);
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
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>