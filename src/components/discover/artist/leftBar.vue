<template>
  <div class="leftBar">
    <ul>
      <li v-for="(item,index) in typeList" :key="index">
        <div :class="index==0?'':'leftInfo'">
          <h3>{{item.tit}}</h3>
          <ul>
            <li v-for="(item1,i) in item.list" :class="id==(item.id+''+((i||'')+1))?'visited':''" :key="i">
              <a  :href="'/#/discover/artist/cat?id='+item.id+((i||'')+1)">{{item1}}</a>
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
        {
          tit: "华语",
          id: 7,
          list: ["华语男歌手", "华语女歌手", "华语组合/乐队"]
        },
        {
          tit: "欧美",
          id:96,
          list: ["欧美男歌手", "欧美女歌手", "欧美组合/乐队"]
        },
        {
          tit: "日本",
          id:8,
          list: ["日本男歌手", "日本女歌手", "日本组合/乐队"]
        },
        {
          tit: "韩国",
          id: 16,
          list: ["韩国男歌手", "韩国女歌手", "韩国组合/乐队"]
        },
        {
          tit: "其他",
          id: 0,
          list: ["其他男歌手", "其他女歌手", "其他组合/乐队"]
        }
      ],
      id: 0
    };
  },
  watch: {
    $route(){
      this.id = this.$route.query.id
    }
  },
};
</script>
<style lang='less' scoped>
.leftBar {
  .visited {
    background-color: #fefefe;
    border: 1px #e2e2e2 solid;

   a{ color: #c20c0c;
    &:hover{
text-decoration: none;
    }}
  }
  a {
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
  .leftInfo {
    margin: 5px 0 0;
    padding-top: 16px;
    border-top: 1px solid #d3d3d3;
  }
  ul {
    ul {
      li {
        padding: 5px 20px;
        color: #333;
        font-size: 12px;
      }
    }
  }
}
</style>