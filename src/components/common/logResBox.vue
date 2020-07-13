<template>
  <div class="logResBox">
    <div class="header">
      {{tit}}
      <span @click="closeBox">x</span>
    </div>
    <InputBox v-if="flag.inputFlag" :inputType="inputType"/>
    <div class="login clearFloat" v-if="!(flag.inputFlag||flag.verityFlag)">
      <div class="leftBox">
        <img src="../../assets/platform.png" alt />
        <p>
          <el-button @click="inputShow(1)" type="primary">手机号登录</el-button>
        </p>
        <p>
          <el-button @click="inputShow(2)">注册</el-button>
        </p>
        <p class="checkBox">
          <input v-model="flag.isCheck" type="checkbox" id="checkId" /> 同意
          <a href="https://st.music.163.com/official-terms/service">&lt;&lt;服务条款&gt;&gt;</a>
          <a href="https://st.music.163.com/official-terms/privacy">&lt;&lt;隐私条款&gt;&gt;</a>
          <a href="https://st.music.163.com/official-terms/children">&lt;&lt;儿童隐私条款&gt;&gt;</a>
        </p>
      </div>
      <div class="rightBox">
        <div class="emailLogin">
          <i></i>
          <span>网易邮箱登录</span>
        </div>
      </div>
      
      </div>
       <div v-if="flag.inputFlag||flag.verityFlag" class="bottom">
        <span @click="getBack">&lt; 其他登录方式</span>
        <span v-if="inputType==1" @click="inputShow(2)" class="free">没有账号?免费注册 &gt;</span>
    </div>
  </div>
</template>

<script>
import InputBox from "../../page/logResCon/inputBox";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      tit: "",
      // [input,verity,ischeck]
      flag: {
        inputFlag: false,
        verityFlag: false,
        isCheck: false,
      },
      inputType:1
    };
  },
  methods: {
    closeBox() {
      this.setLoginBox(false)
    },
    getBack(){
        this.flag.inputFlag = false
        this.flag.verityFlag = false
    },
    inputShow(type) {
      if (!this.flag.isCheck) return this.$message.error("请勾选协议");
      this.flag.inputFlag = true;
      this.inputType=type
    },
    ...mapMutations({
       setLoginBox:"SET_LOGINBOX"
    })
  },
  components: {
    InputBox
  }
};
</script>
<style lang='less' scoped>
.logResBox {
  width: 530px;
  z-index: 999;
  position: fixed;
  margin-top: 50%;
  margin-left: 50%;
      top: 0;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  .header {
    font-weight: bold;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
    color: #fff;
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    background: #2d2d2d;
    padding: 0 10px;
    span {
      font-size: 14px;
      color: #999;
      float: right;
      cursor: pointer;
    }
  }
  .leftBox {
    float: left;
    width: 224px;
    padding: 0 35px 3px 40px;
    border-right: 1px dotted #ccc;
    margin-top: 30px;

    img {
      height: 120px;
    }
    .checkBox {
      margin: 10px 0;
    }
    p {
      font-size: 12px;
      color: #333;
      .el-button {
        width: 224px;
        height: 31px;
        margin-top: 10px;
      }
      a {
        color: #507daf;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .rightBox {
    float: left;
    padding: 3px 0 3px 39px;
    margin-top: 30px;
    .emailLogin {
      i {
        background: url("../../assets/logo.png");
        width: 38px;
        height: 38px;
        background-position: -271px -670px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
      span {
        font-size: 12px;
        color: #333;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
    .bottom {
      padding: 0 19px;
      height: 48px;
      border-top: 1px solid #c6c6c6;
      border-radius: 0 0 4px 4px;
      line-height: 48px;
      background-color: #f7f7f7;
      span {
        cursor: pointer;
        font-size: 12px;
        color: #0c72c3;
      }
      .free {
        color: #999;
        float: right;
      }
    }
}
</style>