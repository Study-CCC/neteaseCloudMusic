<template>
  <div class="relatedBox" v-if="playlists.length!=0">
    <h3 class="hotTit">{{tit}}</h3>
    <ul>
      <li v-for="item in playlists" :key="item.id">
        <a :href="'/#/playlist?id='+item.id">
          <img :src="item.coverImgUrl" alt />
        </a>
        <div class="text">
          <a :href="'/#/playlist?id='+item.id">
            <h3>{{item.name}}</h3>
          </a>
          <span>
            by
            <a :href="'/#/user/home?id='+item.creator.userId">{{item.creator.nickname}}</a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {getRelated} from '../../utils/api/relatedApi'
export default {
  data() {
    return {
        playlists:[],
        id:'',
        type:0,
        tit:''
    };
  },
  created() {
      this.getData()
  },
  methods: {
    async getData() {
      this.id = this.$route.query.id;
     this.path = this.$route.path;
      if (this.path == "/playlist") {
       
         this.type = 0
         this.tit='热门歌单'
       
      } else if (this.path == "/song") {
         this.type=  1
         this.tit = '包含这首歌的歌单'
      } else if(this.path == "/artist"){
         this.type=  1
         this.tit = '热门歌手'
      } else if(this.path == "/djradio"){
        this.tit = '你可能也喜欢'
      }
      getRelated(this.id,this.type).then(res=>{
              this.playlists = res.data.playlists
      }).catch(() => {
          this.$message.error("歌曲列表获取失败");
        });
    }
  }
};
</script>
<style lang='less' scoped>
a {
  color: #666;
  &:hover {
    text-decoration: underline;
  }
}
.relatedBox {
  margin-bottom: 20px;
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