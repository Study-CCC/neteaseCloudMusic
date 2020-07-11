<template>
  <div class="extend">
    <div class="extend-content" v-if="showExtend">
      <el-row>
        <el-col :offset="6">
          <el-menu default-active="1" mode="horizontal" active-background-color="#9B0909">
            <el-menu-item index="1"><router-link to="/discover/recommend">推荐</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/discover/toplist">排行榜</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/discover/playlist">歌单</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/discover/djradio">主播电台</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/discover/artist/cat">歌手</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/discover/album">新碟上歌</router-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="redExtend" v-else></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['showExtend'])
  }
};
</script>
<style lang='less' scoped>
.extend {
  width: 100%;
  min-width: 980px;
    background-color: #c20c0c;
    overflow: hidden;
  .extend-content {
      height: 35px;
    ul {
      border-bottom: none;
        background-color: #c20c0c;
      li {
        color: #fff;
        font-size: 12px;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;
        border-bottom: none;
        &:hover {
          background: #9b0909;
          color: #fff;
        }
      }
    }
  }
  .redExtend{
    height: 5px;
  }
}

.m-sub-up {
  height: 5px;
  border-bottom: none;
}
.m-sub {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
</style>