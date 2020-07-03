<template>
  <div class="commentConBox">
    <div class="commendTit">
      <h3>评论</h3>
      <span class="total">
        共
        <strong>{{total}}</strong>条
      </span>
    </div>
    <Comment />
    <div class="commentCon">
      <div class="hotBox" v-if="hotcommentCount&&isShow">
        <div class="hotTit">
          <span>精彩评论({{hotcommentCount}})</span>
        </div>
        <div class="hotCon">
          <ul>
            <li v-for="item in hotComments" :key="item.commentId">
              <div class="newItem clearFloat">
                <a :href="`/#/user/home?id=`+item.user.userId">
                  <img :src="item.user.avatarUrl" alt />
                </a>
                <div class="conBox">
                  <div class="itemHead">
                    <a
                      :href="`/#/user/home?id=`+item.user.userId"
                      class="name"
                    >{{item.user.nickname}}</a>
                    :
                    <span class="itemCon">{{item.content}}</span>
                  </div>
                  <div class="answer" v-if="item.beReplied.length!=0">
                    <a
                      :href="`/#/user/home?id=`+item.beReplied[0].user.userId"
                      class="name"
                    >{{item.beReplied[0].user.nickname}}</a>
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
      <div class="newTit">
        <span>最新评论({{commentCount}})</span>
      </div>
      <div class="newCon">
        <ul>
          <li v-for="item in comments" :key="item.commentId">
            <div class="newItem clearFloat">
              <a :href="`/#/user/home?id=`+item.user.userId">
                <img :src="item.user.avatarUrl" alt />
              </a>
              <div class="conBox">
                <div class="itemHead">
                  <a :href="`/#/user/home?id=`+item.user.userId" class="name">{{item.user.nickname}}</a>
                  :
                  <span class="itemCon">{{item.content}}</span>
                </div>
                <div class="answer" v-if="item.beReplied.length!=0">
                  <a
                    :href="`/#/user/home?id=`+item.beReplied[0].user.userId"
                    class="name"
                  >{{item.beReplied[0].user.nickname}}</a>
                  :
                  <span class="itemCon">{{item.beReplied[0].content}}</span>
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
     <div class="page"> <el-pagination
        v-if="total>pageSize"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="total"
      ></el-pagination></div>
    </div>
  </div>
</template>

<script>
import Comment from "../common/comment";
export default {
  data() {
    return {
      comments: [],
      hotComments: [],
      commentCount: 0,
      hotcommentCount: 0,
      total: 0,
      offset: 0,
      id: 0,
      path: "",
      url: "",
      isShow: true,
      pageSize: 20
    };
  },
  created() {
    this.getCmts();
  },
  methods: {
    //处理当前页码
    handleCurrentChange(e) {
      this.offset = (e - 1) *this.pageSize;
      this.isShow = false;
      this.getNext();
    },
    // 获取评论信息
    async getCmts() {
      this.id = this.$route.query.id;
      this.path = this.$route.path;
      if (this.path == "/playlist") {
        this.url = `/comment/playlist?id=${this.id}`;
        this.pageSize = 35;
      } else if (this.path == "/song") {
        this.url = `/comment/music?id=${this.id}`;
      } else if (this.path == "/discover/toplist") {
        this.url = `/comment/playlist?id=${this.id}`;
      }else if(this.path == "/program"){
        this.url=`/comment/dj?id=${this.id}`
      }else if(this.path == "/album"){
        this.url = `/comment/album?id=${this.id}`
      }else if(this.path=="/mv"){
        this.url = `/comment/mv?id=${this.id}`
      }
      const { data, status } = await this.$http.get(this.url);
      if (status !== 200) return this.$message.error("数据获取错误");
      this.comments = data.comments;
      this.commentCount = data.total;
      this.hotComments = data.hotComments;
      this.hotcommentCount = data.hotComments.length;
      this.total = data.total;
    },
    // 获取下一页
    async getNext() {
      const { data, status } = await this.$http.get(
        `${this.url}&offset=${this.offset}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.comments = data.comments;
    }
  },
  components: {
    Comment
  },
  watch: {
    $route(){
      this.getCmts()
    }
  },
};
</script>
<style lang='less' scoped>
a {
  color: #0c73c2;
  &:hover {
    text-decoration: underline;
  }
}
.commentConBox {
  .commendTit {
    height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
    .total {
      color: #666;
      font-size: 12px;
    }
  }
  .commentCon {
    .newTit,
    .hotTit {
      height: 30px;
      border-bottom: 1px solid #cfcfcf;
        line-height: 30px;
      span{
        font-size: 12px;
        color:#333;
        font-weight: bold;
      
      }
    }
    .newCon,
    .hotCon {
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
                width: 620px;
                .name {
                  font-size: 12px;
                }
                .itemCon {
                  color: #666;
                  font-size: 12px;
                }
              }
              .answer {
                width: 572px;
                background: #f4f4f4;
                border: 1px solid #dedede;
                padding: 8px 19px;
                margin-top: 10px;
                line-height: 20px;
              }
              .itemFoot {
                display: flex;
                width: 620px;
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
}
</style>