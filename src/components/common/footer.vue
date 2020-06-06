<template>
  <div class="footerBox">
    <el-card>
    <el-row>
      <el-col :span="10" >
        <el-breadcrumb separator="|">
          <el-breadcrumb-item>
            <a href="/">服务条款</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">隐私政策</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">儿童隐私政策</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">版权投诉指引</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">意见反馈</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <p>
          <span class="spe">网易公司版权所有©1997-2020</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="#">浙网文[2018]3506-263号</a>
        </p>
        <p>
          <span class="spe">违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：</span>
          <a href="#">ncm5990@163.com</a>
        </p>
        <p>
          <span class="spe">粤B2-20090191-18</span>
          <a href="#">工业和信息化部备案管理系统网站</a>
        </p>
      </el-col>
      <el-col :span="10" :offset="4">
        <ul>
          <li>
            <a class="span-auth" href="#"></a>
            <span></span>
          </li>
          <li>
            <a class="span-musician" href="#"></a>
            <span></span>
          </li>
          <li>
            <a class="span-reward" href="#"></a>
            <span></span>
          </li>
          <li>
            <a class="span-cash" href="#"></a>
            <span></span>
          </li>
        </ul>
      </el-col>
    </el-row></el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.footerBox {
  .el-row{
    width: 1100px;
    margin:0 auto;
  }
  ul {
    li {
      float: left;
      width: 60px;
      height: 70px;
      margin-left: 30px;
      text-align: center;
      color: #666;
      list-style: none;
      a {
        display: block;
        float: none;
        width: 50px;
        height: 45px;
        margin: 0 auto;
        background: url('../../assets/foot_enter_new.png');
        background-size: 110px 450px;
      }
      .span-auth {
           
        background-position: -60px -101px;
      }
      .span-musician {
        background-position: 0 0;
      }
      .span-reward {
        background-position: -60px -50px;
      }
      .span-cash {
        background-position:0 -101px;
      }
      span {
        display: inline-block;
        margin: 5px 5px 0;
        width: 52px;
        height: 14px;
        background: url("../../assets/foot_enter_tt.png");
        background-size: 180px 100px;
      }
      //   background: url("../../assets/foot_enter_new.png");
      //   background-size: 110px 450px;
    }
  }
  .spe {
    margin-right: 14px;
  }
  p {
    color: #666;
    font-size: 12px;
    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .el-row {
    .el-breadcrumb {
      margin-top: 20px;
      .el-breadcrumb__item {
        font-size: 12px;
        .el-breadcrumb__separator {
          margin: 0 2px;
          font-weight: normal;
        }
        a {
          color: #999;
          font-weight: normal;
          &:hover {
            color: #999;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>