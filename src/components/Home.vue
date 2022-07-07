<template>
  <div class="hello">
    <Header></Header>
    <el-container class="content" >
      <div>菜单</div>
      <el-main>
        <div>主要内容区</div>
        <Footer></Footer>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
export default {
  components: {
    Footer,
    Header
  },
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
