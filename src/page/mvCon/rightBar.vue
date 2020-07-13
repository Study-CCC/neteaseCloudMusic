<template>
  <div class="rightBar">
    <h3>mv简介</h3>
    <p class="publishTime">发布时间: {{rightData.publishTime}}</p>
    <p class="playCount">播放次数: {{rightData.playCount}}</p>
    <p class="desc">{{rightData.desc}}</p>
    <div class="simiMv">
      <h3>相关推荐</h3>
      <ul>
        <li class="clearFloat" v-for="item in simiMv" :key="item.id">
          <div class="imgBox">
            <img :src="item.cover" alt />
            <a :href="'/#/mv?id='+item.id" class="msk"></a>
            <p>
              <i></i>{{item.playCount}}万
            </p>
          </div>
          <div class="textBox textOver">
            <p class="name"><a :href="'/#/mv?id='+item.id">{{item.name}}</a></p>
            <p class="time">{{item.duration}}</p>
            <p class="auth">by <a :href="'/#/user/home?id='+item.artistId">{{item.artistName}}</a></p>
          </div>
        </li>
      </ul>
    </div>
    <MoreDown />
  </div>
</template>

<script>
import MoreDown from '../../components/common/moreDown'
import { getSimiMv } from "../../utils/api/relatedApi";
export default {
  data() {
    return {
      simiMv: []
    };
  },
  methods: {
     getData() {
      const id = this.$route.query.id;
      getSimiMv(id).then(res=>{
              this.simiMv = res.data.mvs
      }).catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  created() {
    this.getData();
  },
  props: ["rightData"],
  components:{
      MoreDown
  }
};
</script>
<style lang='less' scoped>
.rightBar {
  h3 {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
    margin-top: 20px;
  }
  p {
    font-size: 12px;
    color: #999;
  }
  .desc {
    margin-top: 20px;
    text-indent: 2em;
    color: #333;
  }
  .simiMv {
      li{
          margin-top: 20px;
      }
    .imgBox {
      width: 96px;
      height: 54px;
      float: left;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .msk {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 5px;
        height: 20px;
        line-height: 20px;
        background: url("../../assets/mask.png");
        color: #fff;
        box-sizing: border-box;
        text-align: right;
        text-shadow: -2px 1px rgba(0, 0, 0, 0.4);
        i {
          display: inline-block;
          background: url("../../assets/icon2.png");
          width: 15px;
          height: 10px;
          background-position: -60px -310px;
          margin: -2px 2px 0 0;
        }
      }
    }
    .textBox {
      float: left;
      width: 95px;
      margin-left: 10px;
      p {
        font-size: 12px;
        color: #999;
      }
      .name{
          a{
              color:#000;
          }
      }
      .auth{
          a{
              color:#999;
          }
      }
    }
  }
}
</style>