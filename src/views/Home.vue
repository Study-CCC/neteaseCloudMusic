<template>
  <div class="home">
    <Header></Header>
    <Extend></Extend>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/common/header'
import Extend from '../components/common/extend'
import Footer from '../components/common/footer'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Extend
  }
}
</script>
