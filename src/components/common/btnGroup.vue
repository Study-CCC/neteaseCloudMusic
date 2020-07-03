<template>
  <div class="btnGroupBox">
        <div class="iconGroup">
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="添加到播放列表" placement="bottom-start">
                  <a>
                    <i class="add"></i>
                  </a>
                </el-tooltip>
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="收藏" placement="bottom-start">
                  <a>
                    <i class="collect"></i>
                  </a>
                </el-tooltip>
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="分享" placement="bottom-start">
                  <a>
                    <i class="share"></i>
                  </a>
                </el-tooltip>
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="下载" placement="bottom-start">
                  <a href="#">
                    <i class="download"></i>
                  </a>
                </el-tooltip>
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
.btnGroupBox{
.iconGroup {
  i {
    background: url("../../assets/table.png");
    width: 18px;
    height: 16px;
    margin: 2px 0 0 4px;
    display: inline-block;
  }
  .add {
    background: url("../../assets/icon.png");
    background-position: 0 -700px;
  }
  .collect {
    background-position: 0 -174px;
  }
  .share {
    background-position: 0 -195px;
  }
  .download {
    background-position: -81px -174px;
  }
}
}
</style>