<template>
  <div class="djBox">
    <ul>
      <li v-for="item in djRadios" :key="item.id">
        <div class="imgBox">
          <a :href="'/#/djradio?id='+item.id">
            <img :src="item.picUrl" alt />
          </a>
        </div>
        <h3 class="textOver">
          <a :href="'/#/djradio?id='+item.id">{{item.name}}</a>
        </h3>
        <p>
          by
          <a :href="'/#/user/home?id='+item.dj.userId">{{item.dj.nickname}}</a>
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
import { getSearch } from "../../../utils/api/searchApi";
export default {
  data() {
    return {
      djRadios: [],
      total: 0,
      offset: 0,
      pageSize: 30,
      search: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
     getData() {
      this.search = this.$route.query.s;
      getSearch(this.search, 1009)
        .then(res => {
          this.total = res.data.result.djRadiosCount;
          this.djRadios = res.data.result.djRadios;
          this.$emit("getNum", this.total);
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    handleCurrentChange(e) {
      this.offset = (e - 1) * this.pageSize;
      this.getNext();
    },
    getNext() {
      getSearch(this.search, 1009, this.offset)
        .then(res => {
          this.djRadios = res.data.result.djRadios;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  }
};
</script>
<style lang='less' scoped>
.djBox {
  margin-top: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 150px;
      margin: 20px 30px 0 0;
      .imgBox {
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h3 {
        width: 100%;
        margin: 5px 0;
        a {
          line-height: 16px;
          font-size: 14px;
          font-weight: normal;
          color: #333;
        }
      }
      p {
        color: #999;
        line-height: 18px;
        font-size: 12px;
        a {
          color: #333;
          font-size: 14px;
        }
      }
    }
  }
}
</style>