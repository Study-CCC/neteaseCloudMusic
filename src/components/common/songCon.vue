<template>
  <div class="songConBox">
    <div class="listTitle">
      <h3>歌曲列表</h3>
      <span>100首歌</span>
      <span class="play">
        播放
        <strong>5253254234325</strong>次
      </span>
    </div>
    <el-table stripe :data="songsList" style="width: 97%;margin-left:20px;">
      <el-table-column label="#" type="index" width="77"></el-table-column>
      <el-table-column prop="name" label="标题" width="327">
        <template v-slot="songData">
          <div class="songItem">
            <i class="play"></i>
            <span>{{songData.row.name}}</span>
            <span class="origin">{{songData.row.alia[0]}}</span>
            <i class="mvPlay" v-if="songData.row.mv!=0"></i>
          </div>
          <!-- <div class="songItem">
            <img class="titImg" :src="songData.row.al.picUrl" alt />
            <i class="play"></i>
            <span>{{songData.row.name}}</span>
            <span class="origin">{{songData.row.alia[0]}}</span>
          </div>-->
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
</template>

<script>
export default {
  data() {
    return {
      songsList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/top/list?idx=3");
      if (status !== 200) return this.$message.error("数据获取错误");
      //  console.log(data)
      data.playlist.tracks.length = 10;
      this.songsList = data.playlist.tracks;
      // console.log(this.songsList);
    }
  }
};
</script>
<style lang='less' scoped>
.songConBox {
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
      background: url("../../assets/table.png");
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
      background: url("../../assets/table.png");
      background-position: 0 -151px;
      display: block;
    }
  }
  .iconGroup {
    i {
      background: url("../../assets/table.png");
      width: 18px;
      height: 16px;
      margin: 2px 0 0 4px;
      display: inline-block;
    }
    .add {
      background: url("../../assets/icon.png");
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
}
</style>