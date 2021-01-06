<template>
  <div>
    <Header />
    <Menu />
    <div style="height: 1800px"></div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
import Categoty from '../../components/Category/Categoty'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
export default {
  name: 'Home',
  components: {
    Menu,
    Header,
    Footer,
    Categoty,
  },
}
</script>

<style>
</style>