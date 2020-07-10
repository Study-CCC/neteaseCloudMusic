<template>
  <div class="songConBox">
    <div class="listTitle">
      <h3>
        歌曲列表
        <span>{{songsList.trackCount}}首歌</span>
        <span v-if="songsList.playCount" class="play">
          播放
          <strong>{{songsList.playCount}}</strong>次
        </span>
      </h3>
    </div>
    <el-table
      stripe
      row-class-name="rowClass"
      :cell-style="{'padding':0,'line-height':'30px','height':'30px'}"
      :data="songsList.tracks"
      style="width:100%;"
    >
      <el-table-column label="#" type="index" width="77">
        <template v-slot="songData">
          <span class="rankNum">
            <span>{{songData.$index+1}}</span>
            <i class="playIcon" @click="playInfo(songData.row)"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="标题" :width="songsList.width||327">
        <template v-if="!songsList.taste" v-slot="songData">
          <div class="songItem noWrap">
            <a :href="'/#/song?id='+songData.row.id">{{songData.row.name}}</a>
            <span class="origin" v-if="songData.row.alia.length!=0">-{{songData.row.alia[0]}}</span>
            <a :href="'/#/mv?id='+songData.row.mv"><i class="mvPlay" v-if="songData.row.mv!=0"></i></a>
          </div>
        </template>
        <template v-else v-slot="songData">
          <div class="songItem noWrap">
            <a :href="'/#/song?id='+songData.row.id">{{songData.row.name}}</a>
            <span class="origin" v-if="songData.row.alias.length!=0">-{{songData.row.alias[0]}}</span>
            <a :href="'/#/mv?id='+songData.row.mv"><i class="mvPlay" v-if="songData.row.mvid!=0"></i></a>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="时长" width="110">
        <template v-slot="songData">
          <div class="iconGroup btnShow">
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="添加到播放列表"
              placement="bottom-start"
            >
                <i class="add" @click="addSong(songData.row)"></i>
            </el-tooltip>
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="收藏"
              placement="bottom-start"
            >
                <i class="collect"></i>
            </el-tooltip>
            <el-tooltip
              :open-delay="200"
              class="item"
              effect="light"
              content="分享"
              placement="bottom-start"
            >
                <i class="share"></i>
            </el-tooltip>

          </div>
          <span v-if="!songsList.taste" class="dtShow">{{songData.row.dt|timeFilter}}</span>
          <span v-else class="dtShow">{{songData.row.duration|timeFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column label="歌手">
        <template v-slot="songData">
          <a
            class="noWrap"
            v-if="!songsList.taste"
            :href="'/#/artist?id='+songData.row.ar[0].id"
          >{{songData.row.ar[0].name}}</a>
          <a
            class="noWrap"
            v-else
            :href="'/#/artist?id='+songData.row.artists[0].id"
          >{{songData.row.artists[0].name}}</a>
        </template>
      </el-table-column>
      <el-table-column label="专辑" v-if="isShow">
        <template v-slot="songData">
          <a
            v-if="!songsList.taste"
            class="noWrap"
            :href="'/#/album?id='+songData.row.al.id"
          >{{songData.row.al.name}}</a>
          <a
            v-else
            class="noWrap"
            :href="'/#/album?id='+songData.row.album.id"
          >{{songData.row.album.name}}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      url: "",
      isShow: true
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.url = this.$route.path;
      if (this.url == "/album") {
        this.isShow = false;
      }
    },
        ...mapActions(["addSong", "playInfo"])
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
.rankNum {
  span {
    font-size: 12px;
    color: #333;
    display: inline-block;
    width: 30px;
  }
  .playIcon {
    background: url("../../assets/table.png");
    background-position: 0 -103px;
    width: 17px;
    height: 17px;
    display: inline-block;
    vertical-align: middle;
    // margin-left: 20px;
    &:hover {
      background-position: 0 -128px;
    }
  }
}

.noWrap {
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
  margin-top: 15px;
  .listTitle {
    align-items: center;
    height: 35px;
    border-bottom: 2px solid #c20c0c;
    .play {
      float: right;
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
  }
}
</style>