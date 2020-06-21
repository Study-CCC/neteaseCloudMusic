<template>
  <div class="topBarBox">
    <el-carousel height="200px" :autoplay="false" :loop="false" arrow="always">
      <el-carousel-item v-for="(item,i) in categories" :key="i">
        <ul>
          <li :class="{iconCli:item1.id==iconFlag}" v-for="(item1,i1) in item" :key="i1">
            <a @click="cliIcon(item1.id)" >
              <div class="icon" :style="{backgroundImage:'url('+item1.picWebUrl+')'}"></div>
              <p>{{item1.name}}</p>
            </a>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [[]],
      iconFlag: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const id = this.$route.query.id
      if(id)  this.iconFlag = id
      const { data, status } = await this.$http.get("/dj/catelist");
      if (status !== 200) return this.$message.error("数据获取错误");
      let i = 0;
      let j = 0;
      data.categories.map(item => {
        if (i == 18) {
          i = 0;
          j++;
          this.categories[j] = [];
        }

        this.categories[j].push(item);
        i++;
      });
      // console.log(this.categories)
    },
    cliIcon(id) {
            if(id==this.iconFlag) return;
      this.iconFlag = id;
      this.$router.push(`/discover/djradio/category?id=${id}`)
    }
  }
};
</script>
<style lang='less' scoped>
.topBarBox {

  ul {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    li {
      margin: 0 0 25px 33px;
              color: #888;

      &:hover {
        background: url("../../../assets/radio_bg.png");
        background-position: 0 0;
      }
      a {
        display: block;
        width: 70px;
        height: 68px;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        .icon {
          margin: 2px auto 0;
          width: 48px;
          height: 48px;
          background-position: 0 0;
        }
      }
    }
    .iconCli {
       background: url("../../../assets/radio_bg.png");
      background-position: -70px 0;
      color: #d35757;
     &:hover{
        background-position: -70px 0;
     }
     .icon{
       background-position: -48px 0;
     }
    }
  }
}
</style>