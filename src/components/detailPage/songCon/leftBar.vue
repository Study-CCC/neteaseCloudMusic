<template>
  <div class="leftBarBox">
    <div class="header clearFloat">
      <div class="authImg">
        <img :src="detail.coverImgUrl" alt />
        <span class="msk"></span>
      </div>

      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <h3>{{detail.name}}</h3>
        </div>
        <div class="creatTime">
          <p>
            <sapn>
              <a href="#">{{detail.creator.nickname}}</a>
            </sapn>
            <span>{{Date(detail.creator.createTime)}}创建</span>
          </p>
        </div>
        <div class="headerBtn">
          <el-button-group class="norBtn">
            <el-button size="mini" type="primary" icon="el-icon-video-play">播放</el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus"></el-button>
          </el-button-group>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-add">收藏</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-folder-opened">分享</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-download">下载</el-button>
          <el-button class="norBtn" size="mini" icon="el-icon-chat-line-square">()</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    async getData() {
      const { data, status } = await this.$http.get(
        `/playlist/detail?id=${id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
    }
  }
};
</script>
<style lang='less' scoped>
.leftBarBox {
}
</style>