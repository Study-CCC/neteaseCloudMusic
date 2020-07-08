<template>
  <div class="songListBox">
    <ul>
      <li v-for="item in playlists" :key="item.id">
        <el-row type="flex" align="middle">
          <el-col :span="10">
            <div class="songItem">
              <i class="play" @click="playInfo(songInit(item))"></i>
              <div class="imgBox">
                <a :href="'/#/playlist?id='+item.id" class="msk"></a>
                <img :src="item.coverImgUrl" alt />
              </div>
              <div class="itemText textOver">
                <a :href="'/#/playlist?id='+item.id">
                  <span>{{item.name}}</span>
                </a>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <BtnGroup :song="songInit(item)" class="btnShow" />
          </el-col>
          <el-col :span="6">
            <span>
                          {{item.trackCount}}首 by
            <a
              class="authName textOver"
              :href="'/#/user/home?id='+item.creator.userId"
            >{{item.creator.nickname}}</a></span>
          </el-col>
          <el-col :span="4">
            <span class="collectNum">收藏{{item.bookCount|numFilter}}</span>
            <span class="listenNum">收听{{item.playCount|numFilter}}</span>
          </el-col>
        </el-row>
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
import BtnGroup from "../../common/btnGroup";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      playlists: [],
      total: 0,
      offset: 0,
      pageSize: 30,
      search: ""
    };
  },
  created(){
    this.getData()
  },
  methods: {
    songInit(item) {
      // let song = {};
      // (song.name = item.name),
      //   (song.authId = item.artists[0].id),
      //   (song.picUrl = item.artists[0].img1v1Url),
      //   (song.duration = item.duration),
      //   (song.id = item.id),
      //   (song.authName = item.artists[0].name);
      // return song;
    },
    handleCurrentChange(e) {
      this.offset = (e - 1) * this.pageSize;
      this.getNext();
    },
    async getNext() {
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&offset=${this.offset}&type=1000`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.playlists = data.result.playlists;
    },
    async getData() {
      this.search = this.$route.query.s;
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&type=1000`
      );
      this.total = data.result.playlistCount;
      this.playlists = data.result.playlists;
      this.$emit('getNum',this.total)
    },
    ...mapActions(["playInfo"])
  },
  components: {
    BtnGroup
  }
};
</script>
<style lang='less' scoped>
.songListBox {
  margin-top: 20px;
  ul {
    li:nth-child(even) {
      background-color: #f7f7f7;
    }
    .btnShow {
      display: none;
    }
    li:hover {
      .btnShow {
        display: block;
      }
    }
    li {
       padding: 10px 0;
      a{
        color: #333;
        font-size: 12px;
      }

      .songItem {
        display: flex;
        align-items: center;
        .imgBox {
          width: 50px;
          height: 50px;
          position: relative; 
          margin: 0 20px;
          .msk {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: url('../../../assets/coverall.png');
            background-position: -160px 0;
          }
          img {
            width: 100%;
            height: 100%;
          
          }
        }
        .play {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background: url("../../../assets/index.png");
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
      }
    span{
      color: #999;
      font-size: 12px;
    }
      .authName {
        margin-left: 5px;
        vertical-align: middle;
        width: 100px;
        display: inline-block;
      }
      .collectNum{
        margin-right: 10px;
      }
    }
  }
}
</style>