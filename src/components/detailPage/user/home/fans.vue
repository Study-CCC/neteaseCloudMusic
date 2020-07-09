<template>
  <div class="fansBox">
    <p class="tit">{{tit}}({{num}})</p>
    <ul>
      <li v-for="item in followeds" :key="item.userId">
        <img :src="item.avatarUrl" alt />
        <div class="userInfo">
          <p class="userName">
            <a :href="'/#/user/home?id='+item.userId">{{item.nickname}}</a>
            <i  v-if="item.gender!=0" :class="['sex',item.gender==0?'woman':'man']"></i>
          </p>
          <p class="userText">
            <a :href="'/#/user/event?id='+item.userId">
              <span>动态:</span>
              {{item.eventCount}}
            </a>

            <a :href="'/#/user/follows?id='+item.userId">
              <span>关注:</span>
              {{item.follows}}
            </a>

            <a :href="'/#/user/fans?id='+item.userId">
              <span>粉丝:</span>
              {{item.followeds}}
            </a>
          </p>
          <p>{{item.signature}}</p>
        </div>
        <el-button>发私信</el-button>
      </li>
    </ul>
    <el-pagination
    v-if="num>20"
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :pageSize="20"
      :total="num>1000?1000:num"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followeds: [],
      url: "",
      tit: "",
      num: 0,
      offset:0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleCurrentChange(e) {
      this.offset = (e - 1) * 20;
      this.getData();
    },
    async getData() {
      const id = this.$route.query.id;
      const path = this.$route.path;
      if (path == "/user/fans") {
        this.tit = "粉丝";
        this.url = `/user/followeds?limit=20&uid=${id}&offset=${this.offset}`;
        this.num = this.fansNum;
      } else {
        this.tit = "关注";
        this.url = `/user/follows?limit=20&uid=${id}&offset=${this.offset}`;
        this.num = this.followsNum;
      }
      const { data, status } = await this.$http.get(this.url);
      if (status !== 200) return this.$message.error("数据获取错误");
      this.followeds = data.followeds || data.follow;
        // console.log(this.followeds);
    }
  },
  props: ["fansNum", "followsNum"],
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>
<style lang='less' scoped>
a {
  &:hover {
    text-decoration: underline;
  }
}
.fansBox {
  .tit {
    color: #666;
    font-size: 20px;
    line-height: 28px;
    border-bottom: 2px solid #c20c0c;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 409px;
      height: 80px;
      padding: 20px 20px 0px;
      border-right: 1px solid rgb(213, 213, 213);
      img {
        height: 60px;
        width: 60px;
        float: left;
      }
      .userInfo {
        float: left;
        margin-left: 10px;
        p {
          font-size: 12px;
          color: #666;
          width: 255px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-bottom: 5px;
        }
        .userText {
          a {
            color: #0c73c2;
            font-size: 12px;
            span {
              color: #333;
            }
          }
        }
        .userName {
          font-size: 14px;
          a {
            color: #0c73c2;
          }
        }
        .sex {
          display: inline-block;
          background: url("../../../../assets/icon.png");
          width: 14px;
          height: 15px;
          margin: 0 5px;
        }
        .man {
          background-position: -70px -20px;
        }
        .woman {
          background-position: -70px 0;
        }
      }
      .el-button {
        float: right;
      }
    }
  }
}
</style>