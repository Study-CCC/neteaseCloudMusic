<template>
  <div class="myBox">
      <Header />
      <DefaultPage />
      <Footer />
  </div>
</template>

<script>
import DefaultPage from './defaultPage'
// import Header from '../common/header'
// import Footer from '../common/footer'
  export default {
    data () {
      return {

      };
    },
    components:{
        DefaultPage
    }
  }

</script>
<style lang='less' scoped>

</style>