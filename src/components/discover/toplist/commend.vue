<template>
  <div class="commendBox">
    <div class="commendTit">
      <h3>评论</h3>
      <span class="total">
        共
        <strong>5253254234325</strong>条
      </span>
    </div>

    <Comment />
    <CommentCon />
  </div>
</template>

<script>
import Comment from '../../common/comment'
import CommentCon from '../../common/commentCon'
export default {
  data() {
    return {};
  },
  components:{
    Comment,
    CommentCon
  }
};
</script>
<style lang='less' scoped>
.commendBox {
  .commendTit {
    height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
    .total {
      color: #666;
      font-size: 12px;
    }
  }
 
}
</style>