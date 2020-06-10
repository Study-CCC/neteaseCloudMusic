<template>
  <div class="commentConBox">
    <div class="hotTit" v-if="hotcommentCount">
      <span>精彩评论({{hotcommentCount}})</span>
    </div>
    <div class="hotCon" v-if="hotcommentCount">
      <ul>
        <li v-for="item in hotComments" :key="item.commentId">
          <div class="newItem clearFloat">
            <a :href="`/#/user/home?id=`+item.user.userId"><img :src="item.user.avatarUrl" alt /></a>
            <div class="conBox">
              <div class="itemHead">
                <a :href="`/#/user/home?id=`+item.user.userId" class="name">{{item.user.nickname}}</a>
                :
                <span class="itemCon">{{item.content}}</span>
              </div>
              <div class="answer" v-if="item.beReplied.length!=0">
                <a :href="`/#/user/home?id=`+item.beReplied[0].user.userId" class="name">{{item.beReplied[0].user.nickname}}</a>
                :
                <span class="itemCon">{{item.beReplied[0].user.content}}</span>
              </div>
              <div class="itemFoot">
                <span class="time">{{Date(item.time)}}</span>
                <div class="itemBtn">
                  <a href="#">
                    <i class="like"></i>
                    <span class="likeCount" v-if="item.likedCount">({{item.likedCount}})</span>
                  </a>
                  <span>|</span>
                  <a href="#">回复</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
        <div class="newTit">
      <span>最新评论({{commentCount}})</span>
    </div>
    <div class="newCon">
      <ul>
        <li v-for="item in comments" :key="item.commentId">
          <div class="newItem clearFloat">
            <a :href="`/#/user/home?id=`+item.user.userId"><img :src="item.user.avatarUrl" alt /></a>
            <div class="conBox">
              <div class="itemHead">
                <a :href="`/#/user/home?id=`+item.user.userId" class="name">{{item.user.nickname}}</a>
                :
                <span class="itemCon">{{item.content}}</span>
              </div>
              <div class="answer" v-if="item.beReplied.length!=0">
                <a :href="`/#/user/home?id=`+item.beReplied[0].user.userId" class="name">{{item.beReplied[0].user.nickname}}</a>
                :
                <span class="itemCon">{{item.beReplied[0].user.content}}</span>
              </div>
              <div class="itemFoot">
                <span class="time">{{Date(item.time)}}</span>
                <div class="itemBtn">
                  <a href="#">
                    <i class="like"></i>
                    <span class="likeCount" v-if="item.likedCount">({{item.likedCount}})</span>
                  </a>
                  <span>|</span>
                  <a href="#">回复</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments:[],
      hotComments:[],
      commentCount:0,
      hotcommentCount:0
    };
  },
  created() {
    this.getCmts()
  },
  methods: {
    async getCmts(){
      const {data,status} = await this.$http.get("/comment/playlist?id=4986087000")
      if(status!==200) return this.$message.error("数据获取错误");
      this.comments = data.comments
      this.commentCount = data.total
      this.hotComments = data.hotComments
      this.hotcommentCount = data.hotComments.length
    }
  },
  // props:["id"]
};
</script>
<style lang='less' scoped>
a{
  color: #0c73c2;
  &:hover{
    text-decoration:underline;
  }
}
.commentConBox {
  .newTit,.hotTit {
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
  }
  .newCon,.hotCon {
    ul {
      li {
        .newItem {
          border-top: 1px dotted #ccc;
          padding: 20px 0;
          img {
            width: 50px;
            height: 50px;
            float: left;
          }
          .conBox {
            margin-left: 60px;
            .itemHead,
            .answer {
              width: 700px;
              .name {
                font-size: 12px;
              }
              .itemCon {
                color: #666;
                font-size: 12px;
              }
            }
            .answer {
              width: 662px;
              background: #f4f4f4;
              border: 1px solid #dedede;
              padding: 8px 19px;
              margin-top: 10px;
              line-height: 20px;
            }
            .itemFoot {
              display: flex;
              width: 700px;
              margin-top: 10px;
              span {
                color: #999;
                font-size: 12px;
              }
              .itemBtn {
                margin-left: auto;
                a {
                  color: #999;
                  font-size: 12px;
                }
                span {
                  margin: 0 5px;
                }
                .like {
                  background: url("../../assets/icon2.png");
                  display: inline-block;
                  width: 15px;
                  height: 14px;
                  background-position: -150px 0;
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