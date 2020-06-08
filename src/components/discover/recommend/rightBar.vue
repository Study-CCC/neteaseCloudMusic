<template>
  <div class="RightBox">
    <el-card>
      <div class="userLogin">
        <p class="rightText">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <el-button size="small" type="danger">用户登录</el-button>
      </div>
      <!-- 入驻歌手 -->
      <div class="singer">
        <div class="singerTit">
          <span class="tit">入驻歌手</span>
          <a href="#" class="more">查看全部</a>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column ></el-table-column>
        </el-table>
        <el-button>申请成为网易音乐人</el-button>
      </div>
      <!-- 热门主播 -->
      <div class="hotAnchor">
        <div class="hotTit">
          <span class="tit">热门主播</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>
<style lang='less' scoped>
.RightBox {
  width: 254px;
  .userLogin {
    .rightText {
      color: #666;
      line-height: 22px;
      font-size: 12px;
    }
    .el-button {
    }
  }
  .singer {
    .more {
      margin-left: auto;
      color: #666;
      font-size: 12px;
    }
    .singerTit {
      display: flex;
      border-bottom: 1px solid rgb(204, 204, 204);
    }
  }
  .hotTit {
    border-bottom: 1px solid rgb(204, 204, 204);
  }
  .tit {
    font-size: 12px;
    color: #333;
  }
}
</style>