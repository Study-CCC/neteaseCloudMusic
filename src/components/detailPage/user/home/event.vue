<template>
  <div class="eventBox">
    <h2>TA的动态({{eventNum}})</h2>
    <div class="eventText">
      <div class="leftCon">
        <ul>
          <li v-for="item in events" :key="item.id">
            <div class="userItem clearFloat">
              <img :src="item.user.avatarUrl" alt />

              <div class="userInfo">
                <p>
                  <a :href="'/#/user/home?id='+item.user.userId">{{item.user.nickname}}</a>
                  {{type[item.type]}}
                </p>
                <span>{{item.showTime}}</span>
              </div>
            </div>
            <div class="eventCon">
              <p class="eventText">{{JSON.parse(item.json).msg}}</p>
              <div v-if="item.type==18" class="song clearFloat">
                <a href="#" class="imgBox">
                  <i></i>
                  <img :src="JSON.parse(item.json).song.album.blurPicUrl" alt />
                </a>
                <div class="songUser">
                  <h3>
                    <a
                      :href="'/#/song?id='+JSON.parse(item.json).song.id"
                    >{{JSON.parse(item.json).song.name}}</a>
                  </h3>
                  <p>
                    <a
                      :href="'/#/artist?id='+JSON.parse(item.json).song.artists[0].id"
                    >{{JSON.parse(item.json).song.artists[0].name}}</a>
                  </p>
                </div>
              </div>
              <img class="pics" v-if="item.pics.length!=0" :src="item.pics[0].originUrl" alt />
            </div>
            <div class="iconBox clearFloat">
              <div class="icon">
                <a href="javascript:void(0);">
                  <i></i>
                  <span v-if="item.info.likedCount">({{item.info.likedCount}})</span>
                </a>
                <span class="line">|</span>
                <a href="javascript:void(0);">
                  转发
                  <span v-if="item.info.shareCount">({{item.info.shareCount}})</span>
                </a>
                <span class="line">|</span>
                <a href="javascript:void(0);">
                  评论
                  <span v-if="item.info.commentCount">({{item.info.commentCount}})</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="rightCon"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { userEvent } from "../../../../utils/api/userApi";
export default {
  data() {
    return {
      eventNum: 0,
      events: [],
      type: {
        18: "分享单曲",
        19: "分享专辑",
        17: "分享电台节目",
        28: "分享电台节目",
        22: "转发",
        39: "发布视频",
        35: "分享歌单",
        13: "分享歌单",
        24: "分享专栏文章",
        41: "分享视频",
        21: "分享视频"
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const id = this.$route.query.id;
      userEvent(id)
        .then(res => {
          this.eventNum = res.data.size;
          this.events = res.data.events;
        })
        .catch(() => {
          this.$message.error("数据获取失败");
        });
    }
  }
};
</script>
<style lang='less' scoped>
.eventBox {
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  h2 {
    font-size: 20px;
    font-size: #666;
    border-bottom: 2px solid #c20c0c;
  }
  .eventText {
    .leftCon {
      ul {
        width: 650px;
        li {
          border-bottom: 1px solid #e8e8e9;
          padding: 20px 0;
          .userItem {
            img {
              height: 45px;
              width: 45px;
              float: left;
            }
            .userInfo {
              height: 45px;
              float: left;
              margin-left: 10px;
              p {
                font-size: 14px;
                color: #666;
                a {
                  font-size: 14px;
                  color: #0c73c2;
                }
              }
              span {
                font-size: 12px;
                color: #999;
              }
            }
          }
          .eventCon {
            margin-left: 60px;
            .pics {
              width: 224px;
              height: 224px;
            }
            .eventText {
              color: #333;
              margin-top: 8px;
              font-size: 14px;
            }
            .song {
              background: #f5f5f5;
              padding: 10px;
              margin: 4px 0 5px;
              .imgBox {
                height: 40px;
                width: 40px;
                display: block;
                float: left;
                position: relative;
                i {
                  background: url("../../../../assets/frd_dyn_sprite.png");
                  background-position: -100px -70px;
                  top: 0;
                  left: 0;
                  width: 40px;
                  height: 40px;
                  opacity: 0.8;
                  position: absolute;
                  display: inline-block;
                  &:hover {
                    opacity: 1;
                  }
                }
                img {
                  height: 40px;
                  width: 40px;
                }
              }
              .songUser {
                float: left;

                h3 {
                  font-size: 14px;
                  font-weight: normal;
                  margin-left: 10px;
                  a {
                    color: #333;
                  }
                }
                p {
                  font-size: 12px;
                  margin-left: 10px;
                  margin-top: 5px;
                  a {
                    color: #999;
                  }
                }
              }
            }
          }
          .iconBox {
            .icon {
              float: right;
              .line {
                margin: 0 10px 0 12px;
                color: #c7c7c7;
              }
              a {
                color: #0c73c2;
                font-size: 12px;
                &:hover {
                  text-decoration: underline;
                }
                i {
                  display: inline-block;
                  background: url("../../../../assets/frd_dyn_sprite.png");
                  width: 14px;
                  height: 14px;
                  background-position: 0 -20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>