<template>
  <div class="simiSinger">
    <h3>相似歌手</h3>
    <ul>
      <li v-for="item in artists" :key="item.id">
        <el-tooltip effect="light" :content="item.name" placement="bottom" :open-delay="200">
          <a :href="'/#/artist?id='+item.id">
            <img :src="item.img1v1Url" alt />
          </a>
        </el-tooltip>
        <a class="singerName" :href="'/#/artist?id='+item.id">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSimiArtist } from "../../utils/api/relatedApi";
export default {
  data() {
    return {
      artists: []
    };
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      getSimiArtist(id)
        .then(res => {
          res.data.artists.length = 6;
          this.artists = res.data.artists;
        })
        .catch(() => {
          this.$message.error("歌曲列表获取失败");
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang='less' scoped>
.simiSinger {
  h3 {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
  }
  ul {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      margin-right: 5px;
      margin-top: 10px;
      img {
        width: 50px;
        height: 50px;
      }
      .singerName {
        font-size: 12px;
        color: #333;
        display: block;
        width: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
  }
}
</style>