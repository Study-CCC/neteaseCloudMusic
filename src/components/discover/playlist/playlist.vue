<template>
  <div class="playlist">
    <div class="playTit">
      <h3>全部</h3>
      <!-- 选择分类弹出框 -->
      <el-popover placement="bottom" :offset="250" width="680">
        <h3>
          <el-button size="mini">全部风格</el-button>
        </h3>
        <el-row v-for="(item,index) in categories" :key="index">
          <el-col class="chooseTit" :span="3">
            <i class="chooseIcon" :style="{backgroundPosition:categoryImg[index]}"></i>
            {{item}}
          </el-col>
          <el-col class="chooseItem" :span="21">
            <ul>
              <li v-for="(item1,i) in catlist[index]" :key="i">
                <a
                  :href="'/#/discover/playlist/?cat='+item1.name"
                  :class="item1.name==cat?'tagBg':''"
                  :to="`playlist?tag=${item1.name}`"
                >{{item1.name}}</a>
                <span class="line">|</span>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-button class="chooseBtn" size="small" slot="reference">
          选择分类
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
      </el-popover>
    </div>
    <!-- 歌单列表 -->
    <ul class="hotContent">
      <li v-for="(item) in playlists" :key="item.id">
        <div class="hotImg">
          <img :src="item.coverImgUrl" alt />

          <a :href="'/#/playlist?id='+item.id" class="hotClick"></a>
          <div class="itemBottom">
            <span class="headset"></span>
            <!-- 已听人数 -->
            <span>{{parseInt(item.playCount/10000)}}万</span>
            <a class="video-play" @click="playlist(item.id)"></a>
          </div>
        </div>
        <p class="hotp1">
          <a class="itemTit" :href="'/#/playlist?id='+item.id">{{item.name}}</a>
        </p>
        <p class="hotp2">
          by
          <a :href="'/#/user/home?id='+item.userId">{{item.creator.nickname}}</a>
          <span class="el-icon-star-off"></span>
        </p>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :page-size="35"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getCatlist, getTopPlaylist,getPlaylist } from "../../../utils/api/playlistApi";
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      playlists: [],
      offset: 0,
      total: 0,
      catlist: [],
      categories: [],
      cat: "",
      categoryImg: [
        " -20px -735px",
        "0 -60px",
        "0 -88px",
        "0 -117px",
        "0 -141px"
      ]
      // changePage:
    };
  },
  created() {
    this.getListData();
    this.getCatData();
  },
  methods: {
    //处理当前页码
    handleCurrentChange(e) {
      this.offset = (e - 1) * 35;
      this.getListData();
    },
    getCatData() {
      getCatlist()
        .then(res => {
          res.data.sub.map(item => {
            if (!this.catlist[[item.category]])
              this.catlist[item.category] = [];
            this.catlist[item.category].push(item);
          });
          this.categories = res.data.categories;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    // 点击类别标签获取数据
    getClickData(tag) {
      getTopPlaylist(tag)
        .then(res => {
          this.playlists = res.data.playlists;
          this.total = res.data.total;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    getListData() {
      getTopPlaylist(this.cat, this.offset)
        .then(res => {
          this.playlists = res.data.playlists;
          this.total = res.data.total;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    playlist(id){
      getPlaylist(id).then(res=>{
        let tracks = res.data.playlist.tracks
        this.addList(tracks)
      }).catch(() => {
          this.$message.error("数据获取失败");
        });
    },
    ...mapActions(['addList'])
  },
  watch: {
    $route() {
      this.cat = this.$route.query.cat;
      this.getClickData(this.cat);
    }
  }
};
</script>
<style lang='less' scoped>
a {
  color: #666;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.chooseBtn {
  margin-bottom: 10px;
  margin-left: 10px;
}
.el-popover {
  margin-left: 30px;
  h3 {
    border-bottom: 1px solid #e6e6e6;
    .el-button {
      margin-bottom: 5px;
    }
  }
  .el-row {
    display: flex;
    align-items: center;
    .chooseTit {
      .chooseIcon {
        background: url("../../../assets/icon.png");
        width: 23px;
        height: 23px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .chooseItem {
      ul {
        display: flex;
        padding: 10px 15px 2px 15px;
        border-left: 1px solid #e6e6e6;
        flex-wrap: wrap;
        li {
          a {
            color: #333;
            font-size: 12px;
            background-color: #fff;
          }
          .tagBg {
            background: #a7a7a7;
            color: #fff;
            padding: 2px 6px;
          }
          .line {
            margin: 0 8px 0 10px;
            color: #d8d8d8;
          }
        }
      }
    }
  }
}
.playlist {
  width: 980px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  .el-pagination {
    justify-content: center;
    display: flex;
  }
  .playTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 24px;
    }
  }
  .hotContent {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 140px;
      margin-right: 40px;
      margin-top: 20px;
      .hotp1 {
        margin: 8px 0 3px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        .itemTit {
          color: #000;
          vertical-align: middle;
          font-size: 14px;
          width: 100%;
        }
      }
      .hotp2 {
        font-size: 12px;
        color: #666;
      }
      .hotImg {
        height: 140px;
        position: relative;
      }
      .hotClick {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background: url("../../../assets/coverall.png");
      }
      img {
        width: 100%;
        height: 100%;
      }
      .itemBottom {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        background: url("../../../assets/coverall.png");
        background-position: 0 -537px;
        font-size: 12px;
        color: #ccc;
        .headset {
          margin-left: 10px;
          background: url("../../../assets/iconall.png");
          background-position: 0 -24px;
          width: 14px;
          height: 11px;
        }
        .video-play {
          margin-left: auto;
          margin-right: 10px;
          background: url("../../../assets/iconall.png");
          background-position: 0 0px;
          width: 16px;
          height: 17px;
          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }
}
</style>