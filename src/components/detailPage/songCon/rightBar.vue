<template>
  <div class="rightBarBox">
    <Related />
    <SimiSong class="simiSong" />
  </div>
</template>

<script>
import Related from '../../common/related'
import SimiSong from '../../common/simiSong'
export default {
  data() {
    return {};
  },
  components:{
    Related,SimiSong
  }
};
</script>
<style lang='less' scoped>
.rightBarBox {
}
</style>