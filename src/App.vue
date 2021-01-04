<template>
  <div>
    <Header />
    <div id="a"></div>
    <Footer />
    <Menu />
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu,
  },
}
</script>

<style lang="less">
#a {
  height: 1000px;
}
</style>
