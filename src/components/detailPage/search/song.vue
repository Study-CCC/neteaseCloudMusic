<template>
  <div class="songBox">
    <ul>
      <li v-for="item in songs" :key="item.id">
        <el-row type="flex" align="middle">
          <el-col :span="10">
               <div class="songItem">
            <i class="play" @click="playInfo(songInit(item))"></i>
              <div class="itemText textOver">
                <a :href="'/#/song?id='+item.id">
                  <span>{{item.name}}</span>
                </a>
              </div>
              <a :href="'/#/mv?id='+item.mvid">
                <i class="mvPlay" v-if="item.mvid!=0"></i>
              </a>
            </div>
          </el-col>
          <el-col :span="4">
            <BtnGroup :song="songInit(item)" class="btnShow" />
          </el-col>
          <el-col :span="4">
            <a class="authName textOver" :href="'/#/artist?id='+item.artists[0].id">{{item.artists[0].name}}</a>
          </el-col>
          <el-col :span="4">
            <a class="alName textOver" :href="'/#/album?id='+item.album.id">{{item.album.name}}</a>
          </el-col>
          <el-col :span="2">
            <span class="time">{{item.duration|timeFilter}}</span>
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
      songs: [],
      total: 0,
      offset: 0,
      pageSize: 30,
      search:''
    };
  },
  created() {
    this.getData();
  },
  methods: {
    songInit(item) {
      let song = {};
      (song.name = item.name),
        (song.authId = item.artists[0].id),
        (song.picUrl = item.artists[0].img1v1Url),
        (song.duration = item.duration),
        (song.id = item.id),
        (song.authName = item.artists[0].name);
      return song;
    },
    handleCurrentChange(e) {
      this.offset = (e - 1) * this.pageSize;
      this.getNext();
    },
    async getNext() {
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}&offset=${this.offset}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.songs = data.result.songs
    },
    async getData() {
      this.search = this.$route.query.s;
      const { data, status } = await this.$http.get(
        `/search?keywords=${this.search}`
      );
      this.total = data.result.songCount;
      this.songs = data.result.songs;
    },
    ...mapActions(["playInfo"])
  },
  components: {
    BtnGroup
  }
};
</script>
<style lang='less' scoped>
.songBox {
    margin-top: 20px;
  ul {
       li:nth-child(even) {
      background-color: #f7f7f7;
    }
    .btnShow{
        display: none;
    }
    li:hover{
        .btnShow{
            display: block;
        }
    }
    li {
        padding: 10px 0;
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
        .mvPlay {
    width: 23px;
    height: 17px;
    background: url("../../../assets/table.png");
    background-position: 0 -151px;
  }
      .songItem {
          display: flex;
        .itemText {
          .mvPlay {
            width: 23px;
            height: 17px;
            background: url("../../../assets/table.png");
            background-position: 0 -151px;
          }
        }
      }
      .authName{
             width: 80px;
        display: inline-block;
      }
      .alName {
        font-size: 12px;
        color: #666;
        width: 100px;
        display: inline-block;
      }
      .time,
      a {
        color: #333;
        font-size: 12px;
      }
    }
  }
}
</style>