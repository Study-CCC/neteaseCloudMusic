<template>
  <div class="RightBox">
    <div class="userInfo" v-if="isLogin">
      <div class="headInfo clearFloat">
        <a class="imgBox" :href="'/#/user/home?id='+user.userId">
          <img :src="user.avatarUrl" alt />
        </a>
        <div class="nick">
          <p><a :href="'/#/user/home?id='+user.userId">{{user.nickname}}</a></p>
          <i class="rank"></i>
        </div>
      </div>
      <div class="footInfo">
        <a :href="'/#/user/event?id='+user.userId">
          <p>{{user.eventCount}}</p>
          <span>动态</span>
        </a>
        <a :href="'/#/user/follows?id='+user.userId">
          <p>{{user.follows}}</p>
          <span>关注</span>
        </a>
        <a :href="'/#/user/fans?id='+user.userId">
          <p>{{user.followeds}}</p>
          <span>粉丝</span>
        </a>
      </div>
    </div>
    <div class="userLogin" v-else>
      <p class="rightText">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div class="page">
        <el-button size="small" type="danger" @click="setLoginBox(true)">用户登录</el-button>
      </div>
    </div>
    <!-- 热门主播 -->
    <div class="hotAnchor">
      <div class="hotTit">
        <h3 class="tit1">热门主播</h3>
        <ul>
          <li class="clearFloat" v-for="item in hotAnchor" :key="item.id">
            <a :href="'/#/user/home?id='+item.id">
              <img :src="item.picUrl" />
            </a>
            <div class="anchText">
              <p>
                <a :href="'/#/djradio?id='+item.id">{{item.name}}</a>
              </p>
              <span>{{item.rcmdtext}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      hotAnchor: []
    };
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get(
        "/dj/toplist?type=hot&limit=5"
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.hotAnchor = data.toplist;
    },
    ...mapMutations({
      setLoginBox: "SET_LOGINBOX"
    })
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters(["user", "isLogin"])
  }
};
</script>
<style lang='less' scoped>
.RightBox {
  width: 254px;
  .userInfo {
    background: url("../../../assets/index.png");
    background-position: 0px -270px;
    height: 165px;
          padding: 20px;
    .headInfo {
      .imgBox {
        float: left;
        width: 80px;
        height: 80px;
        border:1px solid #dadada;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .nick{
        float: left;
        margin-left: 10px;
      a{
        color:#999
      }
      }
    }
    .footInfo{
      margin-top: 10px;
      a{
        float: left;
        width: 60px;
        color: rgb(102, 102, 102);
        &:hover{
          color: rgb(12, 115, 194);
    text-decoration: none;
        }
      }
    }
  }
  .userLogin {
    background: url("../../../assets/index.png");
    height: 126px;
    .rightText {
      color: #666;
      line-height: 22px;
      font-size: 12px;
      margin: 20px 20px 0 20px;
    }
  }
  .hotAnchor {
    margin: 20px 0 0 20px;
    .hotTit {
      ul {
        margin-left: 5px;
        li {
          margin-top: 10px;
          img {
            width: 40px;
            height: 40px;
            box-shadow: 0 0 1px #333333 inset;
            float: left;
          }
          .anchText {
            width: 160px;
            margin-left: 10px;
            float: left;
            p {
              a {
                font-size: 12px;
                color: #333;
              }
            }
            span {
              margin-top: 10px;
              color: #999;
              font-size: 12px;
            }
          }
        }
      }
    }
    .tit1 {
      font-size: 12px;
      color: #333;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid rgb(204, 204, 204);
    }
  }
}
</style>