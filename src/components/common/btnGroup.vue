<template>
  <div class="btnGroupBox">
        <div class="iconGroup">
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="添加到播放列表" placement="bottom-start">
                    <i class="add" @click="addSong({
                  id:song.id,
                  name:song.name,
                  authName:song.ar[0].name,
                  authId:song.ar[0].id,
                  picUrl:song.al.picUrl,
                  duration:song.dt
                })"></i>
                </el-tooltip>
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="收藏" placement="bottom-start">
                    <i class="collect"></i>
                </el-tooltip>
                <el-tooltip class="item"  :open-delay="1000"  effect="light" content="分享" placement="bottom-start">
                    <i class="share"></i>
                </el-tooltip>
            </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data () {
      return {

      };
    },
    methods: {
      ...mapActions(['addSong'])
    },
    props:['song']
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
}
}
</style>