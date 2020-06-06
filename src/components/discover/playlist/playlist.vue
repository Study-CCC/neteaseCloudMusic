<template>
  <div class="playlist">
    <el-card>
      <div class="playTit">
        <h3>全部</h3>
        <el-popover placement="bottom" width="160">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-button type="primary" slot="reference">
            选择分类
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
        </el-popover>
      </div>
      <div class="itemBox"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.playlist {
  width: 1100px;
  margin: 0 auto;
  padding: 40px;
  .el-card {
    .playTit {
    }
    .itemBox {
      display: flex;
    }
  }
}
</style>