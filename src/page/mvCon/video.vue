<template>
  <div class="videoBox" v-loading="loading" @mouseleave="leaves" @mousemove="moves">
    <video ref="video" width="640" height="360" :src="videoData.mvUrl"></video>
    <div class="videoPlay">
      <i class="big" v-if="!playInfo.isPlaying" @click="videoPlay"></i>
      <div :class="['videoCor',isUp?'up':'down']" @mouseenter="isUp=true" @mouseleave="isUp=false">
        <i :class="['small',playInfo.isPlaying?'playing':'pause']" @click="videoPlay"></i>
        <span class="current">{{playInfo.currentTime|timeFilter}}</span>
        <el-slider @change="timeChange" class="rateSli" v-model="value"></el-slider>
        <span class="durtime">{{videoData.duration|timeFilter}}</span>
        <i class="sound" @click="contrSound=!contrSound"></i>
        <div v-if="contrSound" class="contrSound">
          <el-slider @input="soundChange" v-model="soundNum" vertical height="83px"></el-slider>
        </div>
        <i class="fullScre"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      soundNum: 50,
      loading: false,
      contrSound: false,
      isUp: true,
      moveTimer: null,
      timer: null,
      playInfo: {
        isPlaying: false,
        currentTime: 0
      }
    };
  },
  created() {
  },
 watch:{
   $route(){
     this.videoInit()
   }
 },
  methods: {
    videoInit(){
      clearInterval(this.timer);
      let video = this.$refs.video;
       video.pause();
       video.currentTime = 0
       this.playInfo.currentTime = 0
       this.playInfo.isPlaying = false
       this.value = 0
    },
    videoPlay() {
      clearInterval(this.timer);
      let video = this.$refs.video;
      video.volume = this.soundNum / 100;
      this.playInfo.isPlaying = !this.playInfo.isPlaying;
      if (!this.playInfo.isPlaying) {
        video.pause();
      } else {
        this.timer = setInterval(() => {
          if (this.playInfo.currentTime >= this.videoData.duration) {
            this.playInfo.currentTime=this.videoData.duration
            this.playInfo.isPlaying = false;
            setTimeout(() => {
              this.videoInit()
            }, 2000);
            return
          }
          if (
            video.buffered.end(video.buffered.length - 1) < video.currentTime
          ) {
            
            this.loading = true;
          } else {
            this.loading = false
            this.playInfo.currentTime = video.currentTime*1000;
            this.value = parseInt(
              (this.playInfo.currentTime * 100) / this.videoData.duration
            );
          }
        }, 1000);
        video.play();
      }
      
    },
    timeChange(e) {
      let video = this.$refs.video;
      let currentTime = (e * this.videoData.duration) / 100;
      this.playInfo.currentTime = currentTime;
      video.currentTime = currentTime / 1000;
      // this.getLoad();
    },
    soundChange(e) {
      let video = this.$refs.video;
      video.volume = e / 100;
    },
    moves() {
      this.isUp = true;
      clearTimeout(this.moveTimer);
      this.moveTimer = setTimeout(() => {
        this.isUp = false;
      }, 3000);
    },
    leaves() {
      clearTimeout(this.moveTimer);
      this.isUp = true;
    }
  },
  props: ["videoData"]
};
</script>
<style lang='less' scoped>
.videoBox {
  width: 640px;
  height: 360px;
  overflow: hidden;
  background: #000;
  .videoPlay {
    width: 100%;
    height: 100%;
    position: relative;
    top: -100%;
    .playing,
    .play,
    .sound,
    .contrSound {
      background: url("../../assets/playbar.png");
    }
    .playing {
      width: 34px;
      height: 32px;
      margin-left: 10px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAXVBMVEX///////////////////////////9HcEz////////////////////////////////////////////////////////////////////////////////////////////0ao/XAAAAHnRSTlNoGQgOBRwUACYBIRsQHxEpAyNhCzQKLkdNzVc6WFniYId1AAABW0lEQVQ4y5WU0ZKDIAxFExCKKCBohWrb///MTWqntc7ulL0PMMLxxkgCnPZqn/pYhN320DSNINE07LAXQoAYpX9IjoKgA8KA1KicJTmFWr6hDWkZUHbOSwJIS56tYqh9I21z9minK7x0myz688bAk1Ch0PtlnUOY10JeJagnw8ggiLgB5GCidc5GEzIZESOGDWkbiUSkyUSHmoQumikRg5JtgJIR2hZIs6FMUHuvkTIzc4JitaC0gE3UBDBFhc6yzWNSkdcU28CJTa6QTacxXi7ROR5RdybDlW0IaUacIAWlPZr73cTII3qtQoIJx+YEHCdDMVr2ijdJNKpealMgcyRCvFtgtX6Ue0SO3q6wOM+I8DbB7Poj0rsZkvViQwCCkudPhB4DwH+Qb4EqPvd70hW/ruYAKo5xXwzdVgzdoRgqSqqmMGvK+5cmuR6apKbVahq2pu2rLo+/r6AfJestQtEz7SEAAAAASUVORK5CYII=);
      cursor: pointer;
    }
    .pause {
      width: 34px;
      height: 32px;
      margin-left: 10px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAAgUNLURLTToJEiUpSBcE1fVgn9plgu0AAADESURBVCjPfZLJcsQgDESbRWqx2EwS/v9bc7AhjCuDbqpXam0N3JGKiapYSXiPbJxheQEukkc8k2vhjAcZ3SDeqKWNrBWl+bvGKGFVD0K76iLl0ToJIwBkasZzKmUGYKxX/rPUVhoQeNw9+6tO5A8GlEsWQO9f35NFFhjPiXqfoicNwrSg/ro1EgVKt6Ih6qhQtv9Qo34SDJTdGJvh15Xj+8qbQ+3Ou3kK2udXwhu1+jlB/TMA0IZtXHrYZmc2AAjDorPtL+4MCs9tL4/kAAAAAElFTkSuQmCC)
        no-repeat center;
      cursor: pointer;
      &:hover {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAZlBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ulurIAAAAIXRSTlMACQgYESEcA2gGDg0lFCkeYRUuV2YyS0hNOlk2RXj2263YUJsCAAABVElEQVQ4y5WU6XKDMAyEY3zJFz4wV0gP3v8lK5dA0zSdOPrFwDfelbzidHqppFTXkvIxoIjR7Lu0IUo+ArSjwnMsL6jTfyDZGCd4unQh59BdEhfONL8YRRjlSwdHdQunjNwwkjDRTgBhmFPbpnkIAFMrbhjZIHGGfGktGvGe2/aS4YzMoaUMRSL0Fn3G0lEUtg/IUKN2GccnCGgxRsc0aZriLAWYuLtKKS0WyD36Y5Riu42SykTeZ1iEVvshHYyWau38ZyqdFIbaEbrrMdLQHkLxj6/Xj8EKVxjsIEBPjdx0RphsJPhg1/X9zfJolCLRDjBuSor5DmbO1IasaxEzOEw+Q+fZhvAAyf8gKIYeCPMJAt+RDC2eeCAoRk0ZOORXkOdCz+0+b7pidBUXUHGNNWGoiNQRzBGD6bdgjnfBrIj3v0uiXlu1moWtWfuqn8fOne4/fwHyLiZPlvQt6gAAAABJRU5ErkJggg==);
      }
    }
    .big {
      position: absolute;
      top: 45%;
      left: 45%;
      width: 74px;
      height: 74px;
      cursor: pointer;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAwFBMVEUAAAATExMlJSUHBweRkZH///////9HcEz09PT///////////////8cHBz///+0tLT////////////b29vy8vLv7+////////98fHz///9AQEA3Nzf////Pz8////9lZWXDw8P////////////e3t6bm5vY2Njw8PCxsbH///+5ublgYGBdXV3////////////k5ORdXV0wMDDt7e2mpqb////h4eF4eHhCQkKNjY3JyclPT0/U1NTQ0NDc3Nzg4ODNvLiUAAAAQHRSTlNmaGlnc2F+APCABx95aWR3DVMKe+1+WitxSmtrA3pxb3g+Imh8oNDrr1d4b244OiXbg3Pnp3fYjnmZwn7Lx9R8wCePZgAAAi9JREFUSMell9da3DAQhcdVc9zLFrb3Ql3CsoEEkrz/W+WCJWAsW3J8Lm39n+yZ0dEMCam8wyKNpgEQTKN0cfDkq0jyLLmLXBTkRneJFuz3XABzezY0DSLDHM7sOQC35yth3wEQ31hUkHUTA3D8WjhJgdw2SCLDzoE0qYb7Abo2VcruIuhXwOMBEJtUIzMGBmMZ7DnABSl0AThZGc5W+DMipUY5VtlX2FthYpKGwglWXhEeO5iERJq0My7AA6xN0pS5xuAz3AdGpK0R0P+Ak0Ad52LMg+QffImYGinG5Tu8RDdsBoddLM+wA5sayobzBvvIqbFy+EKQED3Zxpvd9ql+654QJDIXkjN4z8w/H6phA24mSNziSvJyx8x8/FFNX+FWkHBwLXnHb3p9roKv4QjyXFjVMO82lhy24Hp0wJxqYObti5ye40ALeZI/YN49WvJ4LyjFTAEzf/8mWTFDShGGSpg7+3I2h4hoClMNM9+XNjcxpQCGDsy7TalMAgJIC2bef1kCNICPpURrf3Zp5xAn3YBx51ESMK1UyVI9RKRVJNzZW9IiUZcn8++XivJUHoyq2p7joDqSzNvn6iNZbwZ83NSZQYUNndlfD/U2JDfAdw+z6g1Qbr0q9zxbr9z0N8fXJx3Tb3XdtLvoWl2x7S73Vm2FEAOstX87zIsNTbtWSmRNmrhM0j6u/7d9bNe4tmuZ2zXrLccE1YCybDQaWVaj0ajlUPZpHDy57qluHPwLCJFHIPLGbYAAAAAASUVORK5CYII=)
        no-repeat center;
      &:hover {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAABKVBMVEU7Ozv///////9JSUn///////8+Pj5HcEz09PT///88PDz///9DQ0P///////////////////9BQUH///////////////////////9OTk7///////9VVVX///9dXV3///////////////////91dXVgYGBSUlJubm7///////////9TU1NmZmZpaWmnp6f///9ZWVn////////////////////Dw8P////i4uJycnL///////9GRkb////y8vL////////Ozs5qamry8vKWlpb///9jY2OFhYXGxsbo6Ojv7+/////////Z2dn///+ZmZl6enrh4eGJiYnc3Nx/f3+BgYH////////AwMCysrK5ubn///////+kpKTW1taSkpKnp6eHh4fV1dWbfFtZAAAAY3RSTlOFAgOJAQSFAPOZhQaICBkjDgyGHgkxFRsrixATjjKQEhcuJSibko2XCgsgh5SWkIGPOBFjTZSSU5aZdnqIhPE8cpSJmI1viYzK5u6OPpWHrZ3fpNuLjD1/xLzBjD+Plam0jNY27mMaAAAFIUlEQVRYw62Y+1faWBDHL1BoRgQSIBCAQAKCvJWXIIIc8dWqdbfbh1vbutv9//+InZsA5HFjomV+8nj0c74zczMv8tbF3qzN7S/JsxCfz+/3BzXDH3y+Z4HEkeOjkHA4EklqFomEw2EE+hxpxIHjQ0wkWRcEns9qxvO8UE8iL+hzoBG2IOTUBD5bTKUUJaqboqSKWV6oRVAbE2ZH6aA630sp0XSiEVtbI5GOKqkeX9dhriiUpIGKqWiiUSpLqiqKMpooqqpULiEuVdRgdmGEIamGoDRyVLk76E9mt0OA4e1s0h90ZRVpFFYLh23CiE1SUuhRkCTe9Q/AYgf9H6JEYT0haRNGTCRNUi6aKEny4AQA4Kzza9GcEjJtLn51zuhvTgayVEpEcygs6DexiNm5iJBNpWOSOKCCjj6HiMlCn4+otIEoxdKprBAxR59YSEUlUVK/TgDGnQBhWKAzBph8VUsJpWhhEaN3SSGXbpTF0RDOOzvEwXY65zAcieVGOickjT5uUFRTDp2TL9G1JnG2nSa6edlFJ3NUlw2FudNJ3QeAC+JiFxixFWvtIlmTwkIRSfMZjK+Iq12N4X6OrKIQXrNWKH+4llUaUncGH5rEgzU/wKwrNZRsLew3oVBUkk8lyvKDR5LGepDLiRSfXMkia/dy6ZJ4CWMTaYeaE2sMl2IJw7Vykazc60Vj6gjgysgJLY2NuwIYqbFob+UiWWYP3ZPuhsbcISge30WLxx1gFzC8k9DFZRaJLqpeRPdO4MhM2t0NUEMaG3YEJ+hisa7LoihNVEMawHnTiIojKFNFywSmCGOwmucwkBqaLB31xqeJkg+gY/x0kZTJHxbQDhHGFvYTDmRNFvWQolaixsQkCkmFSqvdblUQFtBhVtZ4JUtH+YKYPhqpjgm1G6gWWo+nH/893m9XCvmMFjKrsA6NFiaRekho0AV8nXMAY1XZiU8z+Ur7Pcdx//21t9/aeGmuOQBzfKcCDTxFRXilofaN6aOoQPWwdXyKKO7m295xu8UWdgR9taHwER0VTGajNOhfTAUTUYX2HqfbJxTWrrCEfaGBj2aTQYryBTF/5S6AqfrSUFXWKO7m0UFYCKBbxhxisBBFQyWN4IxYUPnC/hrFcR//MQgzsM5gJNFgURSNOg1Vx4aqGFHc6d9/roTFDT52aLBo3N8SLeoxdQLXLiiOe/8HprJiYV3DRI1pcV+ixBksXFHc6TsUpunaoBYwE1coLYHiLTTdUVTYcatQpbLW3yHcinoKlyh5CFMvKO70cb9ymJluUAEYymYUAPGE4rh3LfwiDcECeDXqRvNwjYrbUF4dtKnKwNAcK69hx9dliZUx7C94DKwMGh+D9yfKfFeGJ+r5w8HPkPXaDR/OM5+zp2/Q+Dk7FhlPlcFUZBxKn8d6ZSp97IJsr6Ls8m4uyA5twlLb2U3H3CYcmld810vHMTcvp5aq9cFvN582fZDRoC0tddPof5q683TTnfNV9thgbfTs8UObGap0ZjjMO80MGev44TQUrSaZjOMkYx+KmKOabb7yNKqxB0g6Pmpjn9PUxxogHcZal1mUPdZuhu0DeLKNyA4D8hNmzz5sb1aA+b3XFeCJrhOMFcCwmNz/7mKyxXXJsMR13ZY44rLE2VZLZ5LrarnFhXeba7jDceB60QyEQoHm4voFxwHryeLHb5wsHA4p3+kh5fsLDymm8056fd4R6XXnxeedbR6dtnoKsx3o+OV97hUHuq2eDbd7zHzFifV/0Ogo7eAW+MoAAAAASUVORK5CYII=);
      }
    }
    .up {
      height: 42px;
    }
    .down {
      height: 0;
      transition-delay: 1000ms;
      overflow: hidden;
    }
    .videoCor {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      transition-duration: 1000ms;
      .rateSli {
        width: 420px;
      }
      .contrSound {
        position: absolute;
        bottom: 35px;
        right: 45px;
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
        width: 25px;
        height: 25px;
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .fullScre {
        width: 34px;
        height: 34px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAQMAAAAlhr+SAAAABlBMVEX///////9VfPVsAAAAAnRSTlMAgJsrThgAAAArSURBVAgdBcAxDQAgDACw8iMJaYhDwCQggYOTY1mIorg8NsFCJzhMhpZafvJPCsNDJhdLAAAAAElFTkSuQmCC)
          no-repeat center;
        &:hover {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAQMAAAAlhr+SAAAABlBMVEX///9HcExwQjx2AAAAAnRSTlPMABHcVXoAAAAtSURBVAgdBYCxDQAQEADvrxYxgCGMZkUj6RTihbiCFQ92bFiI3OQgm8zIxUP4r0gJqtt6EUUAAAAASUVORK5CYII)
            no-repeat center;
        }
      }
      span {
        font-size: 12px;
        height: 34px;
        margin: 0 10px;
        line-height: 34px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>