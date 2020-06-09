<template>
  <div class="commentBox">
      <img src="../../assets/default_avatar.jpg" alt />
      <el-input type="textarea" :rows="2"></el-input>
      <div class="commendBtn">
        <i class="simle"></i>
        <i class="aite"></i>
        <span>
          139
          <el-button size="mini">按钮</el-button>
        </span>
      </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      };
    },
  }

</script>
<style lang='less' scoped>
  .commentBox {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .el-textarea {
      width: 700px;
      margin-left: 15px;
    }
    .commendBtn {
      display: flex;
      width: 700px;
      margin-top: 20px;
      margin-left: 70px;
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
    }
  }
</style>