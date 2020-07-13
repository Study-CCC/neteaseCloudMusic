<template>
  <div class="leftBarBox clearFloat">
    <div class="header clearFloat">
      <div class="authImg">
        <img :src="leftData.album.picUrl" alt />
        <span class="msk"></span>
      </div>

      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <span>{{leftData.album.name}}</span>
        </div>
        <div class="creatTime">
          <p>
            歌手:
            <a :href="'/#/artist?id='+leftData.album.artists[0].id">{{leftData.album.artists[0].name}}</a>
          </p>
          <p>发行时间:{{leftData.album.publishTime|creatTimeFilter}}</p>
          <p>发行公司： {{leftData.album.company}}</p>
        </div>
      <HeaderBtn :commentCount="leftData.btnValue[0]" :tracks="leftData.songsList.tracks"  />
    </div></div>
    <div class="desc">
      <h3>专辑介绍</h3>
      <p ref="descCon" :class="['descCon',openFlag?'':'close']">{{leftData.album.description}}</p>
      <a v-if="openShow" href="javascript:void(0)" @click="isOpen">
              {{openFlag?'收起':'展开'}}
              <i :class="openFlag?'closeIcon':'openIcon'"></i>
            </a>
    </div>
    <div class="songlist"></div>
    <SongCon v-if="leftData.songsList.trackCount" :songsList="leftData.songsList"/>
    <CommentCon />
  </div>
</template>

<script>
import Comment from "../../components/common/comment";
import CommentCon from "../../components/common/commentCon";
import SongCon from "../../components/common/songCon";
import HeaderBtn from '../../components/common/headerBtn'
export default {
  created(){

  },
  data() {
    return {
       openFlag: true,
      openShow: false
    };
  },
  mounted(){
    this.$nextTick(() => {
      if(!this.$refs.descCon) return;
      if (this.$refs.descCon.clientHeight > 318) {
        this.openFlag = false;
        this.openShow = true;
      }})
  },
  methods:{
     isOpen() {
      this.openFlag = !this.openFlag;
    }
  },
props:['leftData'],
 
  components: {
    Comment,
    CommentCon,
    SongCon,
    HeaderBtn
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  width: 100%;
  border-right:1px solid #d3d3d3;
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
      width: 410px;
      .headerTit {
        i {
          display: inline-block;
          background: url("../../assets/icon.png");
          width: 54px;
          height: 24px;
          background-position: 0 -186px;
        }
        span {
          font-size: 24px;
          color: #333;
        }
      }
      .creatTime {
        margin-top: 10px;
        p {
          font-size: 12px;
          color: #666;
          line-height: 24px;
        }
        a{
          color: #0c73c2;
        }
      }
    }

  }
  .desc {
    margin-top: 20px;
    h3 {
      font-size: 12px;
      color: #333;
    }
    p {
      font-size: 12px;
      color: #666;
      line-height: 24px;
      text-indent: 2em;
      white-space: pre-line;
    }
    a {
          font-size: 12px;
          color: #0c73c2;
        }
      i {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-top: 2px solid #999;
          border-left: 2px solid #999;
        }
  }
    .close {
          height: 318px;
          overflow: hidden;
        }
         .openIcon {
          transform: rotate(-135deg);
        }
        .closeIcon {
          transform: rotate(45deg);
        }
  .commendTit {
    height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
    .total {
      color: #666;
      font-size: 12px;
    }
  }
}
</style>