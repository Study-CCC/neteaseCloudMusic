<template>
  <div class="playlistItemBox">
    <div class="hotImg">
      <img :src="item.picUrl" alt />
      <a :href="'/#/playlist?id='+item.id" class="hotClick msk"></a>
      <div class="itemBottom">
        <span class="headset"></span>
        <span>{{item.playCount||item.playcount|numFilter}}</span>
        <span @click="listPlay" class="video-play"></span>
      </div>
    </div>
    <a class="itemTit" :href="'/#/playlist?id='+item.id">{{item.name}}</a>
    <p v-if="personal">
        {{item.copywriter}}
    </p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {};
  },methods:{
    async listPlay(){
      const {data,status} = await this.$http.get(`/playlist/detail?id=${this.item.id}`)
      let tracks = data.playlist.tracks
     this.addList(tracks)
    },
    ...mapActions(['addList']),
    ...mapActions(['addList'])
     },
  props: ["item","personal"]
};
</script>
<style lang='less' scoped>
.playlistItemBox {
  .hotImg {
    width: 140px;
    height: 140px;
    position: relative;
  }
  .hotClick {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  .msk {
    background: url("../../assets/coverall.png");
  }
  img {
    width: 100%;
    height: 100%;
  }
  .itemBottom {
    height: 27px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    background: url("../../assets/coverall.png");
    background-position: 0 -537px;
    font-size: 12px;
    color: #ccc;
    .headset,.video-play {
      background: url("../../assets/iconall.png");
    }
    .headset {
      width: 14px;
      height: 11px;
      background-position: 0 -24px;
      margin:0 5px;
    }
    .video-play {
        cursor: pointer;
      margin-left: auto;
         width: 16px;
    height: 17px;
    background-position: 0 0;
    margin-right: 5px;
    &:hover{
        background-position: 0 -60px;
    }
    }
  }
  p{
      font-size: 12px;
      color:#999;
  }
  .itemTit {
    color: #000;
    vertical-align: middle;
    font-size: 14px;
    width: 100%;
    word-break: break-all;
    &:hover{
        text-decoration: underline;
    }
  }
}
</style>