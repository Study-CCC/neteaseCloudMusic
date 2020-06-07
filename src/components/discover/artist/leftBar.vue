<template>
  <div class="leftBar">
    <ul>
      <li v-for="(item,index) in typeList" :key="index">
        <div :class="index==0?'':'leftInfo'">
          <h3>{{item.tit}}</h3>
          <ul>
            <li v-for="(item1,i) in item.list" :key="i">
                {{item1}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: [
        { tit: "推荐", list: ["推荐歌手", "入驻歌手"] },
        { tit: "华语", list: ["华语男歌手", "华语女歌手", "华语组合/乐队"] },
        { tit: '欧美', list: ["欧美男歌手", "欧美女歌手", "欧美组合/乐队"] },
        { tit: '日本', list: ["日本男歌手", "日本女歌手", "日本组合/乐队"] },
        { tit: '韩国', list: ["韩国男歌手", "韩国女歌手", "韩国组合/乐队"] },
        { tit: '其他', list: ["其他男歌手", "其他女歌手", "其他组合/乐队"] }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.leftInfo{
    margin: 5px 0 0;
    padding-top: 16px;
    border-top: 1px solid #d3d3d3;
}
</style>