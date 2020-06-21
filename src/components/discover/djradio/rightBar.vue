<template>
  <div class="rightBarBox">
    <div class="itemTit">
      <h3>推荐节目</h3>
      <a href="#" class="more">更多 ></a>
    </div>
    <div class="itemCon">
      <el-table :data="toplist" stripe style="width: 100%">
        <el-table-column width="40">
          <template v-slot="program">
            <div class="rank">
              <em>{{program.$index+1}}</em>
              <i class="rankIcon"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column>
          <template v-slot="program">
            <div class="item clearFloat">
              <a class="imgCon">
              <img :src="program.row.program.blurCoverUrl" alt />
               <i class="play"></i></a>
              <div class="itemText">
                <a :href="'/#/program?id='+program.row.program.id"> <h3>{{program.row.program.name}}</h3></a>
                 <a :href="'/#/djradio?id='+program.row.program.radio.id"><span>{{program.row.program.radio.name}}</span></a>
              </div>
              <span class="percentage">
                <i :style="`witdh:${program.row}`"></i>
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toplist: []
    };
  },
  created() {
    this.getToplist();
  },
  methods: {
    async getToplist() {
      const { data, status } = await this.$http.get("/dj/program/toplist");
      if (status !== 200) return this.$message.error("数据获取错误");
      data.toplist.length = 10;
      this.toplist = data.toplist;
    }
  }
};
</script>
<style lang='less' scoped>
.rightBarBox {
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
    .percentage {
      width: 96px;
      background: url("../../../assets/table.png");
      background-position: right -318px;
      i {
        background: url("../../../assets/table.png");
        background-position: right -318px;
      }
    }
    .item {
      position: relative;
       &:hover {
        .play {
          display: block;
        }}
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
        height: 40px;
        width: 40px;
        float: left;
        position: relative;
        cursor: pointer;
        img{
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
      .rank {
        float: left;
        span {
        }
      }
    }
  }
}
</style>