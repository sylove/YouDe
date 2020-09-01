<template>
  <div class="detailThree">
    <Loading v-if="flag"></Loading>
    <div class="box user" v-else>
      <h3 class="fs13">商品评论</h3>
      <ul>
        <li v-for="item in commentList" :key="item.id">
          <div class="header">
            <div class="tou">
              <img :src="item.commentUserHeadImg" alt />
              <span>{{item.commentAccount}}</span>
            </div>
            <div class="star">
              <i class="iconfont icon-shoucang" v-for="(child,idx) in item.descgrade" :key="idx"></i>
            </div>
          </div>
          <p>{{item.commentContent}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import Loading from "@/components/Loading";

export default {
  name: "",
  props: {
    isid: String,
  },
  data() {
    return {
      commentList: [],
      id: this.isid,
      flag:true
    };
  },
  methods: {},
  created() {
    //评论
    this.$axios({
      method: "post",
      url: "/youde/f/pc/s_10020/spComment/findGoodsCommentList",
      // vue项目中form data形式传参
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      data: qs.stringify({
        businessId: this.id,
        pageIndex: "1",
        gradeLevel: "0",
      }),
    }).then((res) => {
      this.commentList = res.data.data;
      
      this.flag=false
    });
  },
  components:{
      Loading
  }
};
</script>

<style lang="less" scoped>
.detailThree {
  padding-top: 0.5rem;
  background: #f0f1f2;
  .box {
    background: #fff;
    border-radius: 0.06rem;
    margin-bottom: 0.09rem;
    padding: 0.12rem 0.1rem;
    &.user {
      h3 {
        color: #848484;
      }
      li {
        margin-bottom: 0.1rem;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid #eee;
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tou {
            display: flex;
            align-items: center;
            img {
              width: 0.39rem;
              height: 0.39rem;
              border-radius: 50%;
              margin-right: 0.1rem;
            }
            span {
              font-size: 11px;
              color: #999;
            }
          }
          .star {
            .iconfont {
              color: #68b0e4;
            }
          }
        }
        p {
          font-size: 13px;
          color: #666;
          margin-top: 0.08rem;
        }
      }
    }
  }
}
</style>
