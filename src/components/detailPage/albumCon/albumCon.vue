<template>
  <div class="albumConBox pageCon">
    <el-row>
      <el-col :span="19">
        <LeftBar v-if="flag" :leftData="leftData" />
      </el-col>
      <el-col :span="5">
        <RightBar v-if="flag" :rightData="rightData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from "./leftBar";
import RightBar from "./rightBar";
import {getAlbum,getArtistAlbum} from '../../../utils/api/albumApi'
export default {
  data() {
    return {
      leftData: { songsList: {}, btnValue: [] },
      authId: 0,
      id: 0,
      rightData: {},
      flag:false
    };
  },
  created() {
    this.getLeftData();
  },
  methods: {
    async getLeftData() {
      this.id = this.$route.query.id;
      getAlbum(this.id).then(res=>{
         this.leftData.album = res.data.album;
      this.leftData.songsList.tracks = res.data.songs;
      this.leftData.songsList.trackCount = res.data.album.size;
      this.leftData.btnValue.push(res.data.album.info.commentCount);
      this.leftData.btnValue.push(res.data.album.info.shareCount);
      this.authId = res.data.album.artist.id;
      }).catch(() => {
          this.$message.error("唱片数据获取失败");
        });
      this.flag = true
      this.getRigthData();
    },
     getRigthData() {
      getArtistAlbum(this.authId).then(res=>{
        res.data.hotAlbums.length = 5
        this.rightData.hotAlbums = res.data.hotAlbums;
      }).catch(() => {
          this.$message.error("唱片数据获取失败");
        });}
  },
  watch:{
    $route(){
      this.getLeftData()
      this.getRigthData()
    }
  },
  components: {
    LeftBar,
    RightBar
  }
};
</script>
<style lang='less' scoped>

</style>