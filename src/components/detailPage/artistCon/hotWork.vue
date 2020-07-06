<template>
  <div class="hotWorkBox">
    <div class="btn">
      <el-button-group>
        <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
        <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
      </el-button-group>
      <el-button size="mini" class="norBtn" icon="el-icon-folder-add">收藏热门50</el-button>
    </div>
    <ul class="ulItem">
      <li v-for="(item,index) in hotSongs" :key="item.id">
        <el-row>
          <el-col :span="2">
            <span class="rank">{{index+1}}</span>
          </el-col>
          <el-col :span="12">
            <i
              class="play"
              @click="playInfo({ name:item.name,
                      authId:item.ar[0].id,
                      picUrl:item.al.picUrl,
                      duration:item.dt,
                      id:item.id,
                      authName:item.ar[0].name})"
            ></i>
            <div class="songItem">
              <div class="itemText">
                <a :href="'/#/song?id='+item.id">
                  <span>{{item.name}}</span>
                </a>
              </div>
              <a href="#">
                <i class="mvPlay" v-if="item.mv!=0"></i>
              </a>
            </div>
          </el-col>
          <el-col :span="4" :offset="1">
            <div class="iconGroup">
              <div class="btnShow">
                <el-tooltip
                  class="item"
                  :open-delay="1000"
                  effect="light"
                  content="添加到播放列表"
                  placement="bottom-start"
                >
                  <i
                    class="add"
                    @click="addSong({
                      name:item.name,
                      authId:item.ar[0].id,
                      picUrl:item.al.picUrl,
                      duration:item.dt,
                      id:item.id,
                      authName:item.ar[0].name
                    })"
                  ></i>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  :open-delay="1000"
                  effect="light"
                  content="收藏"
                  placement="bottom-start"
                >
                  <i class="collect"></i>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  :open-delay="1000"
                  effect="light"
                  content="分享"
                  placement="bottom-start"
                >
                  <i class="share"></i>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  :open-delay="1000"
                  effect="light"
                  content="下载"
                  placement="bottom-start"
                >
                  <i class="download"></i>
                </el-tooltip>
              </div>
            </div>
            <span class="timeShow">{{item.dt|timeFilter}}</span>
          </el-col>
          <el-col :span="5">
            <a class="alName" :href="'/#/artist?id='+item.al.id">{{item.al.name}}</a>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addSong", "playInfo"])
  },
  props: ["hotSongs"]
};
</script>
<style lang='less' scoped>
.hotWorkBox {
   .rank,.timeShow{
      color: #999;
      font-size: 12px;
    }
  .btn {
    display: flex;
    width: 640px;
    margin-top: 20px;
    .norBtn {
      width: 105px;
      height: 31px;
      text-align: center;
      margin-left: 5px;
    }
   
    .el-dropdown {
      margin-left: auto;
    }
  }
  a {
    color: #333;
  }
  .iconGroup {
    display: inline-block;
    .timeShow {
      display: none;
    }
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
  .btnShow {
    display: none;
  }
  .alName {
    display: inline-block;
    font-size: 12px;
    width: 70px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .songItem {
    display: flex;
    align-items: center;
    font-size: 12px;
    display: inline-block;
    .itemText {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block;
    }

    .origin {
      color: #aeaeae;
    }
    .mvPlay {
      width: 23px;
      height: 17px;
      background: url("../../../assets/table.png");
      background-position: 0 -151px;
    }
  }
  .ulItem {
    width: 640px;
    margin-top: 10px;
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
    li:nth-child(odd) {
      background-color: #f7f7f7;
    }
    li {
      padding: 6px 10px;
      line-height: 18px;
      &:hover {
        .btnShow {
          display: block;
        }
        .timeShow {
          display: none;
        }
      }
    }
  }
}
</style>