<template>
  <div class="defaultBox">
    <div v-if="songs.length!=0" class="listenList">
      <div class="tit">
        <span>听歌排行</span>
        <span class="accu">累积听歌{{listenSongs}}首</span>
        <div class="time">
          <div :class="{timeColor:showIndex==1}" @click="timeClick(1)">最近一周</div>
          <span>|</span>
          <div :class="{timeColor:showIndex==0}" @click="timeClick(0)">所有时间</div>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in songs" :key="item.song.id">
          <span class="rank">{{index+1}}.</span>
          <i class="play" @click="playInfo(item.song)"></i>
          <a :href="'/#/song?id='+item.song.id" class="songName">{{item.song.name}}</a>
          <a
            :href="'/#/artist?id='+item.song.ar[0].id"
            class="singerName"
          >-({{item.song.ar[0].name}})</a>
          <div class="topBox">
            <BtnGroup :song="item.song" class="btnShow" />
            <div class="tops">
              <span :style="{width:item.score+'%'}"></span>
            </div>
          </div>
        </li>
      </ul>
      <div class="songlist"></div>
    </div>
    <div class="created">
      <h2>{{creatName}}创建的歌单({{playlist.length}})</h2>
      <ul>
        <li v-for="item in playlist" :key="item.id">
          <div class="item">
            <a class="msk" :href="'/#/playlist?id='+item.id"></a>
            <img :src="item.coverImgUrl" alt />

            <div class="bottom">
              <i class="headset"></i>
              <span>{{item.playCount|numFilter}}</span>
              <i class="play"  @click="getPlaylist(item.id)"></i>
            </div>
          </div>
          <p class="itemText">
            <a href="#">{{item.name}}</a>
          </p>
        </li>
      </ul>
    </div>
    <div class="collect">
      <h2>{{creatName}}收藏的歌单({{playlist.length}})</h2>
      <ul>
        <li v-for="item in playlist" :key="item.id">
          <div class="item">
            <a class="msk" :href="'/#/playlist?id='+item.id"></a>
            <img :src="item.coverImgUrl" alt />

            <div class="bottom">
              <i class="headset"></i>
              <span>{{item.playCount}}</span>
              <i class="play" @click="getPlaylist(item.id)"></i>
            </div>
          </div>
          <p class="itemText">
            <a href="#">{{item.name}}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BtnGroup from "../../../components/common/btnGroup";
import {mapGetters,mapActions} from 'vuex'
import { userPlaylist,userRecord} from "../../../utils/api/userApi";
import { getPlaylist } from "../../../utils/api/playlistApi";
export default {
  data() {
    return {
      playlist: [],
      creatName: "",
      showIndex: 1,
      songs: [],
      id: 0
    };
  },
  created() {
    this.getData();
    this.getSongData();
  },
  methods: {
    getPlaylist(id){
      getPlaylist(id)
        .then(res => {
          let songs = res.data.playlist.tracks;
          this.addList(songs);
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    },
     getData() {
      this.id =  this.$route.query.id||this.user.userId;
        userPlaylist(this.id).then(res=>{
          this.playlist = res.data.playlist;
      this.creatName = res.data.playlist[0].creator.nickname;
        })  .catch(() => {
          this.$message.error("数据获取失败");
        });

    },
    getSongData(type = 1) {
     userRecord(this.id,type).then(res=>{
       this.songs = res.data.allData || res.data.weekData;
       this.songs.length = this.songs.length > 10 ? 10 : this.songs.length;
     })  .catch(() => {
          this.$message.error("数据获取失败");
        });
        
    },
    timeClick(e) {
      if (this.showIndex != e) {
        this.showIndex = e;
        this.getSongData(e);
      }
    },
    ...mapActions(['playInfo','addList'])
  },
  components: {
    BtnGroup
  },
  computed:{
    ...mapGetters(['user'])
  },
  props: ["listenSongs"]
};
</script>
<style lang='less' scoped>
.defaultBox {
  .listenList {
    .btnShow {
      display: none;
    }
    .tit {
      color: #333;
      font-weight: normal;
      font-size: 20px;
      border-bottom: 2px solid #c20c0c;
      display: flex;
      align-items: center;
      .accu {
        font-size: 12px;
        color: #999;
        margin-left: 10px;
      }
      .time {
        margin-left: auto;
        .timeColor {
          color: #333;
        }
        div {
          display: inline-block;
          cursor: pointer;
          color: #999;
          font-size: 12px;
        }
        span {
          font-size: 12px;
          color: #999;
          margin: 0 5px;
        }
      }
    }
    ul {
      li {
        display: flex;
        height: 38px;
        align-items: center;
        .topBox {
          margin-left: auto;
          display: flex;
          align-items: center;
          .tops {
            width: 319px;
            height: 38px;
            position: relative;
            span {
              position: absolute;
              height: 38px;
              background-color: #4eb4f5;
              opacity: 0.1;
            }
          }
        }
        &:hover {
          background: #eeeeee;
          .btnShow {
            display: inline-block;
          }
        }
        .rank {
          font-size: 16px;
          color: #666;
          width: 30px;
          margin-left: 20px;
        }
        .play {
          background: url("../../../assets/table.png");
          width: 17px;
          height: 17px;
          margin-right: 8px;
          cursor: pointer;
          background-position: 0 -103px;
          &:hover {
            background-position: 0 -128px;
          }
        }
        a {
          &:hover {
            text-decoration: underline;
          }
        }
        .songName {
          font-size: 12px;
          color: #333;
        }
        .singerName {
          margin-left: 5px;
          font-size: 12px;
          color: #aeaeae;
        }
      }
      li:nth-child(even) {
        background-color: #f7f7f7;
      }
    }
  }
  .created,
  .collect {
    h2 {
      color: #333;
      font-weight: normal;
      font-size: 20px;
      border-bottom: 2px solid #c20c0c;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 55px;
        width: 140px;

        .item {
          width: 140px;
          height: 140px;
          position: relative;
          .msk {
            position: absolute;
            top: 0;
            left: 0;
            background: url("../../../assets/coverall.png");
            background-position: 0 0;
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 27px;
            background: url("../../../assets/coverall.png");
            background-position: 0 -537px;
            color: #ccc;
            display: flex;
            align-items: center;

            i {
              background: url("../../../assets/iconall.png");
              display: inline-block;
            }
            .headset {
              width: 14px;
              height: 11px;
              background-position: 0 -24px;
              margin: 9px 5px 9px 10px;
            }
            span {
              font-size: 12px;
              color: #ccc;
            }
            .play {
              margin-left: auto;
              width: 16px;
              height: 17px;
              background-position: 0 0;
              margin-right: 4px;

              &:hover {
                background-position: 0 -60px;
              }
            }
          }
        }
        .itemText {
          margin: 8px 0 3px;
          font-size: 14px;

          a {
            display: inline-block;
            width: 140px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>