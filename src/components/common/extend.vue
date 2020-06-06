<template>
  <div class="extend">
    <div class="extend-content">
      <el-row>
        <el-col :offset="6">
          <el-menu default-active="1" mode="horizontal" active-text-color="#9B0909">
            <el-menu-item index="1"><router-link to="/recommend">推荐</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/toplist">排行榜</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/playlist">歌单</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/djradio">主播电台</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/artist">歌手</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/album">新碟上歌</router-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.extend {
  width: 100%;
  background-color: #c20c0c;
  height: 35px;
  .extend-content {
    // .el-row{
    //   margin: 0 auto;
    //   width: 70%;
    // }
    ul {
      background-color: #c20c0c;
      // float: left;
      min-width: 1100px;
      margin: 0 auto;
      border-bottom: none;
      
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