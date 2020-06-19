<template>
  <div class="LoginBox clearFloat">
    <div class="header">
      {{tit}}
      <span @click="closeBox">x</span>
    </div>
    <div class="login" v-if="!(loginShow||regShow)">
      <div class="leftBox">
        <img src="../../assets/platform.png" alt />
        <p>
          <el-button @click="phoneLogin" type="primary">手机号登录</el-button>
        </p>
        <p>
          <el-button @click="registerShow">注册</el-button>
        </p>
        <p class="checkBox">
          <input v-model="isCheck" type="checkbox" id="checkId" /> 同意
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
    <div class="conBox" v-if="loginShow||regShow">
      <div class="LoginTextBox" v-if="!verityCode">
        <el-input @keyup.enter.native="loginSend" v-model="user.phoneNum" placeholder="请输入手机号"></el-input>
        <el-input
          @keyup.enter.native="loginSend"
          v-model="user.psw"
          :placeholder="boxCon.input"
          type="password"
        ></el-input>
        <div v-if="loginShow" class="text">
          <input type="radio" v-model="isAuto" />
          <span>自动登录</span>
          <a href="#">忘记密码?</a>
        </div>
        <div v-if="regShow" class="verify">
          <p v-if="isClick&&(!ref[2])">
            <i :class="ref[2]?'blueIcon':''"></i>请输入正确的手机号
          </p>
          <p :class="ref[0]?'blueColor':''">
            <i :class="ref[0]?'blueIcon':''"></i>密码不能包含空格
          </p>
          <p :class="ref[1]?'blueColor':''">
            <i :class="ref[1]?'blueIcon':''"></i>包含字母、数字、符号中至少两种
          </p>
          <p :class="ref[1]?'blueColor':''">
            <i :class="ref[1]?'blueIcon':''"></i>密码长度为6-16位
          </p>
        </div>
        <el-button @click="sendSms" type="primary">{{boxCon.tit}}</el-button>
      </div>
      <div class="nickNameBox" v-else-if="showNick">
        <p>
          昵称:
          <el-input @keyup.enter.native="sendReg" placeholder="请输入昵称" v-model="user.nickName" />
        </p>
        <el-button type="primary" @click="sendReg">确认</el-button>
      </div>
      <div class="codeVerity" v-else>
        <p>
          你的手机号:
          <span>+86 {{this.user.phoneNum.slice(0,3)}}****{{this.user.phoneNum.slice(7,11)}}</span>
        </p>
        <p>为了安全,我们会给你发送短信验证码</p>
        <div class="code">
          <input
            v-for="(item,i) in codeId"
            :key="item"
            type="text"
            maxlength="1"
            v-model="code[i]"
            :id="item"
            @keyup.delete="keyDown"
          />
        </div>
        <a  @click="resend" v-if="!count">重新发送</a>
        <a v-else>{{count}}</a>
        <el-button @click="next" type="primary">下一步</el-button>
      </div>
      <div class="bottom">
        <span @click="otherLogin">&lt; {{boxCon.bottomCon}}</span>
        <span v-if="loginShow" @click="registerShow" class="free">没有账号?免费注册 &gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: false,
      tit: "登录",
      boxCon: {
        tit: "登录",
        input: "请输入密码",
        bottomCon: "其他登录方式"
      },
      user: {
        phoneNum: "",
        psw: "",
        nickName: ""
      },
      timer: null,
      count: "",
      captcha: "",
      showNick: false,
      isClick: false,
      isAuto: false,
      loginShow: false,
      regShow: false,
      verityCode: false,
      ref: [true, false, false],
      code: new Array(4),
      codeId: ["first", "second", "third", "forth"],
      codeLen: 0
    };
  },
  methods: {
    closeBox() {
      this.$emit("close");
    },
    phoneLogin() {
      if (!this.isCheck) {
        return this.$message.error("请勾选协议");
      }
      this.dataInfo("手机号登录", {
        tit: "登录",
        input: "请输入密码",
        bottomCon: "其他登录方式"
      });
      this.loginShow = true;
    },
    otherLogin() {
      this.loginShow = false;
      this.regShow = false;
      this.isClick = false
    },
    dataInfo(tit, obj) {
      this.user.phoneNum = "";
      this.user.psw = "";
      this.tit = tit;
      this.boxCon = obj;
    },
    registerShow() {
      if (!this.isCheck) {
        return this.$message.error("请勾选协议");
      }
      this.dataInfo("手机号注册", {
        tit: "注册",
        input: "设置登陆密码,不少于6位",
        bottomCon: "返回登陆"
      });
      this.regShow = true;
    },
    timeStart() {
      this.count = 60;
      this.timer = setInterval(() => {
        if (this.count > 0) {
          this.count--;
        } else {
          clearInterval(this.timer);
          this.count = "";
          this.timer = null;
        }
      }, 1000);
    },
    async loginSend(){

    },
    // 发起注册
    async sendSms() {
      this.isClick = true;
      console.log(111)
      const phoneRef = /^1[34578]\d{9}$/;
      if (!phoneRef.test(this.user.phoneNum)) {
        return;
      }
      this.ref[2] = true;
      // if (ref[0] && ref[1]) return this.$message.error("密码不符合格式");
      const { data, status } = await this.$http.get(
        `/cellphone/existence/check?phone=${this.user.phoneNum}`
      );
      if (data.exist == 1) return this.$message.error("账号已注册");
      const msg = await this.$http.get(
        `/captcha/sent?phone=${this.user.phoneNum}`
      );
      // console.log(code)
      if (msg.status !== 200) return this.$message.error("短信发送失败");
      // console.log(msg.data);
      this.timeStart();
      this.verityCode = true;
      this.code = new Array(4);
      this.codeLen = 0;
      this.boxCon.bottomCon = "返回登录";
    },
    async resend() {
      const { data, status } = await this.$http.get(
        `/captcha/sent?phone=${this.user.phoneNum}`
      );
      if (status !== 200) return this.$message.error("短信发送失败");
      this.timeStart();
    },
    async sendReg() {
      if(!this.user.nickName) return this.$message.error("请输入昵称");
      const { data, status } = await this.$http.get(
        `/register/cellphone?phone=${this.user.phoneNum}&password=${this.user.psw}&captcha=${this.captcha}&nickname=${this.user.nickName}`
      );
      if (status !== 200) return this.$message.error("短信发送失败");
    },
    async next() {
      const { data, status } = await this.$http.get(
        `/captcha/verify?phone=${this.user.phoneNum}&captcha=${this.user.psw}`
      );
      if (status !== 200) return this.$message.error("短信发送失败");
      this.$router.go(0)
    },
    keyDown() {
      const id = document.activeElement.id;
      const location = this.codeId.indexOf(id);
      if (location > 0) {
        document.getElementById(this.codeId[location - 1]).focus();
      }
    }
  },
  watch: {
    user: {
      handler: function() {
        const refBlank = "^[^ ]+$";
        const refInclu = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
        if (this.user.psw.match(refBlank) || !this.user.psw) {
          this.ref[0] = true;
        } else this.ref[0] = false;
        if (refInclu.test(this.user.psw)) {
          this.ref[1] = true;
        } else this.ref[1] = false;
      },
      deep: true
    },
    code() {
      let codeStr = "";
      let len = 0;
      const id = document.activeElement.id;
      const location = this.codeId.indexOf(id);
      const oldLen = this.codeLen;
      for (let i = 0; i < 4; i++) {
        if (this.code[i]) len++;
      }
      console.log(this.codeLen, len);
      this.codeLen = len;
      if (len == 4) {
        return console.log("fas");
      }
      if (len > oldLen) {
        return location == 3
          ? ""
          : document.getElementById(this.codeId[location + 1]).focus();
      }
    }
  }
};
</script>
<style lang='less' scoped>
.LoginBox {
  width: 530px;
  z-index: 999;
  position: fixed;
  margin-top: 20%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  .el-button {
    width: 224px;
    height: 31px;
    margin-top: 10px;
  }
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
      margin-top: 10px;
    }
    p {
      font-size: 12px;
      color: #333;
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
  .conBox {
    .LoginTextBox {
      width: 220px;
      padding: 30px 0 43px;
      margin: 0 auto;
      .el-input {
        height: 20px;
        line-height: 20px;
        margin-bottom: 30px;
      }
      .text {
        font-size: 12px;
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
      .verify {
        .blueColor {
          color: #507daf;
        }
        p {
          color: #e33232;
          margin-bottom: 10px;
          font-size: 12px;
          .block {
            color: #333;
          }
          .blueIcon {
            background-position: -27px -432px;
          }

          i {
            display: inline-block;
            margin-right: 5px;
            vertical-align: middle;
            height: 14px;
            width: 14px;
            background: url("../../assets/icon.png") -27px -409px no-repeat;
          }
        }
      }
      .el-button {
        width: 220px;
        margin: 0 auto;
      }
    }
    .nickNameBox {
      width: 220px;
      padding: 30px 0 43px;
      margin: 0 auto;
      p {
        font-size: 12px;
        color: #333;
        span {
          color: #999;
        }
      }
    }
    .codeVerity {
      width: 220px;
      padding: 30px 0 43px;
      margin: 0 auto;
      p {
        font-size: 12px;
        color: #333;
        span {
          color: #999;
        }
      }
      input {
        display: inline-block;
        border: none;
        border-bottom: 2px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        width: 40px;
        height: 19px;
        font-size: 24px;
        margin-top: 10px;
        margin-left: 5px;
        text-align: center;
        &:focus {
          outline: none;
        }
      }
      a {
        color: #0c73c2;
        float: right;
        font-size: 14px;
        margin: 5px 0;
        &:hover {
          text-decoration: underline;
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
}
</style>