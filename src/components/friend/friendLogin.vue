<template>
  <div class="pageBox pageCon">
    <div class="pic">
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  created(){
      this.setExtend(false)
    },
    methods:{
      ...mapMutations({
        setExtend:'SET_EXTEND'
      })
    }
};
</script>
<style lang='less' scoped>
.pageBox {
    min-height: 700px;
  .pic {
    background: url('../../assets/notlogin.jpg') no-repeat;
    width: 902px;
    height: 414px;
    // margin: 0 auto 0;
    padding-top: 70px;
    background-position: 0 70px;
  }
}
</style>