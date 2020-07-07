<template>
  <div class="albumBox">
      <ul>
          <li v-for="item in albums" :key="item.id"><AlbumItem :item="item"/></li>
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
import AlbumItem from '../../common/albumItem'
  export default {
    data () {
      return {
 albums: [],
      total: 0,
      offset: 0,
      pageSize: 90,
      search: "火"
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
    async getNext() {
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&offset=${this.offset}&type=10&limit=90`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.albums = data.result.albums;
    },
    async getData() {
      //   this.search = this.$route.query.s;
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&type=10&limit=90`
      );
      this.total = data.result.albumCount;
      this.albums = data.result.albums;
    }
    },
    components:{
        AlbumItem
    }
  }

</script>
<style lang='less' scoped>
.albumBox{
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}}
</style>