<template>
  <div class="searchBox pageCon">
    <div class="searchInput">
      <el-input suffix-icon="el-icon-search" @change="searchChange" v-model="value"></el-input>
    </div>
    <div class="searchCon">
      <div class="typeCon">搜索“{{searchText||search}}”，找到 {{num}} 个</div>
      <el-menu @select="eve" class="el-menu-demo" mode="horizontal" default-active="1">
        <el-menu-item v-for="item in typeData" :key="item.index" :index="item.index">{{item.data}}</el-menu-item>
      </el-menu>
      <noFind v-if="noFind"></noFind>
      <div v-else v-loading="loading">
        <Song @getNum="getNum" v-if="index==1" />
        <Artist @getNum="getNum" v-if="index==100" />
        <Album @getNum="getNum" v-if="index==10" />
        <SongList @getNum="getNum" v-if="index==1006" />
        <Lyric @getNum="getNum" v-if="index==1000" />
        <Dj @getNum="getNum" v-if="index==1009" />
      </div>
    </div>
  </div>
</template>

<script>
import noFind from "./noFind";
import Song from "./song";
import Artist from "./artist";
import Album from "./album";
import SongList from "./songList";
import Lyric from "./lyric";
import Dj from "./dj";
import { mapGetters } from "vuex";
import { getSearch } from "../../utils/api/searchApi";
export default {
  data() {
    return {
      value: "",
      searchText: "",
      num: 0,
      limit: 30,
      typeData: [
        { index:"1",data: "单曲" },
        { index:"100",data: "歌手" },
        { index:"10",data: "专辑" },
        { index:"1006",data: "歌词" },
        { index:"1000",data: "歌单" },
        { index:"1009",data: "主播电台" }
      ],
      noFind: true,
      index: 0,
      data: {},
      loading: false
    };
  },
  methods: {
    searchChange(e) {
      this.searchText = e;
      this.num = 0;
      let type = this.$route.query.type;
      this.eve(type, e);
    },
    getNum(num,flag,flag2) {
      this.num = num;
       this.noFind = flag
       this.loading = flag2
    },
    eve(e) {
      this.limit = e == 100 || e == 10 ? 90 : 30;
      this.loading = true;
      if (!this.value) {
        this.noFind = true;
        this.loading = false;
        return;
      }
      this.index = e;
      this.noFind = false
      this.$router.push(`/search?s=${this.value}&type=${e}`);
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
  computed: {
    ...mapGetters(["search"])
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