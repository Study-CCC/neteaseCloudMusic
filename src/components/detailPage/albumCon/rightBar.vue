<template>
  <div class="rightBar">
    <h3 class="hotTit">Ta的其他热门专辑</h3>
    <ul>
      <li v-for="item in rightData.hotAlbums" :key="item.id">
        <a :href="'/#/album?id='+item.id">
          <img :src="item.picUrl" alt />
        </a>
        <div class="text">
          <a :href="'/#/playlist?id='+item.id">
            <h3>{{item.name}}</h3>
          </a>
          <span>{{item.publishTime}}</span>
        </div>
      </li>
    </ul>
<MoreDown />
  </div>
</template>

<script>
import MoreDown from "../../common/moreDown";
export default {
  data() {
    return {};
  },
  components: {
    MoreDown
  },
  props: ["rightData"]
};
</script>
<style lang='less' scoped>
.rightBar {
  padding-left: 10px;
  .hotTit {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
  }
  ul {
    li {
      height: 50px;
      width: 205px;
      margin-top: 10px;
      img {
        float: left;
        width: 50px;
        height: 50px;
      }
      .text {
        width: 150px;
        float: left;
        margin-left: 5px;
        h3 {
          font-size: 14px;
          color: #000;
          font-weight: normal;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>