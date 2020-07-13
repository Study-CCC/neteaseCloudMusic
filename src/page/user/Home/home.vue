<template>
  <div class="homeBox pageCon">
    <div class="userBox">
      <div class="imgBox">
        <img :src="profile.avatarUrl" alt />
      </div>
      <div class="userInfo">
        <div class="userName">
          <h3>{{profile.nickname}}</h3>
          <span class="rank">
            {{level}}
            <i></i>
          </span>
          <i v-if="profile.gender!=0" :class="['sex',gender[profile.gender]]"></i>
          <el-button size="mini">发私信</el-button>
          <el-button size="mini">关注</el-button>
        </div>
        <div class="userNum">
          <a :href="'/#/user/event?id='+profile.userId">
            <p>{{profile.eventCount}}</p>
            <span>动态</span>
          </a>
          <a class="line" :href="'/#/user/follows?id='+profile.userId">
            <p>{{profile.follows}}</p>
            <span>关注</span>
          </a>
          <a :href="'/#/user/fans?id='+profile.userId">
            <p>{{profile.followeds}}</p>
            <span>粉丝</span>
          </a>
        </div>
        <p v-if="profile.signature">个人介绍: {{profile.signature}}</p>
      </div>
    </div>
    <router-view
      :listenSongs="listenSongs"
      :fansNum="profile.followeds"
      :followsNum="profile.follows"
    ></router-view>
  </div>
</template>

<script>
import { userInfo } from "../../../utils/api/userApi";
export default {
  data() {
    return {
      profile: {},
      level: 0,
      gender: ["", "man", "woman"],
      listenSongs: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const id = this.$route.query.id;
      userInfo(id)
        .then(res => {
          this.profile = res.data.profile;
          this.level = res.data.level;
          this.listenSongs = res.data.listenSongs;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>
<style lang='less' scoped>
.homeBox {
  p {
    margin-top: 10px;
    font-size: 12px;
    color: #999;
  }
  .el-button {
    margin-left: 10px;
  }
  .userBox {
    display: flex;
    .imgBox {
      width: 180px;
      height: 180px;
      border: 1px solid #d5d5d5;
      margin-left: 30px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .userInfo {
      width: 700px;
      margin-left: 30px;
      .userName {
        padding-bottom: 12px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgb(221, 221, 221);
        display: flex;
        align-items: center;
        h3 {
          font-size: 22px;
          color: #000;
          font-weight: normal;
        }
        .rank {
          margin-left: 10px;
          display: inline-block;
          height: 19px;
          padding-left: 29px;
          color: #e03a24;
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          background: url("../../../assets/icon2.png");
          background-position: -135px -190px;
          i {
            background: url("../../../assets/icon2.png");
            width: 9px;
            height: 19px;
            background-position: -191px -190px;
            display: inline-block;
          }
        }
        .sex {
          background: url("../../../assets/icon.png");
          width: 20px;
          height: 20px;
          margin: 0 5px;
        }
        .man {
          background-position: -41px -57px;
        }
        .woman {
          background-position: -41px -27px;
        }
      }
      .userNum {
        display: flex;
        .line {
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }
        a {
          padding: 0 40px 0 20px;
          color: #666;
          p {
            font-size: 22px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>