<template>
  <div class="singedBox">
    <div class="singedTit">
      <h3>华语男歌手</h3>
    </div>
    <div class="AlphSele">
      <ul>
        <el-button>热门</el-button>
        <li v-for="item in Alph" :key="item">
          <a :href="'/artist/list?limit=100&initial='+item">{{item}}</a>
          <i></i>
        </li>
      </ul>
    </div>
    <div class="singerList">
      <ul>
        <li v-for="(item,index) in singerList" :key="index">
          <div class="top" v-if="index<=9">
            <img :src="item.img1v1Url" alt />
            <p>
              <a href="#">{{item.name}}</a>
            </p>
          </div>
          <div class="name" v-else>
            <a href="#">{{item.name}}</a>
            <i></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getArtistList } from "../../../utils/api/artistApi";
export default {
  data() {
    return {
      singerList: [],
      Alph: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O,",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "其他"
      ],id:0,
      initial:-1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.id = this.$route.query.id
      getArtistList(this.id,this.initial).then(res=>{
              this.singerList = res.data.artists;
      }).catch(() => {
          this.$message.error("数据获取失败");
        });
      
    },
  },
  watch: {
    $route(){
      const id = this.$route.query.id
      const initial = this.$route.query.initial||-1
      this.getData()
    }
  },
};
</script>
<style lang='less' scoped>
.lineSinger {
  border-bottom: 1px dotted #999;
  margin-bottom: 12px;
}
.singedBox {
  .singedTit {
    border-bottom: 2px solid #c20c0c;
  }
  .AlphSele {
    ul {
      display: flex;
      li {
        width: 45px;
        height: 24px;
        a{

        }
      }
    }
  }
  .singerList {
    ul {
      display: flex;
      flex-wrap: wrap;
      .top {
        margin-right: 17px;
        img {
          width: 130px;
          height: 130px;
        }
      }
      .name {
        width: 130px;
        height: 30px;
        margin-right: 17px;
      }
    }
  }
}
</style>