<template>
  <div class="header">
    <a class="back" v-if="has_back" @click="goBack">返回</a>
    {{title}}
    <a class="login" v-if="has_login" @click="login">登录</a>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  props: {
    title: {
      type: String,
      default: "首页"
    },
    has_back: {
      type: Boolean,
      default: true
    },
    has_login: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const router = useRouter();
    function goBack() {
      router.back();
    }
    function login() {
      router.push("/login");
    }
    return {
      goBack,
      login
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  color: #333;
  text-align: center;
  line-height: 70px;
  position: relative;
  .login {
    position: absolute;
    right: 20px;
    top: 2px;
    font-size: 14px;
    color: #005aa0;
  }
  .back {
    position: absolute;
    left: 20px;
    top: 2px;
    font-size: 14px;
    color: #005aa0;
  }
}
</style>
