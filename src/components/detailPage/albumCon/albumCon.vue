<template>
  <div class="albumConBox">
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
      const { data, status } = await this.$http.get(`/album?id=${this.id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      this.leftData.album = data.album;
      this.leftData.songsList.tracks = data.songs;
      this.leftData.songsList.trackCount = data.album.size;
      this.leftData.btnValue.push(data.album.info.commentCount);
      this.leftData.btnValue.push(data.album.info.shareCount);
      this.authId = data.album.artist.id;
      this.flag = true
      // console.log(this.leftData)
      this.getRigthData();
    },
    async getRigthData() {
      const { data, status } = await this.$http.get(
        `/artist/album?id=${this.authId}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.rightData.hotAlbums = data.hotAlbums;
      this.rightData.hotAlbums.length = 5;
    }
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
.albumConBox {
  padding: 47px 30px 40px 39px;
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
    background-color: #fff;
}
</style>