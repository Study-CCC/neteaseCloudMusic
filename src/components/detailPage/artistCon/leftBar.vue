<template>
  <div class="leftBarBox">
    <h3>
      {{artist.name}}
      <span v-if="artist.alias[0]">{{artist.alias[0]}}</span>
    </h3>
    <div class="imgBox">
      <img :src="artist.img1v1Url" alt />
      <a v-if="artist.accountId" :href="'/#/user/home?id='+artist.accountId" class="home"></a>
      <a href="#" class="collect"></a>
      <div class="msk"></div>
    </div>
    <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
      <el-menu-item index="1"><a :href="'/#/artist/song?id='+id">热门作品</a></el-menu-item>
      <el-menu-item index="2"><a :href="'/#/artist/album?id='+id">所有专辑</a></el-menu-item>
      <el-menu-item index="3"><a :href="'/#/artist/mv?id='+id">相关MV</a></el-menu-item>
      <el-menu-item index="4"><a :href="'/#/artist/desc?id='+id">艺人介绍</a></el-menu-item>
    </el-menu>

  
    <router-view :hotSongs="hotSongs" :total="mvSize"  :authName="artist.name"></router-view>
  </div>
</template>

<script>
import {getArtist} from '../../../utils/api/artistApi'
export default {
  data() {
    return {
      artist: {
        alias:[]
      },
      hotSongs: [
      
      ],
      mvSize:0,
      id:0
    };
  },
  created() {
    this.getData();
  },
  methods: {
     getData() {
       this.id = this.$route.query.id;
       getArtist(this.id).then(res=>{
         this.artist = res.data.artist;
      this.hotSongs = res.data.hotSongs;
      this.mvSize = res.data.artist.mvSize
       }).catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  a {
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
h3{
  font-size: 24px;
  font-weight: normal;
}
 
  
  .play {
    background: url("../../../assets/table.png") no-repeat;
    background-position: 0 -103px;
    width: 17px;
    height: 17px;
    float: left;
    margin-right: 20px;
    &:hover {
      background-position: 0 -128px;
    }
  }
 
  h3 {
    font-size: 24px;
    color: #333;
    line-height: 30px;
    span {
      font-size: 14px;
      color: #999;
    }
  }
  .imgBox {
    height: 300px;
    width: 640px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    a {
      width: 96px;
      height: 32px;
      display: block;
      background: url("../../../assets/iconall.png");
      position: absolute;
      z-index: 99;
    }
    .home {
      background-position: 0 -1156px;
      bottom: 18px;
      right: 116px;
    }
    .collect {
      bottom: 18px;
      right: 20px;
      background-position: 0 -500px;
    }
    .msk {
      background: url("../../../assets/ban_mask.png");
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .el-menu-demo {
    width: 638px;
    height: 36px;
    text-align: center;
    border: 1px #ccc solid;

    .el-menu-item {
      width: 25%;
      height: 100%;
      line-height: 36px;
      a{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
 

}
</style>