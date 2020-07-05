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
          <p>发行时间:{{leftData.album.publishTime}}</p>
          <p>发行公司： {{leftData.album.company}}</p>
        </div>
      <HeaderBtn :commentCount="leftData.btnValue[0]" :shareCount="leftData.btnValue[1]" />
    </div></div>
    <div class="desc">
      <h3>专辑介绍</h3>
      <p>{{leftData.album.description}}</p>
    </div>
    <div class="songlist"></div>
    <SongCon v-if="leftData.songsList.trackCount" :songsList="leftData.songsList"/>
    <CommentCon />
  </div>
</template>

<script>
import Comment from "../../common/comment";
import CommentCon from "../../common/commentCon";
import SongCon from "../../common/songCon";
import HeaderBtn from '../../common/headerBtn'
export default {
  created(){
     console.log(this.leftData)
  },
  data() {
    return {
    };
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
        background: url("../../../assets/coverall.png");
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
          background: url("../../../assets/icon.png");
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