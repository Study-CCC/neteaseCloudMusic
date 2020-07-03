<template>
  <div class="rightBarBox">
    <Related />
    <SimiSong class="simiSong" />
    <MoreDown />
  </div>
</template>

<script>
import Related from '../../common/related'
import SimiSong from '../../common/simiSong'
import MoreDown from '../../common/moreDown'
export default {
  data() {
    return {};
  },
  components:{
    Related,SimiSong,MoreDown
  }
};
</script>
<style lang='less' scoped>
.rightBarBox {
}
</style>