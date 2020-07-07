<template>
  <div class="audio">
    <el-slider v-model="value" @change="timeChange" tooltip-class="tipCla"></el-slider>
    <audio ref="audio" :src="'https://music.163.com/song/media/outer/url?id='+(playing.type==2?playing.songId:playing.id)+'.mp3'"></audio>
    <span>
      <span class="playTime">{{currentTime|timeFilter}}</span>
      / {{playing.duration|timeFilter}}
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters,mapMutations } from "vuex";
export default {
  data() {
    return {
      value: 0,
      timer: null,
      currentTime:0
          };
  },
  methods: {
    musicInit() {
      clearInterval(this.timer);
      let audio = this.$refs.audio;
      this.currentTime = 0
      this.setCurrentTime(0);
      this.value = 0;
      this.setPause();
      audio.volume = this.volumeNum / 100;
      audio.pause();
    },

    musicPause(){
       clearInterval(this.timer);
       let audio = this.$refs.audio;
       audio.pause();
    },
    musicPlay() {
      clearInterval(this.timer)
      let audio = this.$refs.audio;
      let dt = this.playing.duration
      audio.volume = this.volumeNum / 100;
      setTimeout(() => {
        audio.play()
      }, 0);
        this.timer = setInterval(() => {
          if (this.currentTime >= dt) {
            this.currentTime = dt
            this.musicInit();
          }
          this.currentTime = audio.currentTime*1000
          this.value = parseInt(
            (this.currentTime * 100) / dt
          );
        }, 1000);
      
    },
    timeChange(e) {
      let audio = this.$refs.audio;
      let ct = (e * this.playing.duration) / 100;
      this.setCurrentTime(ct);
      audio.currentTime = ct / 1000;
      this.$emit('scollTime',ct)
    },
    ...mapActions(["setPause","setPlay"]),
    ...mapMutations({
      setCurrentTime:'SET_PLAYTIME',
    })
  },
  computed: {
    ...mapGetters(["volumeNum", "playing", "isPlaying"])
  },
  watch: {
    volumeNum() {
      let audio = this.$refs.audio;
      audio.volume = this.volumeNum / 100;
    },
    currentTime(){
      this.setCurrentTime(this.currentTime)
    },
    "playing.id"() {
      this.musicInit();
      this.setPlay(true)
      this.musicPlay()
    },
    isPlaying() {
      this.isPlaying?this.musicPlay():this.musicPause()
    }
  }
};
</script>
<style lang='less' scoped>
.audio {
  display: flex;
  .el-slider {
    width: 493px;
    position: relative;
    bottom: 10px;
    margin-right: 10px;
  }
  span {
    font-size: 12px;
    color: #797979;
  }
  .playTime {
    color: #a1a1a1;
  }
}
</style>