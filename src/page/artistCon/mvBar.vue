<template>
  <div class="mvBarBox">
    <ul>
      <li v-for="item in mvs" :key="item.id">
        <div class="imgBox">
          <img :src="item.imgurl" />
          <a class="msk" :href="'/#/mv?id='+item.id"></a>
          <a class="play" :href="'/#/mv?id='+item.id"></a>
        </div>
        <p>
          <a :href="'/#/mv?id='+item.id">{{item.name}}</a>
        </p>
      </li>
    </ul>
      <div class="page">
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      :page-size="12"
    ></el-pagination></div>
  </div>
  
</template>

<script>
import {getArtistMv} from '../../utils/api/artistApi'
export default {
  data() {
    return {
      id: 0,
      mvs: [],
      offset: 0,
    };
  },
  methods: {
       handleCurrentChange(e) {
      this.offset = (e - 1) * 12;
      this.getData();
    },
     getData() {
      this.id = this.$route.query.id;
      getArtistMv(this.id,this.offset).then(res=>{
              this.mvs = res.data.mvs;
      }).catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  created() {
    this.getData();
  },
  props:['total']
};
</script>
<style lang='less' scoped>
.mvBarBox {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 137px;
      margin-right: 29px;
      margin-top: 30px;
      .imgBox {
        position: relative;
        width: 137px;
        height: 103px;
        img {
          width: 100%;
          height: 100%;
        }
        .msk {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("../../assets/coverall.png");
          background-position: 0 -1170px;
        }
        .play {
          position: absolute;
          background: url("../../assets/iconall.png");
          width: 44px;
          height: 44px;
          top: 50%;
          left: 50%;
          margin: -22px 0 0 -22px;
          background-position: -30px -135px;
          &:hover {
            background-position: -30px -85px;
          }
        }
      }
      p {
        height: 30px;
        line-height: 30px;
            width: 100%;
             overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        a {
          width: 100%;

          color: #333;
          font-size: 14px;
         
        }
      }
    }
  }
}
</style>