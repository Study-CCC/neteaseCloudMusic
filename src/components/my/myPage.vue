<template>
  <div>
      <MyMusic v-if="user.isLogin"/>
      <MyLogin v-else/>
  </div>
</template>

<script>
import MyMusic from './myMusic'
import MyLogin from './myLogin'
import {mapGetters,mapMutations} from 'vuex'
  export default {
    data () {
      return {

      };
    },
    components:{
        MyMusic,
        MyLogin
    },
    computed:{
        ...mapGetters(['user'])
    }
  }

</script>
<style lang='' scoped>

</style>