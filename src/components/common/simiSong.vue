<template>
  <div class="simiSongBox">
    <h3 class="tit">相似歌曲</h3>
    <ul>
      <li class="clearFloat" v-for="item in songs" :key="item.id">
        <div class="songInfo">
          <p>
            <a :href="'/#/song?id='+item.id">{{item.name}}</a>
          </p>
          <p>
            <a class="user" :href="'/#/artist?id='+item.artists[0].id">{{item.artists[0].name}}</a>
          </p>
        </div>
        <div class="btn">
          <a href="#">
            <i class="play"></i>
          </a>
          <a href="#">
            <i class="add"></i>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSimiSongs } from "../../utils/api/relatedApi";
export default {
  data() {
    return {
      songs: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      getSimiSongs(id)
        .then(res => {
          this.songs = res.data.songs;
        })
        .catch(() => {
          this.$message.error("歌曲列表获取失败");
        });
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>
<style lang='less' scoped>
.simiSongBox {
  .tit {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
  }
  ul {
    li {
      margin-top: 10px;
      .songInfo {
        width: 150px;
        float: left;
        margin-left: 5px;

        p {
          font-size: 14px;
          color: #000;
          font-weight: normal;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          a {
            color: #333;
            &:hover {
              text-decoration: underline;
            }
          }
          .user {
            color: #666;
          }
        }
      }
      .btn {
        i {
          width: 10px;
          height: 11px;
          background: url("../../assets/icon2.png");
          margin-left: 10px;
          display: inline-block;
        }
        .play {
          background-position: -69px -455px;
        }
        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
}
</style>