<template>
  <div class="listItemBox">
    <div class="header clearFloat">
      <div class="imgBox">
        <img :src="titData.coverImgUrl" alt />
        <a href="#" class="msk"></a>
      </div>
      <div class="tit">
        <h3>{{titData.name}}</h3>
        <div class="headerBtn">
          <i class="play"></i>
          <i class="collect"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <el-table :data="listData" stripe style="width: 100%">
        <el-table-column>
          <template v-slot="program">
            <div class="conItem">
              <div class="rank">
                <span>{{program.$index+1}}</span>
              </div>
              <div class="itemText">
                <span>{{program.row.name}}</span>
              </div>
              <div class="conBtn">
                <i class="play"></i>
                <i class="add"></i>
                <i class="collect"></i>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- <ul>
        <li>
          <div class="conItem">
            <span>1</span>
            <span>海底</span>
            <div class="conBtn">
              <i class="play"></i>
              <i class="add"></i>
              <i class="collect"></i>
            </div>
          </div>
        </li>
      </ul>-->
    </div>
    <div class="more clearFloat">
      <a href="#">查看更多</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      titData: {}
    };
  },
  created() {
    this.getData();
  },
  props: ["id"],
  methods: {
    async getData() {
      const { data, status } = await this.$http.get(`/top/list?idx=${this.id}`);
      if (status !== 200) return this.$message.error("数据获取错误");
      // console.log(data);
      this.titData.coverImgUrl = data.playlist.coverImgUrl;
      this.titData.name = data.playlist.name;
      data.playlist.tracks.length = 10;
      this.listData = data.playlist.tracks;
    }
  }
};
</script>
<style lang='less' scoped>
.listItemBox {
  .header {
    padding: 20px 0 0 19px;
    .imgBox {
      height: 80px;
      width: 80px;
      float: left;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      a {
        background: url("../../../assets/coverall.png");
        background-position: -145px -57px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .tit {
      float: left;
      width: 116px;
      margin: 6px 0 0 10px;
      h3 {
        margin: 0;
        font-size: 14px;
      }
      .headerBtn {
        margin-top: 10px;
        i {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background: url("../../../assets/index.png");
        }
        .play {
          background-position: -267px -205px;
        }
        .collect {
          background-position: -300px -205px;
        }
      }
    }
  }
  .content {
    .conItem {
      display: flex;
      .itemText {
        span {
          color: #000;
          font-size: 12px;
        }
      }
      .conBtn {
        margin-left: auto;
        i {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          background: url("../../../assets/index.png");
        }
        .play {
          background-position: -267px -268px;
        }
        .add {
          background: url("../../../assets/icon.png");
          background-position: 0 -700px;
        }
        .collect {
          background-position: -297px -268px;
        }
      }
    }
  }
  .more {
    a {
      float: right;
    }
  }
}
</style>