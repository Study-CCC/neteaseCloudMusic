<template>
  <div class="audio">
    <el-slider v-model="value" @change="timeChange" tooltip-class="tipCla"></el-slider>
    <audio ref="audio" :src="'https://music.163.com/song/media/outer/url?id='+playing.id+'.mp3'"></audio>
    <span>
      <span class="playTime">{{currentTime|timeFilter}}</span>
      / {{playing.duration|timeFilter}}
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: 0,
      timer: null,
      currentTime:0
    };
  },
  methods: {
      musicInit(){
          this.currentTime = 0;
            let audio = this.$refs.audio;
             audio.pause();
             this.musicPlay()
      },
    musicPlay() {
      clearInterval(this.timer);
      let audio = this.$refs.audio;
      audio.volume =this.volumeNum / 100;
      this.timer = null;
      if (!audio.paused) {
        audio.pause();
      } else {
        this.timer = setInterval(() => {
          if (this.currentTime >= this.playing.duration) {
            clearInterval(this.timer);
          }
          this.currentTime += 1000;
          this.value = parseInt(
            (this.currentTime * 100) / this.playing.duration
          );
        }, 1000);
        audio.play();
      }
    },
    timeChange(e) {
      let audio = this.$refs.audio;
      let ct =(e * this.playing.duration) / 100;
      this.currentTime = ct;
      audio.currentTime = ct/1000;
    }
  },
  computed: {
      ...mapGetters(['volumeNum','playing','isPlaying'])
  },watch: {
      volumeNum(){
          let audio = this.$refs.audio
          audio.volume=this.volumeNum/100
      },
      'playing.id'(){
          this.musicInit()
      },
      'isPlaying'(){
          this.musicPlay()
      }
  },
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