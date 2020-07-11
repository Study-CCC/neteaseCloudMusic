<template>
  <div class="discoverBox">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'
    export default {
    data () {
      return {

      };
    },
    created(){
      this.setExtend(true)
    },
     methods:{
      ...mapMutations({
        setExtend:'SET_EXTEND'
      })
    }
  }

</script>
<style lang='less' scoped>

</style>