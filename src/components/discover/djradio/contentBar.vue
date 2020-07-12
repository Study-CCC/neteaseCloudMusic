<template>
  <div class="contentBarBox">
    <ul class="conGroup">
      <li v-for="(item,i) in djId" :key="item">
        <div class="conTit">
          <h3>
            <a :href="'/#/discover/djradio/category?id='+djId[i]">{{djTit[i]}}</a>·电台
          </h3>
          <a href="#" class="more">更多</a>
        </div>
        <ul>
          <li class="itemCon" v-for="item1 in djPlaylist[i]" :key="item1.id">
            <a :href="'/#/djradio?id='+item1.id">
              <img :src="item1.picUrl" alt />
            </a>
            <a :href="'/#/djradio?id='+item1.id">{{item1.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDjRecommend } from "../../../utils/api/djApi";
export default {
  data() {
    return {
      djPlaylist: [],
      djId: [2, 6, 5, 3, 2001, 11],
      djTit: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      for (let i = 0; i < this.djId.length; i++) {
        getDjRecommend(this.djId[i])
          .then(res => {
            res.data.djRadios.length = 4;
            this.djPlaylist.push(res.data.djRadios);
            this.djTit.push(res.data.djRadios[0].category);
          })
          .catch(() => {
            this.$message.error("数据获取失败");
          });
      }
    }
  }
};
</script>
<style lang='less' scoped>
.contentBarBox {
  a {
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
  .conTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 40px;
    a {
      margin-left: auto;
    }
  }
  .conGroup {
    li {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 435px;
          height: 120px;
          padding: 20px 0;
          border-bottom: 1px solid #e7e7e7;
          img {
            width: 120px;
            height: 120px;
            float: left;
          }
          a {
            float: left;
            color: #000;
            font-size: 18px;
            font-weight: bold;
            // line-height: 80px;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>