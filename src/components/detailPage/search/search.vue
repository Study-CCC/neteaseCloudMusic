<template>
  <div class="searchBox pageCon">
    <div class="searchInput">
      <el-input suffix-icon="el-icon-search" @change="searchChange" v-model="value"></el-input>
    </div>
    <div class="searchCon">
      <div class="typeCon">搜索“{{searchText||search}}”，找到 {{num}} 首单曲</div>
      <el-menu @select="eve" class="el-menu-demo" mode="horizontal" default-active="1">
        <el-menu-item index="1">
          单曲
        </el-menu-item>
        <el-menu-item index="100">
          歌手
        </el-menu-item>
        <el-menu-item index="10">
          专辑
        </el-menu-item>
        <el-menu-item index="1006">
          歌词
        </el-menu-item>
        <el-menu-item index="1000">
          歌单
        </el-menu-item>
        <el-menu-item index="1009">
          主播电台
        </el-menu-item>
      </el-menu>
      <noFind v-if="noFind"></noFind>
      <router-view v-else @getNum="getNum"></router-view>
    </div>
  </div>
</template>

<script>
import noFind from "./noFind";
import Song from "./song";
import Artist from "./artist";
import Album from "./album";
import SongList from './songList'
import Lyric from './lyric'
import Dj from './dj'
import {mapGetters} from 'vuex'
import { getSearch } from "../../../utils/api/searchApi";
export default {
  data() {
    return {
      value:'',
      searchText: "",
      num:0,
      limit:30,
      noFind:false,
      data:{}
    };
  },
  methods:{
    searchChange(e){
      this.searchText = e
    },
    getNum(num){
      this.num = num
    },
     eve(e){
      this.limit = (e==100||e==10)?90:30
      if(!this.value) return this.noFind=true
  getSearch(this.value, e,false,this.limit)
        .then(res => {
          this.noFind =res.data.result[Object.keys(res.data.result)[0]]==0?true:false
      this.data =res.data.result
      this.$router.push(`/search/m?type=${e}`)
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  components: {
    noFind,
    Song,
    Artist,
    Album,
    SongList,
    Lyric,
    Dj
  },
  computed:{
    ...mapGetters(['search'])
  }
};
</script>
<style lang='less' scoped>
.searchBox {
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
        width: 148px;
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