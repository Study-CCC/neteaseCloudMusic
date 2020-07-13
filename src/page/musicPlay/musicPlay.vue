<template>
  <div
    @mouseenter="isUp=true"
    @mouseleave="isUp=false"
    v-clickOutSide="handleClickOut"
    :class="['musicPlay',isUp||isLock||isShow?'up':'down']"
  >
    <div class="bg"></div>
    <div class="head">
      <i :class="isLock?'lock':'unlock'" @click="isLock=!isLock"></i>
    </div>
    <div class="player">
      <div class="btns">
        <el-tooltip
          class="item"
          effect="light"
          content="上一首(ctrl+⬅)"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i class="pre" @click="preMusic"></i>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="播放/暂停(p)"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i :class="isPlaying?'playing':'pause'" @click="setIsPlaying"></i>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="下一首(ctrl+右箭头)"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i class="next" @click="nextMusic"></i>
        </el-tooltip>
      </div>
      <div class="playImg">
        <img :src="playing.picUrl" alt />
        <a v-if="!(playing.type==2)" :href="'/#/song?id='+playing.id"></a>
        <a v-else :href="'/#/program?id='+playing.id"></a>
      </div>
      <div class="playInfo">
        <div class="infoText">
          <a v-if="!(playing.type==2)"  class="textOver" :href="'/#/song?id='+playing.id">{{playing.name}}</a>
          <a v-else :href="'/#/program?id='+playing.id">{{playing.name}}</a>
          <span class="textOver">
            <a v-if="!(playing.type==2)" :href="'/#/artist?id='+playing.authId">{{playing.authName}}</a>
            <a v-else :href="'/#/djradio?id='+playing.authId">{{playing.authName}}</a>
          </span>
        </div>
  <Audio @scollTime="scollTime" class="infoBar" />
      </div>
      <div class="oper">
        <el-tooltip
          class="item"
          effect="light"
          content="收藏"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i class="collect"></i>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="分享"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i class="share"></i>
        </el-tooltip>
      </div>
      <div class="contr">
        <i class="sound" @click="contrSound=!contrSound"></i>
        <div v-if="contrSound" class="contrSound">
          <el-slider @input="setVolumeNum" v-model="soundNum" vertical height="83px"></el-slider>
        </div>
        <el-tooltip
          class="item"
          effect="light"
          content="循环"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i class="loop"></i>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="播放列表"
          :open-delay="1000"
          placement="bottom-start"
        >
          <i class="playlist" @click="isShow=!isShow"></i>
        </el-tooltip>
      </div>
    </div>
    <MusciList ref="musicList" @close="isShow=false" :isShow="isShow" />
  </div>
</template>
<script>
import MusciList from "./musicList";
import clickOutSide from "../../utils/clickoutside";
import Audio from './audio'
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      soundNum: 50,
      contrSound: false,
      isLock: false,
      isShow: false,
      isUp: true,
      songData: {},
    };
  },
  created() {
    this.getPlay()
  },
  methods: {
    handleClickOut() {
      this.isUp = false;
      this.contrSound = false;
    },
    scollTime(time){
      this.$refs.musicList.scollLyric(time)
    },
    preMusic(){
      this.setPre()
    },
    nextMusic(){
      this.setNext()
    },
    ...mapActions(['setVolumeNum','getPlay','setIsPlaying','setPre','setNext'])
  },
  components: {
    MusciList,
    Audio
  },
  computed: {
    ...mapGetters(['playing','volumeNum','isPlaying'])
  },
  directives: { clickOutSide },
 
};
</script>
<style lang='less' scoped>
.up {
  height: 51px;
}
.down {
  height: 8px;
  transition-delay: 1000ms;
}
.musicPlay {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  transition-duration: 1000ms;
  .bg,
  i,
  .contrSound,
  .head,
  a {
    background: url("../../assets/playbar.png");
  }

  .bg {
    width: 100%;
    height: 53px;
  }
  .player {
    position: absolute;
    left: 50%;
    top: 8px;
    transform: translate(-50%);
    display: flex;
    .btns {
      width: 137px;
      padding: 6px 0 0 0;
      i {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }
      .pre {
        margin-top: 5px;
        background-position: 0 -130px;
        &:hover {
          background-position: -30px -130px;
        }
      }
      .playing {
        width: 36px;
        height: 36px;
        margin: 0 15px;
        background-position: -40px -165px;
      }
      .pause {
        width: 36px;
        height: 36px;
        margin: 0 15px;
        background-position: 0 -204px;
        &:hover {
          background-position: -40px -204px;
        }
      }
      .next {
        margin-top: 5px;
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }
    }
    .playImg {
      width: 34px;
      height: 34px;
      margin: 8px 15px 0 0;
      position: relative;
      a {
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        width: 34px;
        height: 35px;
        background-position: 0 -80px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .playInfo {
      width: 608px;
      position: relative;
      .infoText {
        a {
          max-width: 300px;
          font-size: 12px;
          color: #9b9b9b;
        }
        span {
          max-width: 220px;
          margin-left: 15px;
          font-size: 12px;
          color: #9b9b9b;
        }
      }
    }

    .oper {
      width: 60px;
      i {
        width: 25px;
        height: 25px;
        margin: 11px 2px 0 0;
        display: inline-block;
        cursor: pointer;
      }
      .collect {
        background-position: -88px -163px;
        &:hover {
          background-position: -88px -189px;
        }
      }
      .share {
        background-position: -114px -163px;
        &:hover {
          background-position: -114px -189px;
        }
      }
    }
    .contr {
      display: flex;
      position: relative;
      i {
        width: 25px;
        height: 25px;
        margin: 11px 2px 0 0;
      }
      .contrSound {
        position: absolute;
        bottom: 48px;
        left: -5px;
        width: 32px;
        height: 113px;
        background-position: 0 -503px;
        .el-slider {
          position: absolute;
          left: -2px;
          bottom: 15px;
        }
      }
      .sound {
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .loop {
        background-position: -3px -344px;
        &:hover {
          background-position: -33px -344px;
        }
      }
      .playlist {
        width: 38px;
        background-position: -42px -68px;
        &:hover {
          background-position: -42px -98px;
        }
      }
    }
  }
  .head {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    i {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      cursor: pointer;
    }
    .lock {
      background-position: -100px -380px;
      &:hover {
        background-position: -100px -400px;
      }
    }
    .unlock {
      background-position: -80px -380px;
      &:hover {
        background-position: -80px -400px;
      }
    }
  }
}
</style>