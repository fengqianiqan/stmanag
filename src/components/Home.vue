<template>
  <div class="home">
    <Header></Header>
    <el-container class="content" >
      <Menue></Menue>
      <el-main>
        <el-card>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
        <div class="cont">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
import Menue from './common/Menue'
export default {
  components: {
    Footer,
    Header,
    Menue
  },
  name: 'Home',
  data () {
    return {
      // menus: []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.home{
  .content{
    position: absolute;
    width:100%;
    top:60px;
    bottom:0px;
    .cont{
      margin: 20px 0;
    }
  }
}
</style>
