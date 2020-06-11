<template>
  <div class="rightBarBox">
      <Like :subscribers='playlist.subscribers' />
            <Related />
      <MoreDown />
  </div>
</template>

<script>
import Like from '../../common/like'
import MoreDown from '../../common/moreDown'
import Related from '../../common/related'
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