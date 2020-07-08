<template>
  <div class="headerBox">
    <el-row>
      <el-col :span="4">
        <a href="#">
          <h1 class="logo"></h1>
        </a>
      </el-col>
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#ccc"
          active-text-color="#FFF"
          background-color="#242424"
        >
          <el-menu-item index="1">
            <router-link to="/">发现音乐</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/my">我的音乐</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/friend">朋友</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to>商场</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to>音乐人</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            下载客户端
            <i class="hot"></i>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <!-- 输入框 -->
        <el-input  v-model="searchTxt" @change="search" @input="searchInput" size="mini" placeholder="音乐/视频/电台/用户">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-card v-clickOutSide="handleClickOut" v-show="isInput" :body-style="{padding:'0'}" class="boxCard">
          <div slot="header">
            <h3>搜{{searchTxt}}相关用户></h3>
          </div>
          <ul>
            <li v-for="(item,i) in searchCon" :key="i">
              <div class="searchItem clearFloat">
                <span class="searchType">{{item.type}}</span>
              <ul class="ulBox">
                <li v-for="item1 in item.data" :key="item1.id">
                  <a :href="item.url+item1.id"><span class="searchInfo textOver">{{item1.name}}</span></a>
                </li>
              </ul></div>
            </li>
          </ul>
        </el-card>
        <!-- 按钮 -->
        <el-button size="mini" round>创作者中心</el-button>
        <!-- 登录a标签 -->
        <span class="login" @click="loginShow()">登录</span>
      </el-col>
    </el-row>
    <LogResBox @close="close" v-show="show" />
  </div>
</template>

<script>
import LogResBox from "./logResBox";
import clickOutSide from "../../utils/clickoutside";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      show: false,
      searchTxt: "",
      timer: null,
      searchCon:[],
      isInput:false,
      type:['专辑','歌手','歌单','单曲'],
      url:['/#/album?id=','/#/artist?id=','/#/playlist?id=','/#/song?id=']
    };
  },
  methods: {
    loginShow() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    handleClickOut(){
      this.isInput = false
    },
    search(e){
      this.setSearch(e)
      this.$router.push(`/search?s=${e}`)
    },
    searchInput() {
      this.isInput = true
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getSearch()
      }, 100);
    },
    async getSearch(){
      const {data,status}=await this.$http.get(`/search/suggest?keywords=${this.searchTxt}`)
      const {albums,artists,playlists,songs}= data.result
      let obj = {albums,artists,playlists,songs}
      let i = 0 
      this.searchCon = []
      for(let key in obj){
          if(obj[key]){
            let item = {type:this.type[i],data:obj[key],url:this.url[i]}
            this.searchCon.push(item);
          }
          i++;
      }
    },
    ...mapMutations({
      setSearch:'SET_SETSEARCH'
    })
  },
  components: {
    LogResBox
  },
  directives: { clickOutSide }
};
</script>
<style lang='less' scoped>
.headerBox {
  background-color: #242424;
  min-width: 980px;
  height: 70px;
  .el-row {
    width: 1100px;
    margin: 0 auto;
    .logo {
      margin: 0;
      width: 176px;
      height: 69px;
      line-height: 70px;
      background: url("../../assets/topbar.png") no-repeat;
      background-position: 0 0;
      padding-right: 20px;
    }
    .el-menu {
      .el-menu-item {
        font-size: 14px;
        line-height: 70px;
        height: 70px;
      }
      .hot {
        background: url("../../assets/topbar.png") no-repeat;
        background-position: -190px 0;
        width: 28px;
        height: 19px;
        position: absolute;
        top: 20px;
      }
    }
    .el-input {
      margin-top: 19px;
      background-color: #fff;
      width: 170px;
      border-radius: 5px;
    }
    .el-button {
      margin-left: 20px;
      margin-right: 20px;
    }
    .boxCard {
      position: absolute;
      z-index: 99;
      top: 60px;
      width: 250px;
      h3 {
        font-size: 12px;
        color: #999;
        font-weight: normal;
        // border-bottom: 1px solid #cccccc;
      }
      ul{
        li{
          .searchType{
            font-size: 12px;
            margin-top: 10px;
            width: 60px;
            display: inline-block;
            text-align: center;
          }
      
          ul{
                ul:nth-child(2n){
          background-color: #f7f7f7;
          }
            width: 180px;
            float: right;
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            font-size: 12px;
            li{
              margin: 5px;
              a{
                width: 100%;
              }
              .searchInfo{
                width: 170px;
                display: inline-block;
              }
              &:hover{
                background: color(#ccc);
              }
            }
          }
        }
      }
    }
    a {
      color: #787878;
      width: 28px;
      //   margin-left: 19px;
    }
    .login {
      font-size: 12px;
      color: #999;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>