<template>
  <div>
    <!-- <Search /> -->
    <!-- <Pay /> -->
    <Order />
  </div>
</template>

<script>
import Search from "./pages/Search";
import Order from "./pages/Order";
import Pay from "./pages/Pay";
export default {
  name: "App",
  components: {
    Search,
    Order,
    Pay,
  },
};
</script>

<style lang="less" scoped>
</style>
