<template>
  <div class="home">
    <Header />
    <Extend />
    <router-view />
    <Footer />
    <LogResBox v-show="showLogin" />
    <MusicPlay v-if="!mvPlay" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "../components/common/header";
import Extend from "../components/common/extend";
import Footer from "../components/common/footer";
import MusicPlay from "../components/detailPage/musicPlay/musicPlay";
import LogResBox from "../components/common/logResBox";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Extend,
    MusicPlay,
    LogResBox
  },
  computed: {
    ...mapGetters(["mvPlay","showLogin"])
  }
};
</script>
<style lang="less">
.home {
  background: #f5f5f5;
}
</style>
