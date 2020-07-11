<template>
  <div class="pageBox pageCon">
    <div class="pic">
      <a class="login" @click="setLoginBox(true)" href="javascript:void(0)"></a>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  methods:{
     ...mapMutations({ setLoginBox: "SET_LOGINBOX"})
  }
};
</script>
<style lang='less' scoped>
.pageBox {
  min-height: 700px;
  .pic {
    background: url("../../assets/mymusic.png") no-repeat;
    width: 807px;
    height: 268px;
    // margin: 0 auto 0;
    padding-top: 104px;
    background-position: 0 104px;
    .login {
      display: block;
      width: 167px;
      height: 45px;
      margin: 202px 0 0 482px;
    }
  }
}
</style>