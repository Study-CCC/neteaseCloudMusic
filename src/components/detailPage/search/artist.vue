<template>
  <div class="artistBox">
    <ul>
      <li v-for="item in artists" :key="item.id">
        <div class="item">
          <a class="msk" :href="'/#/artist?id='+item.id"></a>
          <img :src="item.img1v1Url" alt />
        </div>
        <p class="textOver">
          <a :href="'/#/artist?id='+item.id">{{item.name}}</a>
        </p>
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
export default {
  data() {
    return {
      artists: [],
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
    async getNext() {
      this.search = this.$route.query.s;
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&offset=${this.offset}&type=100&limit=90`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.artists = data.result.artists;
    },
    async getData() {
      //   this.search = this.$route.query.s;
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&type=100&limit=90`
      );
      this.total = data.result.artistCount;
      this.artists = data.result.artists;
    }
  }
};
</script>
<style lang='less' scoped>
.artistBox {
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
        margin-top: 10px;
      width: 130px;
      height: 154px;
      .item {
        width: 130px;
        height: 130px;
        position: relative;
        .msk {
          width: 100%;
          height: 100%;
          background: url("../../../assets/coverall.png");
          position: absolute;
          top: 0;
          left: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      p{
          width: 130px;
          a{font-size: 12px;
          color:#000;}
      }
    }
  }
}
</style>