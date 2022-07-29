<template>
  <div class="attend">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="学生姓名">
        <el-input v-model="formInline.name" placeholder="请输入作业名称查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="学生姓名" align='center'></el-table-column>
      <el-table-column prop="class" label="班级" align='center'></el-table-column>
      <el-table-column prop="actual" label="实到课" align='center'></el-table-column>
      <el-table-column prop="toBeDue" label="应到课" align='center'></el-table-column>
    </el-table>
    <!-- 分页-->
    <Page :total="total"
    :url="url"
    ></Page>
  </div>
</template>

<script>
import { getData } from '../../api/api'
import Page from '../common/Page'
export default {
  name: 'attend',
  components: {
    Page
  },
  data () {
    return {
      formInline: {
        name: ''
      },
      tableData: [],
      total: 10,
      url: '/attend'
    }
  },
  created () {
    getData(this, '/attend')
  },
  methods: {
    find () {
      getData(this, '/attend', this.formInline)
    },
    reset () {
      getData(this, '/attend', {})
      this.formInline = {}
    }
  }
}
</script>

<style lang="scss">
.attend {
  .demo-form-inline, .el-form-item {
    text-align: left;
  }
}
</style>
