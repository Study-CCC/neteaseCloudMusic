<template>
  <div class="fansBox">
    <p class="tit">粉丝()</p>
    <ul>
      <li v-for="item in followeds" :key="item.userId">
        <img :src="item.avatarUrl" alt />
        <div class="userInfo">
          <p>{{item.nickname}}</p>
          <span>
            动态:
            <a href="#">{{item.eventCount}}</a>
          </span>
          <span>
            关注:
            <a href>{{item.follows}}</a>
          </span>
          <span>
            粉丝:
            <a href>{{item.followeds}}</a>
          </span>
        </div>
        <el-button>关注</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followeds: []
    };
  },
  created() {},
  methods: {
    async getData() {
      const id = this.$route.query.id;
      const { data, status } = await this.$http.get(
        `/user/followeds?uid=${id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
    }
  }
};
</script>
<style lang='less' scoped>
.fansBox {
  .tit {
    color: #666;
    font-size: 20px;
    line-height: 28px;
    border-bottom: 2px solid #c20c0c;
  }
  .ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 409px;
      height: 80px;
      padding: 20px 20px 0px;
      border-right: 1px solid rgb(213, 213, 213);
      img{
          height: 60px;
          width: 60px;
      }
    }
  }
}
</style>