<template>
  <div class="home">
    <Header />
    <Extend/>
    <router-view />
    <Footer />
    <LogResBox v-show="showLogin" />
    <MusicPlay v-if="!mvPlay" />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Header from "../components/common/header";
import Extend from "../components/common/extend";
import Footer from "../components/common/footer";
import MusicPlay from "../page/musicPlay/musicPlay";
import LogResBox from "../components/common/logResBox";
import { getToken } from "../utils/storage";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Extend,
    MusicPlay,
    LogResBox
  },
  data() {
    return {
    };
  },
  created() {
    this.isAuto();
            
  },
  methods: {
    async isAuto() {
      let tokenUser = getToken();
      if (tokenUser.token) {
        const { data } = await this.$http.get(
          `/user/detail?uid=${tokenUser.userId}&cookie=${tokenUser.cookie}`
        );
        const {
          nickname,
          userId,
          followeds,
          follows,
          eventCount,
          gender,
          signature,
          avatarUrl
        } = data.profile;
        let user = {
          nickname,
          userId,
          followeds,
          follows,
          signature,
          gender,
          eventCount,
          avatarUrl
        };
        this.setIsLogin(true);
        this.setUser(user);
        this.setCookie(tokenUser.cookie);
      }
    },
    ...mapActions(["setUser"]),
    ...mapMutations({ setIsLogin: "SET_SETISLOGIN", setCookie: "SET_COOKIE" })
  },
  computed: {
    ...mapGetters(["mvPlay", "showLogin"])
  }
};
</script>
<style lang="less">
.home {
  background: #f5f5f5;
}
</style>
