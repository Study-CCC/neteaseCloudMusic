<template>
  <div class="headerInfoBox">
    <div class="header clearFloat">
      <!-- 头像 -->
      <div class="authImg">
        <img :src="detail.coverImgUrl" alt />
        <span class="msk"></span>
      </div>
      <!-- 介绍 -->
      <div class="introduce">
        <div class="headerTit">
          <i></i>
          <!-- 列表名字 -->
          <h3>{{detail.name}}</h3>
        </div>
        <div class="creatTime">
          <a :href="'/#/user/home?id='+detail.creator.userId">
            <img :src="detail.creator.avatarUrl" alt />
          </a>
          <p>
            <!-- 创建者名字 -->
            <a :href="'/#/user/home?id='+detail.creator.userId">{{detail.creator.nickname}}</a>
            <span>{{detail.createTime|creatTimeFilter}}创建</span>
          </p>
        </div>
        <HeaderBtn :shareCount="detail.shareCount" :tracks="tracks" />

        <!-- 列表描述 -->
        <div class="desc">
          <div class="tag">
            标签:
            <el-tag v-for="(item,i) in detail.tags" :key="i" size="mini" type="info">
              <a :href="'/#/discover/playlist/?cat='+item+'&order=hot'">{{item}}</a>
            </el-tag>
          </div>
          <div v-if="detail.description">
            <div ref="descCon" :class="['descCon',openFlag?'':'close']">介绍: {{detail.description}}</div>
            <a v-if="openShow" href="javascript:void(0)" @click="isOpen">
              {{openFlag?'收起':'展开'}}
              <i :class="openFlag?'closeIcon':'openIcon'"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBtn from "./headerBtn";
export default {
  data() {
    return {
      openFlag: true,
      openShow: false
          };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      if(!this.$refs.descCon) return;
      if (this.$refs.descCon.clientHeight > 318) {
        this.openFlag = false;
        this.openShow = true;
      }
    });
  },
  methods: {
    isOpen() {
      this.openFlag = !this.openFlag;
    },
    isShow() {
      const height = this.$refs.descCon.clientHeight;
    }
  },
  props: ["detail","tracks"],
  components: {
    HeaderBtn
  }
};
</script>
<style lang='less' scoped>
.headerInfoBox {
  .header {
    .authImg {
      width: 177px;
      height: 177px;
      float: left;
      position: relative;
      img {
        height: 100%;
        width: 100%;
      }
      .msk {
        width: 209px;
        height: 177px;
        background: url("../../assets/coverall.png");
        background-position: 0 -986px;
        top: 0;
        left: 0;
        position: absolute;
      }
    }

    .introduce {
      float: left;
      margin-left: 50px;
      width: 430px;
      .headerTit {
        i {
          display: inline-block;
          background: url("../../assets/icon.png");
          width: 54px;
          background-position: 0 -243px;
          height: 24px;
        }
        h3 {
          font-size: 20px;
          color: #333;
          display: inline-block;
          font-weight: normal;
        }
      }
      .creatTime {
        height: 35px;
        margin-top: 20px;
        a {
          color: #0c73c2;
          &:hover {
            text-decoration: underline;
          }
        }
        img {
          height: 35px;
          vertical-align: middle;
          width: 35px;
        }
        p {
          display: inline-block;
          margin-left: 10px;
          font-size: 12px;
          color: #666;
          span {
            margin-left: 10px;
          }
        }
      }
      .desc {
        color: #666;
        font-size: 12px;
        white-space: pre-line;
        .el-tag {
          border-radius: 50%;
          margin: 15px 5px 15px 0;
          a {
            color: #666;
          }
        }
        .close {
          height: 318px;
          overflow: hidden;
        }
        a {
          font-size: 12px;
          color: #0c73c2;
        }
        i {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-top: 2px solid #999;
          border-left: 2px solid #999;
        }
        .openIcon {
          transform: rotate(-135deg);
        }
        .closeIcon {
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>