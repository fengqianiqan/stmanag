<template>
<div class="menue">
  <el-aside width="200px">
    <el-menu
      router
      :default-active="activePath"
      class="el-menu-vertical-demo"
      background-color="#1e131d"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item,index) in menus">
        <el-submenu index="index+''" :key="index" v-if="!item.hidden">
          <template slot="title">
            <i class="fa fa-users" style="color: white"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group v-for="(child,index) in item.children" :key="index">
            <el-menu-item :index="child.path"><i :class="child.iConCla" style="color: white"></i> {{child.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</div>
</template>

<script>
export default {
  name: 'Mevue',
  data () {
    return {
      menus: []
    }
  },
  created () {
    this.menus = [...this.$router.options.routes]
    this.activePath= this.$router.currentRoute.path
  },
  methods: {
  }
}
</script>

<style lang="scss">
.menue{
  .el-aside{
    height: 100%;
    .el-menu{
      height: 100%;
    }
    .el.submenu .el-menu.item{
      min-width: 0;
    }
  }
}
</style>
