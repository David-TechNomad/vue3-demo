<template>
  <teleport to="#app">
    <div id="center" v-if="isOpen">
      <h2><slot>this is a modal</slot></h2>
      <slot name="section"></slot>
      <slot :data="data"></slot>
      <button @click="buttonClick">Close</button>
    </div>
  </teleport>
</template>
<script lang="ts">
export default {
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-modal": null,
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("close-modal");
    };
    const infomation = {
      phone: "138xxxx6666",
      address: "中国北京",
    };
    const message = "abc";
    return {
      buttonClick,
      infomation,
      message,
    };
  },
};
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  z-index: 1;
}
</style>
