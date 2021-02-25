<template>
  <div class="login">
    <Header :has_login="false" title="登录" />
    <div class="form" v-if="!userInfo">
      <p class="line">
        <i class="label">用户名:</i>
        <input
          type="text"
          placeholder="请输入用户名"
          :value="user.user_name"
          @input="setForm({user_name:$event.target.value})"
        />
      </p>
      <p class="line">
        <i class="label">密码:</i>
        <input
          type="password"
          placeholder="请输入密码"
          :value="user.password"
          @input="setForm({password:$event.target.value})"
        />
      </p>
      <p class="btn">
        <a class="submmit" @click="login">登录</a>
      </p>
    </div>
    <div v-else>
      <div class="tag">{{userInfo.user_name}}殿下,欢迎您登录!</div>
      <p class="btn">
        <a class="submmit" @click="logout">退出登录</a>
      </p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import { useStore } from "vuex";
import { reactive, ref, computed, watch } from "vue";
import { post, storeUser, clearUser } from "../util/tool";
import UserState from "../components/UserState";

export default {
  components: {
    Header
  },
  setup() {
    const { user, setForm } = paramsHandler(); //表单参数
    const { login, logout } = httpMethods(user); //登录操作的函数
    const { userInfo } = UserState.setup(); //获取用户信息

    return {
      user,
      login,
      setForm,
      userInfo,
      logout
    };
  }
};

/**
 * 登录操作
 */
function httpMethods(user) {
  const store = useStore();

  function login() {
    const { user_name, password } = user;
    if (user_name.trim() === "" || password.trim() === "") {
      alert("账号密码不能为空");
      return false;
    }
    post({
      url: "/api/login",
      data: {
        user_name,
        password
      }
    }).then(res => {
      const user = {
        user_name,
        password: "",
        user_id: res.user_id
      };
      store.commit("setUser", user);
      storeUser(user);
    });
  }

  function logout() {
    store.commit("clearUser");
    clearUser(); //删除localstorage存储的用户信息
  }

  return {
    login,
    logout
  };
}

/**
 * 表单的参数处理
 */
function paramsHandler() {
  const user = reactive({
    user_name: "",
    password: ""
  });
  function setForm(data) {
    const key = Object.keys(data)[0];
    user[key] = data[key];
  }
  return {
    user,
    setForm
  };
}
</script>
<style lang="scss" scoped>
.login {
  .form {
    margin-top: 20px;
    .line {
      height: 30px;
      width: 100%;
      box-sizing: border-box;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 20px;
      .label {
        color: #333;
        font-size: 14px;
        margin-right: 20px;
        width: 54px;
        text-align: right;
        display: inline-block;
      }
      input {
        width: 240px;
        height: 30px;
        border: 1px solid #eee;
        font-size: 14px;
        color: #333;
        box-sizing: border-box;
        padding-left: 10px;
        outline: none;
      }
    }
  }
  .btn {
    margin-top: 40px;
    text-align: center;
    .submmit {
      height: 35px;
      width: 240px;
      line-height: 35px;
      background-color: #005aa0;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      display: inline-block;
    }
  }
  .tag {
    text-align: center;
    margin-top: 20px;
    color: #005aa0;
  }
}
</style>