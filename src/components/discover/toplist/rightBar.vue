<template>
  <div class="rightBox">
    <div class="rightHeader">
      <div class="rightImg">
        <img :src="coverImgUrl" alt />
      </div>
      <div class="headerText">
        <p class="title">{{tit}}</p>
        <p>最近更新：{{updataTime}}</p>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add">({{subscribedCount}})</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened">({{shareCount}})</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square">({{commentCount}})</el-button>
        </div>
      </div>
    </div>
    <div class="rightList">
      <div class="listTitle">
        <h3>歌曲列表</h3>
        <span>{{trackCount}}首歌</span>
        <span class="play">
          播放
          <strong>{{playCount}}</strong>次
        </span>
      </div>
      <!-- 排行榜数据 -->
      <el-table
        stripe
        :data="songsList"
        row-class-name="rowClass"
        :cell-style="{'padding':0,'line-height':'30px','height':'30px'}"
        style="width: 97%;margin-left:20px;"
      >
        <el-table-column label="#" type="index" width="77"></el-table-column>
        <el-table-column prop="name" label="标题" width="327">
          <template v-slot="songData">
            <div class="songItem" v-if="songData.$index>2">
              <a class="play"></a>
              <div class="itemText">
                <a :href="'/#/song?id='+songData.row.id">
                  <span>{{songData.row.name}}</span>
                </a>
                <span class="origin" v-if="songData.row.alia.length!=0">-({{songData.row.alia[0]}})</span>
              </div>
              <a href="#">
                <i class="mvPlay" v-if="songData.row.mv!=0"></i>
              </a>
            </div>
            <div class="songItem" v-else>
              <a :href="'/#/song?id='+songData.row.id">
                <img class="titImg" :src="songData.row.al.picUrl" alt />
              </a>
              <a href="#">
                <i class="play"></i>
              </a>
              <div class="itemText">
                <a :href="'/#/song?id='+songData.row.id">
                  <span>{{songData.row.name}}</span>
                </a>
                <span class="origin" v-if="songData.row.alia.length!=0">-1({{songData.row.alia[0]}})</span>
                <i class="mvPlay" v-if="songData.row.mv!=0"></i>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop label="时长" width="140">
          <template v-slot="songData">
            <BtnGroup class="btnShow" />
            <span class="timeShow">{{songData.row.dt}}</span>
          </template>
        </el-table-column>
        <el-table-column label="歌手">
          <template v-slot="songData">
            <a :href="'/#/artist?id='+songData.row.ar[0].id">{{songData.row.ar[0].name}}</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <CommentCon />
  </div>
</template>

<script>
import CommentCon from "../../common/commentCon";
import BtnGroup from "../../common/btnGroup";
export default {
  data() {
    return {
      songsList: [],
      index: 0,
      tit: "",
      updataTime: "",
      playCount: 0,
      coverImgUrl: "",
      trackCount: 0,
      subscribedCount: 0,
      shareCount: 0,
      commentCount: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      console.log(this.$route);
      const id = this.$route.query.id || 19723756;
      const { data, status } = await this.$http.get(`/top/list?id=${id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      this.songsList = data.playlist.tracks;
      this.tit = data.playlist.name;
      this.updataTime = data.playlist.trackNumberUpdateTime;
      this.playCount = data.playlist.playCount;
      this.coverImgUrl = data.playlist.coverImgUrl;
      this.trackCount = data.playlist.trackCount;
      this.subscribedCount = data.playlist.subscribedCount;
      this.shareCount = data.playlist.shareCount;
      // console.log(this.songsList)
    }
  },
  components: {
    CommentCon,
    BtnGroup
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>
<style lang='less' scoped>
a {
  color: #333;
  &:hover {
    text-decoration: underline;
  }
}
.btnShow {
  display: none;
}
.rowClass {
  &:hover {
    .btnShow {
      display: block;
    }
    .timeShow {
      display: none;
    }
  }
}
.headerBtn {
  margin-top: 20px;
}

.songItem {
  display: flex;
  align-items: center;
  font-size: 12px;
  .itemText {
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .titImg {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
  .play {
    background: url("../../../assets/table.png");
    background-position: 0 -103px;
    width: 17px;
    height: 17px;
    display: block;
    margin-right: 5px;
    &:hover {
      background-position: 0 -128px;
    }
  }
  .origin {
    color: #aeaeae;
  }
  .mvPlay {
    width: 23px;
    height: 17px;
    background: url("../../../assets/table.png");
    background-position: 0 -151px;
    display: block;
  }
}

.rightBox {
  width: 777px;
  border-left: 1px solid #d3d3d3;
  .rightHeader {
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    .rightImg {
      padding: 3px;
      border: 1px solid #ccc;
      height: 150px;
      img {
        width: 150px;
        height: 150px;
      }
    }
    .headerText {
      margin-left: 20px;
      .norBtn {
        margin-right: 20px;
      }
      p {
        font-size: 12px;
      }
      .title {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
      }
    }
  }
  .listTitle {
    display: flex;
    align-items: center;
    height: 35px;
    border-bottom: 2px solid #c20c0c;
    .play {
      margin-left: auto;
    }
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
    span {
      margin: 9px 0 0 20px;
      color: #666;
      font-size: 12px;
    }
  }
  .el-table {
    .el-table-column {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>