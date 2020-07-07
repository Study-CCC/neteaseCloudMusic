<template>
  <div class="searchBox">
    <div class="searchInput">
      <el-input suffix-icon="el-icon-search" v-model="searchText"></el-input>
    </div>
    <div class="searchCon">
      <div class="typeCon">搜索“火”，找到 131162 首单曲</div>
      <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
        <el-menu-item index="1">
          <a href="#">单曲</a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#">歌手</a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="#">专辑</a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="#">歌词</a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="#">歌单</a>
        </el-menu-item>
        <el-menu-item index="6">
          <a href="#">主播电台</a>
        </el-menu-item>
        <el-menu-item index="7">
          <a href="#">用户</a>
        </el-menu-item>
      </el-menu>
      <Album />
    </div>
  </div>
</template>

<script>
import noFind from "./noFind";
import Song from "./song";
import Artist from "./artist";
import Album from "./album";
export default {
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    noFind,
    Song,
    Artist,
    Album
  }
};
</script>
<style lang='less' scoped>
.searchBox {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  .searchInput {
    width: 420px;
    height: 40px;
    margin: 50px auto;
  }
  .searchCon {
    width: 900px;
    margin: 0 auto;
    .typeCon {
      font-size: 12px;
      color: #999;
      margin: 28px 0 17px;
    }
    .el-menu-demo {
      height: 39px;
      text-align: center;
      border: 1px #ccc solid;

      .el-menu-item {
        width: 126px;
        height: 100%;
        line-height: 36px;
        a {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>