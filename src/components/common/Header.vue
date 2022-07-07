<template>
  <div class="header">
    <el-header>
      <div class="title" >教务管理系统</div>
      <div>fengqian</div>
    </el-header>

  </div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">

.header{
  .el-header{
    background: darkseagreen;
    color: white;
    line-height: 60px;
    display: flex;//自动弹性伸缩，合适适配不同大小的屏幕
    justify-content: space-between;//两端
    .title{
      font-size: 24px;
      width: 200px;
    }
  }

}

</style>
