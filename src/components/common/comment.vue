<template>
  <div class="commentBox">
    <el-row>
      <el-col :span="2">
        <img src="../../assets/default_avatar.jpg" alt />
      </el-col>
      <el-col :span="21" >
        <el-input type="textarea" :rows="2"></el-input>
        <div class="commendBtn">
          <i class="simle"></i>
          <i class="aite"></i>
          <span>
            140
            <el-button size="mini">按钮</el-button>
          </span>
        </div>
      </el-col>
    </el-row>
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
.commentBox {
  margin-top: 20px;
  .el-textarea {
    margin-left: 15px;
  }
  .commendBtn {
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    i {
      background: url("../../assets/icon.png");
      width: 18px;
      height: 18px;
      display: block;
      margin-right: 10px;
    }
    .simle {
      background-position: -40px -490px;
    }
    .aite {
      background-position: -60px -490px;
    }
    span {
      margin-left: auto;
    }
  }
  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
}
</style>