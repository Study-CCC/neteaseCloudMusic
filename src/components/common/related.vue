<template>
  <div class="relatedBox">
    <h3 class="tit">热门歌单</h3>
    <ul>
      <li v-for="item in playlists" :key="item.id">
        <a :href="'/#/playlist?id='+item.id">
          <img :src="item.coverImgUrl" alt />
        </a>
        <div class="text">
          <a :href="'/#/playlist?id='+item.id">
            <h3>{{item.name}}</h3>
          </a>
          <span>
            by
            <a :href="'/#/user/home?id='+item.creator.userId">{{item.creator.nickname}}</a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        playlists:[]
    };
  },
  created() {
      this.getData()
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      // console.log(id)
      const { data, status } = await this.$http.get(
        `/related/playlist?id=${id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.playlists = data.playlists
      // console.log(this.playlists)
    }
  }
};
</script>
<style lang='less' scoped>
a {
  color: #666;
  &:hover {
    text-decoration: underline;
  }
}
.relatedBox {
  .tit {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
  }
  ul {
    li {
        height: 50px;
        width: 205px;
        margin-top: 10px;
      img {
        float: left;
        width: 50px;
        height: 50px;
      }
      .text {
        width: 150px;
        float: left;
        margin-left: 5px;
        h3 {
          font-size: 14px;
          color: #000;
          font-weight: normal;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>