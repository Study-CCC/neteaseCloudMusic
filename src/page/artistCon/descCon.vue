<template>
  <div class="descCon">
    <h2>{{authName}}简介</h2>
    <p>{{briefDesc}}</p>
    <ul>
      <li v-for="(item,i) in desc" :key="i">
        <h2>{{item.ti}}</h2>
        <p>{{item.txt}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDesc }from '../../utils/api/artistApi'
  export default {
    data () {
      return {
        desc:[],
        briefDesc:''
      };
    },
    methods: {
       getData(){
 const id = this.$route.query.id;
 getDesc(id).then(res=>{
   this.desc = res.data.introduction
      this.briefDesc = res.data.briefDesc
 }).catch(() => {
          this.$message.error("数据获取失败");
        });
      }
    },
    created() {
      this.getData()
    },
    props:['authName']
  }

</script>
<style lang='less' scoped>
.descCon{
  h2{
    margin: 28px 0 8px 0;
    color: #333;
    font-size: 14px;
  }
  p{
    width: 640px;
line-height: 25px;
font-size:12px ;
    color: #666;
    white-space: pre-wrap;
  }
}
</style>