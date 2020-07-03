<template>
  <div class="headerBox">
    <el-row>
      <el-col :span="4">
        <a href="#">
          <h1 class="logo"></h1>
        </a>
      </el-col>
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#ccc"
          active-text-color="#FFF"
          background-color="#242424"
        >
          <el-menu-item index="1"><router-link to='/'>发现音乐</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to='/my'>我的音乐</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to='/friend'>朋友</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to=''>商场</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to=''>音乐人</router-link></el-menu-item>
          <el-menu-item index="6">
            下载客户端
            <i class="hot"></i>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
          <!-- 输入框 -->
        <el-input size="mini" placeholder="音乐/视频/电台/用户">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <!-- 按钮 -->
        <el-button size="mini" round>创作者中心</el-button>
        <!-- 登录a标签 -->
        <span class="login" @click="loginShow()">登录</span>
      </el-col>
    </el-row>
    <LogResBox @close="close" v-if="show" />
  </div>
</template>

<script>
import LogResBox from  './logResBox'
export default {
  data() {
    return {
      show:false
    };
  },
  methods: {
    loginShow(){
      this.show = true
    },
    close(){
      this.show = false
    }
  },
  components:{
    LogResBox
  }
};
</script>
<style lang='less' scoped>
.headerBox {
  background-color: #242424;
      min-width: 980px;

  height: 70px;
  .el-row {
    width: 1100px;
    margin: 0 auto;
    .logo {
      margin: 0;
      width: 176px;
      height: 69px;
      line-height: 70px;
      background: url("../../assets/topbar.png") no-repeat;
      background-position: 0 0;
      padding-right: 20px;
    }
    .el-menu {
      .el-menu-item {
        font-size: 14px;
        line-height: 70px;
        height: 70px;
      }
      .hot {
        background: url("../../assets/topbar.png") no-repeat;
        background-position: -190px 0;
        width: 28px;
        height: 19px;
        position: absolute;
        top: 20px;
      }
    }
    .el-input {
      margin-top: 19px;
      background-color: #fff;
      width: 170px;
    }
    .el-button {
      margin-left: 20px;
      margin-right: 20px;
    }
    a {
      color: #787878;
      width: 28px;
    //   margin-left: 19px;
    }
    .login{
      font-size: 12px;
      color:#999;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>