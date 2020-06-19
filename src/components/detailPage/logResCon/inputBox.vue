<template>
  <div class="inputBox">
    <el-form v-if="inputType==2" :model="user" status-icon :rules="rules" ref="ruleForm" label-width="70px">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input type="text" placeholder="请输入手机号" v-model="user.phoneNum"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <el-input type="password" placeholder="设置登录密码,不少于六位" v-model="user.psw"></el-input>
      </el-form-item>
    </el-form>
     <el-form v-if="inputType==1" :model="user" status-icon ref="ruleForm" label-width="70px">
      <el-form-item label="手机号">
        <el-input type="text" placeholder="请输入手机号" v-model="user.phoneNum"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" v-model="user.psw"></el-input>
      </el-form-item>
    </el-form>
    <div class="auLogin" v-if="inputType==1">
      <input type="radio" v-model="user.isAuto" />
      <span>自动登录</span>
      <a href="#">忘记密码?</a>
    </div>
    <el-button @click="sendForm" type="primary">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    var checkPsw = (rule, value, callback) => {
      const regBlank = /^[^ ]+$/;
      const regInclu = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
      if(!regBlank.test(value)) callback(new Error("密码不能包含空格"));
      if(!regInclu.test(value)) callback(new Erro("包含字母、数字、符号中至少两种"))
      callback()
    };
    var checkMobile = (rule,value,callback) =>{
        const regMobile =  /^1[34578]\d{9}$/
        if(!regMobile.test(value)) callback(new Error("请输入正确的手机号"))
        callback()
    }
    return {
      user: {
        phoneNum: "",
        psw: "",
        isAuto: false
      },
      loginText: {
        tit: "手机号登录"
      },
      registerText: {},
      rules: {
        phoneNum: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        psw: [{ required: true, message: "请输入密码", trigger: "blur" },
         { validator: checkPsw, trigger: "blur" }]
      }
    };
  },
  methods: {
      sendForm(){
          const {data,status} = this.$http.post(`/login/cellphone?phone=${this.user.phoneNum}&password=${this.user.psw}`)
          if (status !== 200) return this.$message.error("请求发起失败");
          
      }
  },
  props:["inputType"]
};
</script>
<style lang='less' scoped>
.inputBox {
  width: 260px;
  padding: 30px 0 43px;
  margin: 0 auto;
  .auLogin {
    font-size: 12px;
    width: 200px;
    margin: 0 auto;
    span {
      color: #666;
    }
    a {
      line-height: 22px;
      color: #666;
      float: right;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .el-button {
    width: 220px;
    margin-top: 10px;
    margin-left: 30px;
  }
}
</style>