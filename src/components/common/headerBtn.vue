<template>
       <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button class="playBtn" size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button class="addBtn" size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add">收藏</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened"><span>{{shareCount?('('+shareCount+')'):'分享'}}</span></el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download">下载</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square">
            <span>({{commentCount||0}})</span>
          </el-button>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      };
    },
    props:['shareCount','commentCount']
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