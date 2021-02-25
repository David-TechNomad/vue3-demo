<template>
  <div class="detail">
    <Header title="详情页" />
    <div class="item">
      <p class="item_top box">
        <i class="lt">id</i>
        <i class="gt">{{detailDetail.form.id}}</i>
      </p>
    </div>
    <div class="item">
      <p class="item_top box">
        <i class="lt">名称</i>
        <i class="gt">{{detailDetail.form.price}}</i>
      </p>
    </div>
    <div class="item">
      <p class="item_top box">
        <i class="lt">数量</i>
        <i class="gt">{{detailDetail.form.count}}</i>
      </p>
    </div>
    <div class="item">
      <p class="item_top box">
        <i class="lt">价格</i>
        <i class="gt">{{detailDetail.form.price}}</i>
      </p>
    </div>
    <div class="item high">
      <p class="item_top box">
        <i class="lt">照片</i>
        <i class="gt">
          <img :src="detailDetail.form.img" />
        </i>
      </p>
    </div>
    <div class="item high">
      <p class="item_top box">
        <i class="lt">描述</i>
        <i class="gt">{{detailDetail.form.desc}}</i>
      </p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { post } from "../util/tool";

export default {
  components: {
    Header
  },
  setup() {
    const { detailDetail } = useData();
    return { detailDetail };
  }
};

function useData() {
  const route = useRoute();
  const { id } = route.params;
  const detailDetail = reactive({
    form: {
      count: "",
      date: "",
      desc: "",
      id: "",
      img: "",
      name: "",
      price: ""
    }
  });

  requestData();

  function requestData() {
    post({
      url: `/api/detail`,
      data: {
        id
      }
    }).then(res => {
      detailDetail.form = res;
    });
  }

  return { detailDetail };
}
</script>
<style lang="scss" scoped>
.detail {
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  .item {
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    color: #005aa0;
    cursor: pointer;
    padding-top: 10px;
    .item_top .gt {
      width: 50%;
      text-align: right;
      img {
        width: 70%;
      }
    }
    &.high {
      height: 120px;
    }
  }
}
</style>
