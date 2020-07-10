<template>
  <div class="hotWorkBox">
    <div class="btn">
      <el-button-group>
        <el-button size="mini" type="primary" icon="el-icon-video-play" @click="addList(hotSongs)">播放</el-button>
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
              @click="playInfo(item)"
            ></i>
            <div class="songItem">
              <div class="itemText">
                <a :href="'/#/song?id='+item.id">
                  <span>{{item.name}}</span>
                </a>
              </div>
              <a :href="'/#/mv?id='+item.mv">
                <i class="mvPlay" v-if="item.mv!=0"></i>
              </a>
            </div>
          </el-col>
          <el-col :span="4" :offset="1">
            <BtnGroup class="btnShow" :song=" item " />
            <span class="timeShow">{{item.dt|timeFilter}}</span>
          </el-col>
          <el-col :span="5">
            <a class="alName" :href="'/#/album?id='+item.al.id">{{item.al.name}}</a>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BtnGroup from "../../common/btnGroup";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addSong", "playInfo","addList"])
  },
  props: ["hotSongs"],
  components: {
    BtnGroup
  }
};
</script>
<style lang='less' scoped>
.hotWorkBox {
  .rank,
  .timeShow {
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
    align-items: center;
    font-size: 12px;
    display: inline-block;
    .itemText {
      max-width: 230px;
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