<template>
  <div class="commendBox">
    <div class="commendTit">
      <h3>评论</h3>
      <span class="total">
        共
        <strong>5253254234325</strong>条
      </span>
    </div>
    <div class="commendCon">
      <img src="../../../assets/default_avatar.jpg" alt />
      <el-input type="textarea" :rows="2"></el-input>
      <div class="commendBtn">
        <i class="simle"></i>
        <i class="aite"></i>
        <span>
          139
          <el-button size="mini">按钮</el-button>
        </span>
      </div>
    </div>
    <div class="newCom">
      <div class="newTit">
        <span>最新评论(2564832)</span>
      </div>
      <div class="newCon">
        <ul>
          <li>
            <div class="newItem clearFloat">
              <img src="../../../assets/TEST.jpg" alt />
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.commendBox {
  .commendCon {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .el-textarea {
      width: 700px;
      margin-left: 15px;
    }
    .commendBtn {
      display: flex;
      width: 700px;
      margin-top: 20px;
      margin-left: 70px;
      i {
        background: url("../../../assets/icon.png");
        width: 18px;
        height: 18px;
        display: block;
        margin-right: 10px;
      }
      .simle {
        background-position: -40px -490px;
      }
      .aite {
        background-position: -60px -490px;
      }
      span {
        margin-left: auto;
      }
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
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
  .newCom {
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
                  background: url("../../../assets/icon2.png");
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