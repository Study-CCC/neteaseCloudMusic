<template>
  <div class="listBox">
    <div class="listTit">
      <h3>榜单</h3>
      <a href="/#/discover/toplist" class="more">更多</a>
    </div>
    <el-row class="bill">
      <el-col :span="8">
        <ListItem :id='id[0]'></ListItem>
      </el-col>
      <el-col :span="8">
        <ListItem :id='id[1]'></ListItem>
      </el-col>
      <el-col :span="8">
        <ListItem :id='id[2]'></ListItem>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ListItem from './listItem'
export default {
  data() {
    return {
      id:[
        '3','0','2'
      ]
    };
  },
  components:{
    ListItem
  }
};
</script>
<style lang='less' scoped>
.listBox {
  .bill{
    margin-top: 20px;
    background: url('../../../assets/index_bill.png');
  }
  .listTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;

    .more {
      margin-left: auto;
    }
  }
}
</style>