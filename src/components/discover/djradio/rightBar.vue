<template>
  <div class="rightBarBox">
    <div class="itemTit">
      <h3>推荐节目</h3>
      <a href="#" class="more">更多</a>
    </div>
    <div class="itemCon">
      <el-table :data="toplist" stripe style="width: 100%">
        <el-table-column>
          <template v-slot="program">
            <div class="item clearFloat">
              <div class="rank">
                <em>{{program.row.rank}}</em>
                
              </div>
              <img :src="program.row.program.blurCoverUrl" alt />
              <div class="itemText">
                <h3>{{program.row.program.name}}</h3>
                <p>{{program.row.program.radio.name}}</p>
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
      toplist:[]
    };
  },
  created() {
    this.getToplist()
  },
  methods: {
    async getToplist(){
      const { data, status } = await this.$http.get("/dj/program/toplist");
      if (status !== 200) return this.$message.error("数据获取错误");
      console.log(data)
      data.toplist.length=10
      this.toplist = data.toplist  
    }
  },
};
</script>
<style lang='less' scoped>
.rightBarBox {
  .itemTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 40px;
    a{
        margin-left: auto;
    }
  }
  .itemCon{
    .percentage{
        width: 96px;
        background: url('../../../assets/table.png');
        background-position: right -318px;
        i{
          background: url('../../../assets/table.png');
          background-position: right -318px;
        }
    }
    .item{
      img{
        height: 40px;
        width: 40px;
        float: left;
      }
      .itemText {
        float: left;
        h3,
        p {
          font-size: 12px;
          font-weight: normal;
          margin: 0;
          margin-left: 10px;
        }
      }
      .rank{
        float: left;
        span{
          
        }
      }
    }
  }
}
</style>