<template>
  <div class="myMusicBox">
    <el-row>
      <el-col :span="6">
        <div class="leftBox">
          <h2>创建的歌单</h2>
          <ul>
            <li v-for="(item,i) in playlist" :visited="item.id" :key="i">
              <div class="itemBox" @click="getId(item.id)">
                <img :src="item.coverImgUrl" alt />
                <div class="itemText">
                  <p>{{item.name}}</p>
                  <p style="color:#999">
                    {{item.trackCount}}首
                    <span v-if="i!=0">
                      <el-tooltip effect="light" content="编辑" placement="bottom-start">
                        <i class="edit"></i>
                      </el-tooltip>
                      <el-tooltip effect="light" content="删除" placement="bottom-start">
                        <i class="delete"></i>
                      </el-tooltip>
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="rightBox">
          <HeaderInfo v-if="detail.creator" :detail="detail" />
          <SongCon :songsList="detail" />
          <CmtCon />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderInfo from "../common/headerInfo";
import SongCon from "../common/songCon";
import CmtCon from '../common/commentCon'
export default {
  data() {
    return {
      detail: {},
      playlist: [],
      id:''
     };
  },
  created() {
    this.getData();
    this.getId()
  },
  methods: {
    async getData() {
      const { data, status } = await this.$http.get(
        `/user/playlist?uid=1432127528`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.playlist = data.playlist;
    },
    getId(id=2189423450){
      this.id = id
        this.$router.push(`my?id=${id}`)
        this.getList()
    },
   async getList(){
        const { data, status } = await this.$http.get(
        `/playlist/detail?id=${this.id}`
      );
      if (status !== 200) return this.$message.error("数据获取错误");
      this.detail = data.playlist
    }
  },
  components: {
    SongCon,
    HeaderInfo,
    CmtCon
  }
};
</script>
<style lang='less' scoped>
.myMusicBox {
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  padding: 30px 0;
  .leftBox {
    width: 220px;
    h2{
      text-align: center;
      font-size: 18px;
    }
    .title {
      font-size: 14px;
      margin-top: 25px;
      color: #000;
      margin-left: 10px;
    }
    .itemBox {
      cursor: pointer;
      display: flex;
      height: 42px;
      padding: 6px 0 6px 20px;
      align-items: center;
      img {
        height: 40px;
        width: 40px;
      }
      .itemText {
        margin-left: 20px;
        p {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 25px;
          margin: 0;
          width: 130px;
          color: #000;
          &:hover{
            span{
              display: inline-block;
            }
          }
          span {
            float: right;
            display: none;
            i {
              display: inline-block;
              width: 13px;
              height: 14px;
              background: url("../../assets/icon.png");
              margin-left: 10px;
            }
            .edit {
              background-position: -20px -270px;
            }
            .delete {
              background-position: 0 -284px;
            }
          }
        }
      }
      &:hover {
        background-color: #f4f2f2;
      }
    }
  }
  .rightBox{
    border-left: 1px solid #d3d3d3;
    padding:0 30px ;
  }
}
</style>