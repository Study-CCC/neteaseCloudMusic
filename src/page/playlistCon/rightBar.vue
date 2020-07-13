<template>
  <div class="rightBarBox">
      <Like :subscribers='playlist.subscribers' />
            <Related />
      <MoreDown />
  </div>
</template>

<script>
import Like from '../../components/common/like'
import MoreDown from '../../components/common/moreDown'
import Related from '../../components/common/related'
  export default {
    data () {
      return {

      };
    },
    components:{
      Like,
      MoreDown,
      Related
    },
    props:['playlist']
  }

</script>
<style lang='less' scoped>
.rightBarBox{

}
</style>