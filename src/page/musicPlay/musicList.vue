<template>
  <div class="musicList" v-if="isShow">
    <div class="listhd">
      <el-row>
        <el-col :span="14">
          <span class="playItem">播放列表({{playlist.length}})</span>
          <a href="javascript:void(0)" @click="clearList">
            <i class="clear"></i>清除
          </a>
          <a href="javascript:void(0)">
            <i class="collect"></i>收藏全部
          </a>
        </el-col>
        <el-col :span="10">
          <span class="musicName">{{playing.name}}</span>
          <i class="colse" @click="close"></i>
        </el-col>
      </el-row>
    </div>
    <div class="listbd">
      <el-row>
        <el-col :span="14">
          <ul>
            <li v-for="i in playlist.length" :key="i" @click="playInfo(playlist[i-1])">
              <el-row>
                <el-col :span="12">
                  <i :class="playing.id==playlist[i-1].id?'playing':'noPlaying'"></i>
                  <span class="musicName textOver">{{playlist[i-1].name}}</span>
                </el-col>
                <el-col :span="5">
                  <div class="icnBox">
                    <div class="icns">
                      <i class="collect"></i>
                      <i class="share"></i>
                      <i class="clear" @click="deleteSong(playlist[i-1].id)"></i>
                    </div>
                  </div>
                </el-col>
                <el-col class="textOver" :span="4">
                  <a
                    v-if="!(playlist[i-1].type==2)"
                    :href="'/#/artist?id='+playlist[i-1].authId"
                    class="musicAuth"
                  >{{playlist[i-1].authName}}</a>
                  <a
                    v-else
                    :href="'/#/djradio?id='+playlist[i-1].authId"
                    class="musicAuth"
                  >{{playlist[i-1].authName}}</a>
                </el-col>
                <el-col :span="3">
                  <span class="musicTime">{{playlist[i-1].duration|timeFilter}}</span>
                </el-col>
              </el-row>
            </li>
          </ul>
        </el-col>
        <el-col :span="10">
          <div v-if="playing.lyric" ref="lyricShow" class="lyricShow">
            <p
              v-for="(item,i) in lyricArr"
              :key="i"
              :class="lightText==i?'lightHeight':''"
            >{{item.text}}</p>
          </div>
          <div v-else class="noLyric">暂无歌词</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      isUp: false,
      lightText: 0,
      timer: 0,
      currentTime: 0,
      lyricArr: []
    };
  },
  created() {
    this.getList();
    this.getPlay();
    this.lyricCor();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    scollLyric(time) {
      clearInterval(this.timer);
      this.timer = null;
      for (let i = 0; i < this.lyricArr.length - 1; i++) {
        if (
          this.lyricArr[i + 1].time - time > 0 &&
          this.lyricArr[i].time - time <= 0
        ) {
          this.lightText = i;
          this.lyricHeight();
          return;
        }
      }
    },
    lyricCor() {
      clearInterval(this.timer);
      this.timer = null;
      if (!this.playing.lyric) return;
      this.lyricArr = this.playing.lyric.split("\n");
      this.lightText = 0;
      this.lyricArr = this.lyricArr.map(item => {
        item = item.split("]");
        let time = item[0];
        time =
          parseInt(time.slice(1, 3)) * 60000 +
          parseInt(time.slice(4, 6)) * 1000 +
          parseInt(time.slice(7));
         
        let text = item[1]||'';
        return { time: time, text: text };
      });
      this.lyricArr.sort((a, b) => a.time - b.time);
    },
    lyricHeight() {
      if (!this.playing.lyric) return;
      clearInterval(this.timer);
      this.timer = null;
      if (this.isPlaying) {
        this.currentTime = this.playing.currentTime || 0;
        this.timer = setInterval(() => {
          let value = this.lyricArr[this.lightText + 1].time - this.currentTime;
          if (this.lightText == this.lyricArr.length - 1) {
            clearInterval(this.timer);
            this.timer = null;
          }

          if (value <= 50 && value >= 0) {
            this.lightText++;
          }
          this.currentTime += 50;
        }, 50);
      }
    },
    ...mapActions(["clearList", "playInfo", "deleteSong", "getList", "getPlay"])
  },
  props: ["isShow"],
  computed: {
    ...mapGetters(["playlist", "playing", "isPlaying"])
  },
  watch: {
    "playing.id"() {
      this.lyricCor();
      this.lyricHeight();
    },
    lightText() {
      this.$nextTick(() => {
        if (! this.$refs.lyricShow) return;
        else {
          let lyricScroll = this.$refs.lyricShow;
          let lyricTop = this.lightText * 32;
          let scrollTop = lyricScroll.scrollTop;
          if (lyricTop - scrollTop >= 160||lyricTop-scrollTop<0) {
            lyricScroll.scrollTop = lyricTop - 128;
          }
        }
      });
    },
    isPlaying() {
      this.lyricHeight();
    }
  }
};
</script>
<style lang='less' scoped>
.musicList {
  z-index: -1;
  position: absolute;
  left: 50%;
  bottom: 45px;
  width: 986px;
  transform: translate(-50%);
  a {
    font-size: 12px;
    color: #e8e8e8;
  }
  i {
    height: 16px;
    background: url("../../assets/playlist.png");
  }
  .collect {
    width: 16px;
    background-position: -24px 0;
    &:hover {
      background-position: -24px -20px;
    }
  }
  .clear {
    width: 13px;
    background-position: -51px 0;
    &:hover {
      background-position: -51px -20px;
    }
  }
  .musicTime {
    margin-left: 10px;
  }
  .listhd,
  .listbd {
    background: url("../../assets/playbar.png");
    //   position: absolute;
    width: 976px;
  }
  .listhd {
    background-position: 0 0;
    height: 41px;
    span {
      line-height: 39px;
      font-size: 14px;
      color: #e2e2e2;
    }
    .playItem {
      margin: 0 10px;
    }
    a {
      float: right;
      line-height: 39px;
    }
    i {
      vertical-align: middle;
      margin: 0 10px;
    }
    .musicName {
      display: inline-block;
      color: #fff;
      width: 356px;
      text-align: center;
      line-height: 39px;
    }
    .colse {
      width: 30px;
      height: 30px;
      background-position: -195px -21px;
      cursor: pointer;
      // float: right;
    }
  }
  .listbd {
    background: url("../../assets/playlist_bg.png");
    background-position: -1016px 0;
    height: 260px;
    .lyricShow {
      white-space: pre;
      overflow-y: auto;
      height: 260px;
      overflow-x: hidden;
      color: #989898;
      line-height: 32px;
      font-size: 12px;
      text-align: center;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .noLyric {
      text-align: center;
      color: #989898;
      line-height: 32px;
    }
    .lightHeight {
      font-size: 14px;
      color: #fff;
      transition: color 0.7s linear;
    }
    ul {
      height: 260px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #535353;
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background: #252525;
      }
      li {
        height: 28px;
        cursor: pointer;
        &:hover {
          span,
          a {
            color: #fff;
          }
          .icns {
            display: inline-block;
          }
        }
        .icnBox {
          width: 100px;
          height: 23px;
        }
        .icns {
          display: none;
          width: 100px;
          height: 23px;
          .share {
            background-position: 0 0;
            margin: 7px 0 0 10px;
            width: 14px;
            &:hover {
              background-position: 0 -20px;
            }
          }
          .clear {
            margin: 7px 0 0 10px;
          }
        }
        .musicName {
          width: 246px;
        }
        .noPlaying {
          width: 10px;
          margin: 0 10px 0 10px;
          height: 13px;
          background: none;
        }
        .playing {
          width: 10px;
          height: 13px;
          background: url("../../assets/playlist.png");
          background-position: -182px 0;
          margin: 0 10px 0 10px;
        }
        span,
        a {
          display: inline-block;
          color: #ccc;
          font-size: 12px;
        }
      }
    }
  }
}
</style>