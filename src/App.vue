<template>
  <div>
      <router-view></router-view>
      <Loading v-if="this.$store.state.isLoading"></Loading>
  </div>
</template>

<script>
  import Loading from "./components/Loading";
  export default {
    name: "App",
      components: {Loading},
  }
</script>

<style>
</style>
