<template>
  <div class="Product">
    <p class="title" @click="lightOne">{{title}}</p>
    <div
      class="item"
      v-for="(item,index) in list"
      :key="item.id"
      @click="inquire(item)"
      :ref="ref=>doms[index]=ref"
    >
      <p class="item_top box">
        <i class="lt">{{item.name}}</i>
        <i class="gt">{{item.price}}</i>
      </p>
      <p class="item_bottom">{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";

export default {
  props: {
    items: Object
  },
  setup(props, context) {
    const title = computed(() => {
      return props.items ? props.items.title : "";
    });
    const list = computed(() => {
      return props.items ? props.items.data : [];
    });
    function inquire(item) {
      context.emit("inquire", item);
    }

    const { doms, lightOne } = lightHanlder();

    return {
      title,
      list,
      inquire,
      doms,
      lightOne
    };
  }
};

function lightHanlder() {
  const doms = ref([]);
  function lightOne() {
    const len = doms.value.length;
    if (len == 0) {
      return false;
    }
    const index = parseInt(Math.random() * len);
    doms.value[index].classList.add("animated");
    setTimeout(() => {
      if (doms.value[index]) {
        doms.value[index].classList.remove("animated");
      }
    }, 1000);
  }
  return {
    doms,
    lightOne
  };
}
</script>
<style lang="scss" scoped>
.Product {
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 40px;
  .title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .item {
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    color: #005aa0;
    cursor: pointer;
    padding-top: 10px;
    &:nth-child(2) {
      border-top: 1px solid #eee;
    }
    .item_bottom {
      margin-top: 5px;
    }
    &.animated {
      animation: aroundAnimation 0.5s linear;
    }
  }
}

@keyframes aroundAnimation {
  0%,
  100%,
  20%,
  50%,
  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);
    transform: translate3d(-20px, 0, 0);
  }
  70% {
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(-10px, 0px, 0);
  }
  90% {
    transform: translate3d(20px, 0, 0);
  }
}
</style>
