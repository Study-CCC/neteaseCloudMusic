<template>
  <div class="songConBox">
    <div class="listTitle">
      <h3>歌曲列表</h3>
      <span>{{songsList.trackCount}}首歌</span>
      <span class="play">
        播放
        <strong>{{songsList.playCount}}</strong>次
      </span>
    </div>
    <el-table
      stripe
      row-class-name="rowClass"
      :cell-style="{'padding':0,'line-height':'30px','height':'30px'}"
      :data="songsList.tracks"
      style="width: 97%;margin-left:20px;"
    >
      <el-table-column label="#" type="index" width="77"></el-table-column>
      <el-table-column label="标题" width="327">
        <template v-slot="songData">
          <div class="songItem noWrap">
            <a href="#" class="playIcon"></a>
            <a  :href="'/#/song?id='+songData.row.id">{{songData.row.name}}</a>
            <span class="origin" v-if="songData.row.alia.length!=0">-{{songData.row.alia[0]}}</span>
            <i class="mvPlay" v-if="songData.row.mv!=0"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column  label="时长" width="110">
        <template v-slot="songData">
          <div class="iconGroup btnShow">
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="添加到播放列表"
              placement="bottom-start"
            >
              <a>
                <i class="add"></i>
              </a>
            </el-tooltip>
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="收藏"
              placement="bottom-start"
            >
              <a>
                <i class="collect"></i>
              </a>
            </el-tooltip>
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="分享"
              placement="bottom-start"
            >
              <a>
                <i class="share"></i>
              </a>
            </el-tooltip>
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="下载"
              placement="bottom-start"
            >
              <a href="#">
                <i class="download"></i>
              </a>
            </el-tooltip>
          </div>
          <span class="dtShow">{{songData.row.dt}}</span>
        </template>
      </el-table-column>
      <el-table-column label="歌手">
        <template v-slot="songData">
          <a :href="'/#/artist?id='+songData.row.ar[0].id">{{songData.row.ar[0].name}}</a>
        </template>
      </el-table-column>
      <el-table-column label="专辑" v-if="isShow">
        <template v-slot="songData">
          <a class="noWrap" :href="'/#/album?id='+songData.row.al.id">{{songData.row.al.name}}</a>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:'',
      isShow:true
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.url = this.$route.path
      if(this.url=='/album'){
        this.isShow = false
      }
    }
    // async getData() {
    //   // const { data, status } = await this.$http.get("/top/list?idx=3");
    //   // if (status !== 200) return this.$message.error("数据获取错误");
    //   //  console.log(data)
    //   // data.playlist.tracks.length = 10;
    //   this.tracks.length = 10
    //   this.songsList = tracks;
    //   console.log(this.songsList);
    // }
  },
  props: ["songsList"]
};
</script>
<style lang='less' scoped>
a {
  color: #666;
  &:hover {
    text-decoration: underline;
  }
}
.noWrap{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.btnShow {
  display: none;
}
.dtShow {
  display: inline-block;
}
.rowClass {
  &:hover {
    .btnShow {
      display: block;
    }
    .dtShow {
      display: none;
    }
  }
}
.songConBox {
  .listTitle {
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
    .playIcon {
      background: url("../../assets/table.png");
      background-position: 0 -103px;
      width: 17px;
      height: 17px;
      display: block;
      margin-right: 10px;
      float: left;
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