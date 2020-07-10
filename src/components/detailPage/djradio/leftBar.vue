<template>
  <div class="leftBarBox">
    <div class="clearFloat">
      <div class="headImg">
        <img :src="djRadio.picUrl" alt />
        <span class="msk"></span>
      </div>
      <div class="headInfo">
        <h3>
          <i></i>
          {{djRadio.name}}
        </h3>
        <p class="auth">
          <a :href="'/#/user/home?id='+djRadio.dj.userId" class="authImg">
            <img :src="djRadio.dj.avatarUrl" alt />
          </a>
          <a :href="'/#/user/home?id='+djRadio.dj.userId">{{djRadio.dj.nickname}}</a>
        </p>
        <div class="btnGroup">
          <el-button type="primary" class="el-icon-star-off">订阅</el-button>
          <el-button @click="addList(programs)" class="el-icon-video-play">播放全部</el-button>
          <el-button class="el-icon-share">分享</el-button>
        </div>
        <p class="desc">
          <el-button @click="cliCate">{{djRadio.category}}</el-button>
          {{djRadio.desc}}
        </p>
      </div>
    </div>
    <div class="djList">
      <h3 class="tit">
        节目列表
        <span>共{{count}}期</span>
      </h3>
      <ul>
        <li v-for="(item,i) in programs" :key="item.id">
          <el-row>
            <el-col :span="3">
              <div class="rank">
                <span>{{count-i}}</span>
                <i
                  class="play"
                 @click="playInfo(item)"
                ></i>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="itemName">
                <a :href="'/#/program?id='+item.id">
                  <span>{{item.name}}</span>
                </a>
                <BtnGroup :song="item" class="btns" />
              </div>
            </el-col>
            <el-col :span="5">
              <div class="playInfo">
                <span>播放{{item.listenerCount|numFilter}} 赞{{item.likedCount|numFilter}}</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="creatTime">
                <span>{{item.createTime|creatTimeFilter}}<span class="dt">{{item.duration|timeFilter}}</span></span>
              </div>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination
        v-if="count>30"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="30"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import BtnGroup from "../../common/btnGroup";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      djRadio: {
        dj: {}
      },
      count: 0,
      programs: [],
      id: 0,
      offset: 0
    };
  },
  created() {
    this.getDjRadio();
    this.getPrograms();
  },
  components: {
    BtnGroup
  },
  methods: {
    async getDjRadio() {
      this.id = this.$route.query.id;
      const { data, status } = await this.$http.get(
        `/dj/detail?rid=${this.id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.djRadio = data.djRadio;
    },
    async getPrograms() {
      const { data, status } = await this.$http.get(
        `/dj/program?rid=${this.id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.count = data.count;
      this.programs = data.programs;
    },
    async getNext() {
      const { data, status } = await this.$http.get(
        `/dj/program?rid=${this.id}&offset=${this.offset}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.programs = data.programs;
    },
    cliCate() {
      this.$router.push(`/discover/djradio/category?id=${djRadio.categoryId}`);
    },
    handleCurrentChange(e) {
      this.offset = (e - 1) * 30;
      this.getNext();
    },
    ...mapActions(["playInfo","addSong","addList"])
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
  padding: 47px 30px 40px 39px;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
     .dt{
      margin-left: 20px;
    }
  .headImg {
    float: left;
    width: 200px;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .msk {
      width: 208px;
      height: 208px;
      position: absolute;
      background: url("../../../assets/coverall.png");
      background-position: 0 -1285px;
      top: -4px;
      left: -4px;
    }
  }
  .headInfo {
    margin-left: 20px;
    width: 410px;
    float: left;
    h3 {
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
      color: #333;
      i {
        background: url("../../../assets/icon.png");
        display: inline-block;
        width: 55px;
        height: 24px;
        background-position: 0 -1014px;
      }
    }

    .auth {
      margin: 20px 0;
      .authImg {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
      a {
        font-size: 12px;
        color: #0c73c2;
      }
    }
    .btnGroup {
      margin-bottom: 20px;
      .el-button {
        margin-right: 5px;
      }
    }
    .desc {
      font-size: 12px;
      color: #666;
      .el-button {
        color: #cc0000;
        border-color: #cc0000;
        font-size: 12px;
        height: 16px;
        width: 60px;
        padding: 0;
        border-radius: 0;
        margin-right: 10px;
      }
    }
  }
  .djList {
    margin-top: 20px;
    h3 {
      span {
        font-size: 12px;
        color: #999;
      }
    }
    ul {
      li {
        height: 40px;
        padding: 20px 0 0 0;
        &:hover {
          .btns {
            display: block;
            width: 84px;
          }
        }
        .rank {
          color: #999;
          span {
            margin: 0 10px;
          }
          .play {
            background: url("../../../assets/table.png");
            background-position: 0 -103px;
            width: 17px;
            height: 17px;
            display: inline-block;
            vertical-align: middle;
            &:hover {
              background-position: 0 -128px;
            }
          }
        }
        .itemName {
          display: flex;
          a {
            color: #333;
            font-size: 12px;
            width: 220px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .btns {
          display: none;
          float: right;
          margin-right: 10px;
        }
        .playInfo {
          font-size: 12px;
          color: #666;
        }
        .creatTime {
          font-size: 12px;
          color: #999;
        }
      }
      li:nth-child(even) {
        background-color: #f7f7f7;
      }
    }
  }
  .page {
    text-align: center;
    margin-top: 20px;
  }
}
</style>