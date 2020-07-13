<template>
  <div class="rightBarBox">
    <Related />
    <SimiSong class="simiSong" />
    <MoreDown />
  </div>
</template>

<script>
import Related from '../../components/common/related'
import SimiSong from '../../components/common/simiSong'
import MoreDown from '../../components/common/moreDown'
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