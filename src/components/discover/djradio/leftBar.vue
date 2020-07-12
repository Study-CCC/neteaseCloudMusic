<template>
  <div class="leftBarBox">
    <div class="itemTit">
      <h3>推荐节目</h3>
      <a href="#" class="more">更多 ></a>
    </div>
    <div class="itemCon">
      <el-table :data="programs" stripe style="width: 100%">
        <el-table-column>
          <template v-slot="program">
            <div class="item clearFloat">
              <a href="#" class="imgCon" >
                <img :src="program.row.blurCoverUrl" alt />
                <i @click="playInfo(program.row)" class="play"></i>
              </a>
              <div class="itemText">
               <a :href="'/#/program?id='+program.row.id"> <h3>{{program.row.name}}</h3></a>
                <a :href="'/#/djradio?id='+program.row.radio.id"><span>{{program.row.dj.brand}}</span></a>
              </div>
              <el-button @click="cateCli(program.row.radio.categoryId)">{{program.row.channels[0]}}</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { getProRec } from "../../../utils/api/djApi";
export default {
  data() {
    return {
      programs: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      getProRec().then(res=>{
              this.programs = res.data.programs;
      }).catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    cateCli(cateId){
      this.$router.push(`djradio/category?id=${cateId}`)
    },
    ...mapActions(["playInfo"])
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  .itemTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 40px;
    a {
      margin-left: auto;
    }
  }
  .itemCon {
    .item {
      &:hover {
        .play {
          display: block;
        }
      }
       .play {
          display: none;
          position: absolute;
          background: url("../../../assets/iconall.png");
          width: 22px;
          height: 22px;
          top: 50%;
          left: 50%;
          overflow: hidden;
          margin: -11px 0 0 -11px;
          background-position: 0 -85px;
        }
     .imgCon {
        width: 40px;
        height: 40px;
        float: left;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
       
      }
      .itemText {
        float: left;
      a{
        color: #333;
       
        &:hover{
          text-decoration: underline;
        }
      }
      span{
        color:#999;
      }
        h3,
        span {
          font-size: 12px;
          font-weight: normal;
          margin: 0;
          margin-left: 10px;
           max-width: 255px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        }
      }
      .el-button {
        float: right;
        height: 20px;
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 12px;
        width: 70px;
      }
    }
  }
}
</style>