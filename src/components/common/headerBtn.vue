<template>
       <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button @click="addList(tracks)" class="playBtn" size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button class="addBtn" size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add">收藏</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened"><span>{{shareCount?('('+shareCount+')'):'分享'}}</span></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download">下载</el-button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data () {
      return {

      };
    },
    methods:{
      ...mapActions(['addList'])
    },
    props:['shareCount','tracks']
  }

</script>
<style lang='less' scoped>
  .headerBtn {
      margin-top: 20px;
      .el-button{
         padding:7px 5px ;
      }
      .norBtn {
        margin-right: 10px;
        margin-left: 0;
      }
    }
</style>