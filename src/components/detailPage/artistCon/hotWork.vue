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
            <a href="#">
              <i class="play"></i>
            </a>
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
            </div>
            <span class="timeShow">{{item.dt}}</span>
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
export default {
  data() {
    return {};
  },
  props: ["hotSongs"]
};
</script>
<style lang='less' scoped>
.hotWorkBox {
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
    &:hover {
      text-decoration: underline;
    }
  }
  .iconGroup {
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

    .itemText {
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
  .ulItem {
    width: 640px;
    margin-top: 10px;
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