<template>
  <div class="allAlumBox">
    <ul>
      <li v-for="item in hotAlbums" :key="item.id">
        <div class="imgBox">
          <img :src='item.blurPicUrl' alt />
          <a href="#" class="msk"></a>
          <a href="#">
            <i class="play"></i>
          </a>
        </div>
        <h3>{{item.name}}</h3>
        <span>{{item.publishTime|creatTimeFilter}}</span>
      </li>
    </ul>
    <div class="page">
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      :page-size="12"
    ></el-pagination></div>
  </div>
</template>

<script>
import {getArtistAlbum} from '../../../utils/api/albumApi'
export default {
  data() {
    return {
      total: 0,
      offset: 0,
      hotAlbums: []
    };
  },
  created() {
      this.getData()
  },
  methods: {
    handleCurrentChange(e) {
      this.offset = (e - 1) * 12;
      this.getData();
    },
    async getData() {
      const id = this.$route.query.id;
  getArtistAlbum(id,this.offset).then(res=>{
       this.hotAlbums = res.data.hotAlbums
      this.total = res.data.artist.albumSize
      }).catch(() => {
          this.$message.error("唱片数据获取失败");
        });
    }
  }
};
</script>
<style lang='less' scoped>
.allAlumBox {
  margin-top: 20px;
  ul {
      width: 640px;
      display: flex;
      flex-wrap: wrap;
    li {
      width: 145px;
      height: 175px;
      margin-right: 15px;
      .imgBox {
        width: 120px;
        height: 120px;
        position: relative;
        &:hover{
            display: block;
        }
        img {
          height: 100%;
          width: 100%;
        }
        .msk {
            display: block;
          width: 145px;
          height: 120px;
          background: url("../../../assets/coverall.png");
          background-position: -170px -850px;
          position: absolute;
              top: 0;
    left: 0;
        }
        .play{
            display: none;
            position: absolute;
            width: 28px;
            height: 28px;
            background: url('../../../assets/iconall.png');
            background-position: 0 -140px;
        }
      }
      h3{
          color: #000;
          font-size: 14px;
          margin: 8px 0 3px;
          font-weight: normal;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

      }
      span{
          font-size: 12px;
          color: #333;
      }
    }
  }
}
</style>