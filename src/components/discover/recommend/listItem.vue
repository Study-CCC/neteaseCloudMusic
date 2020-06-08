<template>
  <div class="listItemBox">
    <div class="header clearFloat">
      <img src="../../../assets/TEST.jpg" alt />
      <h3>云音乐飙升榜</h3>
      <div class="headerBtn">
        <i class="play"></i>
        <i class="collect"></i>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="conItem">
            <span>1</span>
            <span>海底</span>
            <div class="conBtn">
              <i class="play"></i>
              <i class="add"></i>
              <i class="collect"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="more clearFloat">
        <a href="#">查看更多</a>
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
.listItemBox {
  .header {
    padding: 20px 0 0 19px;
    img {
      height: 80px;
      width: 80px;
      float: left;
    }
    h3 {
      float: left;
      margin: 0;
      margin-left: 10px;
    }
    .headerBtn {
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      i {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        background: url("../../../assets/index.png");
      }
      .play {
        background-position: -267px -205px;
      }
      .collect {
        background-position: -300px -205px;
      }
    }
  }
    .content {
      ul {
        li {
          .conItem {
              padding:5px 20px;
            display: flex;
            .conBtn {
              margin-left: auto;
              i {
                display: inline-block;
                width: 17px;
                height: 17px;
                margin-right: 10px;
                background: url("../../../assets/index.png");
              }
              .play {
                background-position: -267px -268px;
              }
              .add {
                  background: url('../../../assets/icon.png');
                background-position: 0 -700px;
              }
              .collect {
                background-position: -297px -268px;
              }
            }
          }
        }
      }
    }
    .more{
        a{
            float: right;
        }
    }
}
</style>