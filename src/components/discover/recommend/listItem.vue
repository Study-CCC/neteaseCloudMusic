<template>
  <div class="listItemBox">
    <div class="header clearFloat">
      <div class="imgBox">
        <img :src="titData.coverImgUrl" alt />
        <a :href="'/#/discover/toplist?id='+titData.id" class="msk"></a>
      </div>
      <div class="titBar">
        <a :href="'/#/discover/toplist?id='+titData.id">
          <h3>{{titData.name}}</h3>
        </a>
        <div class="headerBtn">
          <el-tooltip
            :open-delay="300"
            class="item"
            effect="light"
            content="播放"
            placement="bottom-start"
          >
            <a href="#">
              <i class="play"></i>
            </a>
          </el-tooltip>
          <el-tooltip
            :open-delay="300"
            class="item"
            effect="light"
            content="收藏"
            placement="bottom-start"
          >
            <a href="#">
              <i class="collect"></i>
            </a>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,i) in listData" :key="i">
          <span class="rank">{{i+1}}</span>
          <a :href="'/#/song?id='+item.id" class="name">{{item.name}}</a>
          <div class="btn">
            <el-tooltip
              :open-delay="300"
              class="item"
              effect="light"
              content="播放"
              placement="bottom-start"
            >
              <a href="#">
                <i class="play"></i>
              </a>
            </el-tooltip>
            <el-tooltip
              :open-delay="300"
              class="item"
              effect="light"
              content="添加到播放列表"
              placement="bottom-start"
            >
              <a href="#">
                <i class="add"></i>
              </a>
            </el-tooltip>
            <el-tooltip
              :open-delay="300"
              class="item"
              effect="light"
              content="收藏"
              placement="bottom-start"
            >
              <a href="#">
                <i class="collect"></i>
              </a>
            </el-tooltip>
          </div>
        </li>
      </ul>
    </div>
    <div class="more clearFloat">
      <a href="#">查看更多>></a>
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
      this.titData.id = data.playlist.id;
      data.playlist.tracks.length = 10;
      this.listData = data.playlist.tracks;
      // console.log(data.playlist)
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
    .titBar {
      float: left;
      width: 116px;
      margin: 6px 0 0 10px;
      a {
        color: #333;
        font-size: 12px;
        &:hover {
          text-decoration: underline;
        }
      }
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
          &:hover {
            background-position: -267px -235px;
          }
        }
        .collect {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .content {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 22px;
      li {
        display: flex;
        width: 100%;
        height: 32px;
        align-items: center;
        &:hover {
          .btn {
            display: block;
             width: 85px;
          }
          .name {
            width: 124px;
          }
        }
        .btn {
          margin-left: auto;
          display: none;
         
          i {
            display: inline-block;
            width: 17px;
            height: 17px;
            margin-right: 10px;
            background: url("../../../assets/index.png");
          }
          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .add {
            background: url("../../../assets/icon.png");
            background-position: 0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
          }
          .collect {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
        .rank {
          font-size: 12px;
          width: 20px;
          text-align: center;
        }
        .name {
          color: #333;
          margin-left: 10px;
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .more {
    a {
      float: right;
      font-size: 12px;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>