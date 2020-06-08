<template>
  <div class="leftBox">
    <span class="title">云音乐特色榜</span>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item v-for="(item,index) in list" :key="index" @click="titClick(item.id)">
       <img :src="item.coverImgUrl" alt />
        <div class="itemText">
          <p>{{item.name}}</p>
          <p style="color:#999">{{item.updateFrequency}}</p>
        </div>
      </el-menu-item>
      
    </el-menu>
    
    <!-- <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <img src="../../../assets/TEST.jpg" alt />
        <div class="itemText">
          <p>云音乐飙升</p>
          <p style="color:#999">每天更新</p>
        </div>
      </el-menu-item> 
    </el-menu>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/toplist");
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data)
      this.list = data.list
    },
    titClick(id){
      console.log(id)
    }
  }
};
</script>
<style lang='less' scoped>
.leftBox {
  width: 243px;
  .title {
    font-size: 14px;
    margin-top: 25px;
    color: #000;
  }
  .el-menu-item {
    display: flex;
    height: 42px;
    margin-top: 10px;
    img {
      height: 40px;
      width: 40px;
    }
    .itemText {
      margin-left: 20px;
      p {
        font-size: 12px;
        line-height: 20px;
        margin: 0;
      }
    }
  }
}
</style>
