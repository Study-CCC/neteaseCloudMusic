<template>
  <div class="commentConBox">
       <div class="newTit">
        <span>最新评论(2564832)</span>
      </div>
      <div class="newCon">
        <ul>
          <li>
            <div class="newItem clearFloat">
              <img src="../../assets/TEST.jpg" alt />
              <div class="itemHead">
                <a href="#" class="name">KuDou_Shi_Nichi</a>
                :
                <span class="itemCon">节奏病没钱刷了？就这？</span>
              </div>
              <div class="answer">
                <a href="#" class="name">KuDou_Shi_Nichi</a>
                :
                <span class="itemCon">节奏病没钱刷了？就这？</span>
              </div>
              <div class="itemFoot">
                <span class="time">12:63</span>
                <div class="itemBtn">
                  <a href="#">
                    <i class="like"></i>
                  </a>
                  <span>|</span>
                  <a href="#">回复</a>
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
    data () {
      return {

      };
    },
  }

</script>
<style lang='less' scoped>
 .commentConBox {
    .newTit {
      height: 20px;
      border-bottom: 1px solid #cfcfcf;
    }
    .newCon {
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
            .itemHead,
            .answer {
              float: right;
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
              float: right;
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
</style>