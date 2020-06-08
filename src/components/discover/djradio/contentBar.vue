<template>
  <div class="contentBarBox">
    <div class="conTit">
      <h3>音乐故事·电台</h3>
      <a href="#" class="more">更多</a>
    </div>
    <ul>
      <li class="itemCon">
        <img src="../../../assets/TEST.jpg" alt />
        <a href="#">星阑夜话</a>
      </li>
    </ul>
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
.contentBarBox {
  .conTit {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    height: 40px;
    a {
      margin-left: auto;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 435px;
      height: 120px;
      padding: 20px 0;
      border-bottom: 1px solid #e7e7e7;
      img{
          width: 120px;
          height: 120px;
          float: left;
      }
      a{
          float: left;
          color: #000;
          font-size: 18px;
          font-weight: bold;
          line-height: 80px;
          margin-left: 20px;
      }
    }
  }
}
</style>