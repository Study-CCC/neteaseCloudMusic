<template>
  <div class="singedBox">
    <div class="singedTit">
      <h3>华语男歌手</h3>
    </div>
    <div class="AlphSele">
      <ul>
        <el-button>热门</el-button>
        <li v-for="item in Alph" :key="item">
          <a href="#" @click="sele(item)">{{item}}</a>
          <i></i>
        </li>
      </ul>
    </div>
    <div class="singerList">
      <ul>
        <li v-for="(item,index) in singerList" :key="index">
          <div class="top" v-if="index<=7">
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
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get("/artist/list?limit=100");
      if (status !== 200) return this.$message.error("数据获取错误");
      console.log(data);
      this.singerList = data.artists;
    },
    async sele(a){
         const { data, status } = await this.$http.get(`/artist/list?limit=100&initial=${a}`);
      if (status !== 200) return this.$message.error("数据获取错误");
    //   console.log(data);
      this.singerList = data.artists;
    }
  }
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