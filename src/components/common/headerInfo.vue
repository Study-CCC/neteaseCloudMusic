<template>
  <div class="headerInfoBox">
    <div class="header clearFloat">
      <!-- 头像 -->
      <div class="authImg">
        <img :src="detail.coverImgUrl" alt />
        <span class="msk"></span>
      </div>
    <!-- 介绍 -->
      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <!-- 列表名字 -->
          <h3>{{detail.name}}</h3>
        </div>
        <div class="creatTime">
          <a :href="'/#/user/home?id='+detail.creator.userId">
            <img :src="detail.creator.avatarUrl" alt />
          </a>
          <p>
            <!-- 创建者名字 -->
            <a :href="'/#/user/home?id='+detail.creator.userId">{{detail.creator.nickname}}</a>
            <span>{{Date(detail.creator.createTime)}}创建</span>
          </p>
        </div>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button
            class="norBtn"
            size="mini"
            icon="el-icon-folder-add"
          >({{detail.subscribedCount}})</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened">({{detail.shareCount}})</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download">下载</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square"></el-button>
        </div>
        <!-- 列表描述 -->
        <div class="desc">
          <div class="tag">
            标签:
            <el-tag v-for="(item,i) in detail.tags" :key="i" size="mini" type="info">
              <a :href="'/#/discover/playlist/?cat='+item+'&order=hot'">{{item}}</a>
            </el-tag>
          </div>
          <div class="descCon">介绍: {{detail.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:['detail']
};
</script>
<style lang='less' scoped>
.headerInfoBox{
      .header {
    .authImg {
      width: 177px;
      height: 177px;
      float: left;
      position: relative;
      img {
        height: 100%;
        width: 100%;
      }
      .msk {
        width: 209px;
        height: 177px;
        background: url("../../assets/coverall.png");
        background-position: 0 -986px;
        top: 0;
        left: 0;
        position: absolute;
      }
    }

    .introduce {
      float: left;
      margin-left: 50px;
      width: 530px;
      .headerTit {
        i {
          display: inline-block;
          background: url("../../assets/icon.png");
          width: 54px;
          background-position: 0 -243px;
          height: 24px;
        }
        h3 {
          font-size: 20px;
          color: #333;
          display: inline-block;
          font-weight: normal;
        }
      }
      .creatTime {
        height: 35px;
        margin-top: 20px;
        a{
            color:#0c73c2;
            &:hover{
                text-decoration: underline;
            }
        }
        img {
          height: 35px;
          vertical-align: middle;
          width: 35px;
        }
        p {
          display: inline-block;
          margin-left: 10px;
          font-size: 12px;
          color: #666;
          span {
            margin-left: 10px;
          }
        }
      }
      .desc {
        color: #666;
        font-size: 12px;
        white-space: pre-line;
        .el-tag {
          border-radius: 50%;
          margin: 15px 5px 15px 0;
          a {
            color: #666;
          }
        }
      }
    }
    .headerBtn {
      margin-top: 20px;
      .norBtn {
        margin-right: 10px;
      }
    }
  }

}
</style>