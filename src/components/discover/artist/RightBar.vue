<template>
  <div class="rightBox">
    <div class="singedTit">
      <h3>华语男歌手</h3>
    </div>
    <div class="AlphSele">
      <ul>
        <el-button>热门</el-button>
        <li v-for="item in Alph" :key="item">
          <a :class="initial==item?'visited':''" :href="'/#/discover/artist/cat?limit=100&id='+id+'&initial='+item">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="singerList">
      <ul>
        <li v-for="(item,index) in singerList" :key="index">
          <div class="top" v-if="index<=9">
            <a class="msk" :href="'/#/artist?id='+item.id"></a><img :src="item.img1v1Url" alt />
            <p>
              <a  :href="'/#/artist?id='+item.id">{{item.name}}</a>
            </p>
          </div>
          <div class="name" v-else>
            <a :href="'/#/artist?id='+item.id">{{item.name}}</a>
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
      ],
      id:71,
      initial: -1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.id = this.$route.query.id||71;
      const type = this.id%10
      const area = parseInt(this.id/10)
      const { data, status } = await this.$http.get(
        `/artist/list?limit=100&type=${type}&area=${area}&initial=${this.initial}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data);
      this.singerList = data.artists;
    }
  },
  watch: {
    $route() {
      this.id = this.$route.query.id;
      this.initial = this.$route.query.initial || -1;
      this.getData();
    }
  }
};
</script>
<style lang='less' scoped>
.lineSinger {
  border-bottom: 1px dotted #999;
  margin-bottom: 12px;
}
.visited {
  color: #fff;
  background: #c20c0c;
  border-radius: 2px;
  color: #fff;
}
a{
  font-size: 12px;
  color:#000;
  &:hover{
    text-decoration: underline;
  }
}
.rightBox {
  .singedTit {
    border-bottom: 2px solid #c20c0c;
  }
  .AlphSele {
    ul {
      display: flex;
      margin-top: 20px;
      align-items: center;
      .el-button {
        margin-right: 10px;
        background: #c20c0c;
        color: #fff;
        width: 45px;
        height: 24px;
        padding: 5px 10px;
      }
      li {
        width: 45px;
        height: 24px;
        a {
          color: #333;
         font-size: 14px;
         width: 20px;
         display: block;
         text-align: center;
        }
      }
    }
  }
  .singerList {
    ul {
      display: flex;
      flex-wrap: wrap;
     li{ 
       margin-top: 10px;
       .top {
        margin-right: 17px;
        position: relative;
        .msk{
          position: absolute;
          background: url('../../../assets/coverall.png');
          background-position: 0 -680px;
          width: 130px;
          height: 130px;
          left: 0;
          top: 0;
        }
        img {
          width: 130px;
          height: 130px;
        }
      }
      .name {
        width: 130px;
        height: 30px;
        margin-right: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }}
  }
}
</style>
