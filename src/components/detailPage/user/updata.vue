<template>
  <div class="updata pageCon">
    <h3>个人设置</h3>
    <el-form ref="form" :model="userInfo" label-width="80px">
      <el-form-item label="昵称:">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="介绍:">
        <el-input class="text" :rows="5" type="textarea" v-model="userInfo.signature"></el-input>
      </el-form-item>
      <el-form-item label="性别:">
        <el-radio-group v-model="userInfo.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
          <el-radio :label="0">保密</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      userInfo: {
        gender: "",
        signature: "",
        name: ""
      }
    };
  },
  created() {
    this.initInfo();
  },
  methods: {
    initInfo() {
      this.userInfo.gender = this.user.gender;
      this.userInfo.signature = this.user.signature;
      this.userInfo.name = this.user.nickname;
    },
    async onSubmit() {
      const { data } = await this.$http.post(
        `/user/update?gender=${this.userInfo.gender}&signature=${this.userInfo.signature}&nickname=${this.userInfo.name}&cookie=${this.cookie}`
      );
      this.user.gender = this.userInfo.gender
      this.user.signature = this.userInfo.signature
      this.user.nickname = this.userInfo.name
      this.setUser(this.user)
      this.$message.success('保存成功')
    },
    ...mapMutations({
        setUser:'SET_SETISLOGIN'
    })
  },
  computed: {
    ...mapGetters(["user","cookie"])
  }
};
</script>
<style lang='less' scoped>
.updata {
  min-height: 600px;
  .el-input,
  .text {
    width: 400px;
  }
  .el-button {
    margin-left: 200px;
  }
}
</style>