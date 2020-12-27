<template>
  <div id="app">
    <HeaderComponent v-if="$route.name !== 'Login' && $route.name !== '404'" />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/layout/HeaderComponent";
import "@/assets/style/global.scss";

export default {
  name: "app",
  components: {
    HeaderComponent
  }
};
</script>

<style></style>
