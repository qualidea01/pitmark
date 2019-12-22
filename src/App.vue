<template>
  <div id="app">
    <pm-nav-bar :user="user" @sign-out-clicked="signOut"></pm-nav-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { authService } from "./services/AuthSerice";
import pmNavBar from './components/NavBar'

export default {
  name: "app",
  components: { pmNavBar },
  data() {
    return {
      user: null
    };
  },
  created() {
    // 直接呼び出していた部分をサービスクラス経由に変更
    authService.onStateChanged(user => {
      this.user = user;
    });
  },
  //methodsプロパティを追加
  methods: {
    // サインアウト関数を追加
    async signOut() {
      await authService.signOut();
      //サインアウト後にトップページに移動する
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>