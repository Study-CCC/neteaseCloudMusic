<template>
  <div class="albumItem">
    <img :src="item.blurPicUrl" alt />
    <a :href="'/#/album?id='+item.id" class="bgc"></a>
    <a href="javascript:void(0)" @click="playData" class="play"></a>
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
import {getAlbum } from "../../../utils/api/albumApi";

export default {
  data() {
    return {
     
    };
  },methods: {
      playData() {
       getAlbum(this.item.id).then(res=>{
                 this.addList(res.data.songs)
       }) .catch(() => {
          this.$message.error("数据获取失败");
        });
      },
    ...mapActions(['addList'])
  },
  props: ["item"]
};
</script>
<style lang='less' scoped>
.albumItem {
  position: relative;
  margin-top: 20px;
  margin-right: 55px;
  &:hover {
    .play {
      display: block;
    }
  }
  img {
    width: 130px;
    height: 130px;
  }
  .itemName {
    width: 130px;
    display: inline-block;
    color: #000;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .authName {
    display: inline-block;
    width: 130px;
    font-size: 12px;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .bgc {
    position: absolute;
    top: 0;
    left: 0;
    width: 153px;
    height: 130px;
    background: url("../../../assets/coverall.png");
    background-position: 0 -845px;
  }
  .play {
    position: absolute;
    display: none;
    width: 28px;
    height: 28px;
    right: 10px;
    top: 95px;
    background: url("../../../assets/iconall.png");
    background-position: 0 -140px;
  }
}
</style>