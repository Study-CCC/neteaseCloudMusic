<template>
  <div class="rightBarBox">
      <Like />
      <MoreDown />
  </div>
</template>

<script>
import Like from '../../common/like'
import MoreDown from '../../common/moreDown'
  export default {
    data () {
      return {

      };
    },
    components:{
      Like,
      MoreDown
    }
  }

</script>
<style lang='less' scoped>
.rightBarBox{

}
</style>