<template>
  <div>
    <!-- <Search /> -->
    <Order />
  </div>
</template>

<script>
import Search from "./pages/Search";
import Order from "./pages/Order";
export default {
  name: "App",
  components: {
    Search,
    Order,
  },
};
</script>

<style lang="less" scoped>
</style>
