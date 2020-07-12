<template>
  <div class="categoryBox">
    <div class="newDj">
      <h3 class="tit">优秀新电台</h3>
      <ul>
        <li v-for="item in newList" :key="item.id">
          <a :href="'/#/djradio?id='+item.id">
            <img :src="item.picUrl" alt />
          </a>
          <h3>
            <a :href="'/#/djradio?id='+item.id">{{item.name}}</a>
          </h3>
          <p>{{item.rcmdtext}}</p>
        </li>
      </ul>
    </div>
    <div class="djToplist">
      <h3 class="tit">电台排行榜</h3>
      <ul>
        <li v-for="item in topList" :key="item.id">
          <a :href="'/#/djradio?id='+item.id">
            <img :src="item.picUrl" alt />
          </a>
          <div class="itemText">
            <h3>
              <a :href="'/#/djradio?id='+item.id">{{item.name}}</a>
            </h3>
            <p class="auth clearFloat">
              <i></i>
              <a :href="'/#/user/home?id='+item.dj.userId">{{item.dj.nickname}}</a>
            </p>
            <p>共{{item.programCount}}期 订阅{{item.subCount}}次</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="28"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getDjRecommend, getDjRadio } from "../../../utils/api/djApi";
export default {
  data() {
    return {
      id: 0,
      newList: [],
      topList: [],
      total: 0,
      offset: 0
    };
  },
  created() {
    this.getNewList();
    this.getTopList();
  },
  methods: {
    getNewList() {
      this.id = this.$route.query.id;
      getDjRecommend(this.id)
        .then(res => {
          res.data.djRadios.length = 5;
          this.newList = res.data.djRadios;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    getTopList() {
      getDjRadio(this.id, this.offset)
        .then(res => {
          this.topList = res.data.djRadios;
          this.total = res.data.count;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    handleCurrentChange(e) {
      this.offset = (e - 1) * 28;
      this.getTopList();
    }
  },
  watch: {
    $route() {
      this.id = this.$route.query.id;
      this.getNewList();
      this.getTopList();
    }
  }
};
</script>
<style lang='less' scoped>
.categoryBox {
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  .tit {
    font-size: 24px;
    color: #333;
    line-height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .newDj {
    ul {
      display: flex;
      li {
        margin-right: 37px;
        margin-top: 20px;
        img {
          width: 150px;
          height: 150px;
        }
        h3 {
          a {
            font-size: 14px;
            color: #333;
          }
        }
        p {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .djToplist {
    margin-top: 35px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 435px;
        height: 120px;
        padding: 20px 0;
        border-bottom: 1px solid #e7e7e7;
        a {
          float: left;
          img {
            width: 120px;
            height: 120px;
          }
        }
        .itemText {
          float: left;
          margin-left: 20px;
          h3 {
            font-size: 18px;
            height: 64px;
            line-height: 64px;
            a {
              color: #333;
            }
          }
          .auth {
            a {
              color: #333;
            }
            margin-bottom: 10px;
            i {
              background: url("../../../assets/icon.png");
              background-position: -50px -300px;
              width: 14px;
              height: 15px;
              float: left;
              margin-right: 10px;
            }
          }
          p {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
  .page {
    margin-top: 20px;
    text-align: center;
  }
}
</style>