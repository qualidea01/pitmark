<template>
  <div class="container">
    <span v-if="user">こんにちわ {{ user.email }}</span>
    <span v-else>ログインしていません</span>
  </div>
</template>

<script>
import { authService } from "../services/AuthSerice";

export default {
  name: "home",
  data()  {
    return {
      user: null
    }
  },
  created(){
    authService.onStateChanged(user => {
      this.user = user;
    });
  }
};
</script>