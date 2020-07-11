<template>
  <div>
      <MyMusic v-if="isLogin"/>
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
    created(){
      this.setExtend(false)
    },
    methods:{
      ...mapMutations({
        setExtend:'SET_EXTEND'
      })
    },
    components:{
        MyMusic,
        MyLogin
    },
    computed:{
        ...mapGetters(['isLogin'])
    },

  }

</script>
<style lang='' scoped>

</style>