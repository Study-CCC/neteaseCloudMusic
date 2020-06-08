<template>
  <div class="leftBarBox">
    <div class="itemTit">
      <h3>推荐节目</h3>
      <a href="#" class="more">更多</a>
    </div>
    <div class="itemCon">
      <el-table :data="programs" stripe style="width: 100%">
        <el-table-column>
          <template v-slot="program">
            <div class="item clearFloat">
              <img :src="program.row.blurCoverUrl" alt />
              <div class="itemText">
                <h3>{{program.row.name}}</h3>
                <p>{{program.row.brand}}</p>
              </div>
              <el-button>{{program.row.channels[0]}}</el-button>
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
      programs: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/program/recommend");
      if (status !== 200) return this.$message.error("数据获取错误");
      console.log(data)
      this.programs = data.programs

    }
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
      img {
        width: 40px;
        height: 40px;
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
      .el-button {
        float: right;
      }
    }
  }
}
</style>