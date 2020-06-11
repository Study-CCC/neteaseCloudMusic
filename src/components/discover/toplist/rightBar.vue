<template>
  <div class="rightBox">
    <div class="rightHeader">
      <div class="rightImg">
        <img src="../../../assets/TEST.jpg" alt />
      </div>
      <div class="headerText">
        <p class="title">云音乐飙升榜</p>
        <p>最近更新：06月05日 （每天更新）</p>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download"></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square"></el-button>
        </div>
      </div>
    </div>
    <div class="rightList">
      <div class="listTitle">
        <h3>歌曲列表</h3>
        <span>100首歌</span>
        <span class="play">
          播放
          <strong>5253254234325</strong>次
        </span>
      </div>
      <!-- 排行榜数据 -->
      <el-table stripe :data="songsList" style="width: 97%;margin-left:20px;">
        <el-table-column label="#" type="index" width="77"></el-table-column>
        <el-table-column prop="name" label="标题" width="327">
          <template v-slot="songData">
            <div class="songItem" v-if="songData.$index>2">
              <i class="play"></i>
              <span>{{songData.row.name}}</span>
              <span class="origin">{{songData.row.alia[0]}}</span>
              <i class="mvPlay" v-if="songData.row.mv!=0"></i>
            </div>
            <div class="songItem" v-else>
              <img class="titImg" :src="songData.row.al.picUrl" alt />
              <i class="play"></i>
              <span>{{songData.row.name}}</span>
              <span class="origin">{{songData.row.alia[0]}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop label="时长" width="110">
          <template v-slot="songData">
            <div class="iconGroup">
              <el-tooltip class="item" effect="light" content="添加到播放列表" placement="bottom-start">
                <a>
                  <i class="add"></i>
                </a>
              </el-tooltip>
              <el-tooltip class="item" effect="light" content="收藏" placement="bottom-start">
                <a>
                  <i class="collect"></i>
                </a>
              </el-tooltip>
              <el-tooltip class="item" effect="light" content="分享" placement="bottom-start">
                <a>
                  <i class="share"></i>
                </a>
              </el-tooltip>
              <el-tooltip class="item" effect="light" content="下载" placement="bottom-start">
                <a href="#">
                  <i class="download"></i>
                </a>
              </el-tooltip>
            </div>
            <span>{{songData.row.dt}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="ar[0].name" label="歌手"></el-table-column>
      </el-table>
    </div>
    <Commend></Commend>
  </div>
</template>

<script>
import Commend from './commend'
export default {
  data() {
    return {
      songsList: [],
      index: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      // const idx = this.$route.query.
      const { data, status } = await this.$http.get("/top/list?idx=3");
      if (status !== 200) return this.$message.error("数据获取错误");
      //  console.log(data)
      this.songsList = data.playlist.tracks;
      // console.log(this.songsList);
    }
  },
  components:{
    Commend
  }
};
</script>
<style lang='less' scoped>
.iconGroup {
  i {
    background: url("../../../assets/table.png");
    width: 18px;
    height: 16px;
    margin: 2px 0 0 4px;
    display: inline-block;
  }
  .add {
    background: url("../../../assets/icon.png");
    background-position: 0 -700px;
  }
  .collect {
    background-position: 0 -174px;
  }
  .share {
    background-position: 0 -195px;
  }
  .download {
    background-position: -81px -174px;
  }
}
.songItem {
  display: flex;
  align-items: center;
  font-size: 12px;
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