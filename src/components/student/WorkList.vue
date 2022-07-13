<template>
<div class="workList">
  <el-form :inline="true" :model="formInline" class="topform" size="mini">
    <el-form-item label="作业名称">
      <el-input v-model="formInline.jobN" placeholder="请输入作业名称查询"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="findwork" size="mini">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column prop="jobN" label="作业名称" align="center"  ></el-table-column>
    <el-table-column prop="compeN" label="完成人数" align="center" ></el-table-column>
    <el-table-column prop="uncomN" label="未完成人数" align="center" ></el-table-column>
    <el-table-column prop="comtio" label="完成率" align="center" ></el-table-column>
    <el-table-column prop="check" label="待批改" align="center" ></el-table-column>
    <el-table-column prop="ratio" label="批改率" align="center" ></el-table-column>
    <el-table-column prop="passN" label="及格人数" align="center" ></el-table-column>
    <el-table-column prop="goodN" label="优秀人数" align="center"  ></el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'WorkList',
  data () {
    return {
      formInline: {
        jobN: ''
      },
      tableData: []
    }
  },
  methods: {
    findwork () {}
  }
}
</script>

<style lang="scss">
.workList{
  .topform ,.el-form-item{
    text-align: left;
  }
  .el-select{
    width: 100%;
  }
}
</style>
