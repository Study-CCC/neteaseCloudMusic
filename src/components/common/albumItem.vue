<template>
  <div class="albumItem">
    <img :src="item.blurPicUrl" alt />
    <a :href="'/#/album?id='+item.id" class="bgc"></a>
    <a href="#" @click="playList" class="play"></a>
    <p>
      <a class="itemName" :href="'/#/album?id='+item.id">{{item.name}}</a>
    </p>
    <p>
      <a class="authName" :href="'/#/artist?id='+item.artist.id">{{item.artist.name}}</a>
    </p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {};
  },
  methods:{
    async playList(){
       const {data,status} = await this.$http.get(`/playlist/detail?id=${this.item.id}`)
    },
    ...mapActions(['addList'])
  },
  props: ["item"]
};
</script>
<style lang='less' scoped>
.albumItem{
  position: relative;
      margin-top: 20px;
      margin-right: 35px;
      &:hover{
        .play{
        display: block;
      }}
      img {
        width: 100px;
        height: 100px;
      }
      .itemName {
        width: 100px;
        display: inline-block;
        color: #000;
        font-size: 12px;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
      }
      .authName{
                display: inline-block;
        width: 100px;
        font-size: 12px;
        color: #666;
         white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
      }
      .bgc {
        position: absolute;
        top: 0;
        left: 0;
        width: 118px;
        height: 100px;
        background: url("../../assets/coverall.png");
       background-position: 0px -570px;
      }
      .play {
        position: absolute;
        display: none;
        width: 22px;
        height: 22px;
        left: 72px;
       top: 70px;
        background: url("../../assets/iconall.png");
           background-position: 0px -85px;

      }
    
}
</style>