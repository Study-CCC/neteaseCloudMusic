<template>
  <div class="home">
          <Header />
    <Extend />
<router-view />
        <Footer />
        <MusicPlay />
  </div>
</template>
<script>
import Header from '../components/common/header'
import Extend from '../components/common/extend'
import Footer from '../components/common/footer'
import MusicPlay from '../components/detailPage/musicPlay/musicPlay'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Extend,
    MusicPlay
  }
}
</script>
