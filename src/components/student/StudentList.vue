<template>
<div class="studentList">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column prop="name" label="姓名" align="center" ></el-table-column>
    <el-table-column prop="sex" label="性别" align="center" ></el-table-column>
    <el-table-column prop="age" label="年龄"align="center" ></el-table-column>
    <el-table-column prop="num" label="学号" align="center" ></el-table-column>
    <el-table-column prop="cla" label="班级" align="center" ></el-table-column>
    <el-table-column prop="sta" label="状态" align="center" ></el-table-column>
    <el-table-column prop="adr" label="地址" align="center" ></el-table-column>
    <el-table-column prop="pho" label="联系方式"align="center"  ></el-table-column>
    <el-table-column label="操作"align="center"  width="180px">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="dele(scope.row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'StudentList',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    updateInfo(row) {

    },
    dele(row) {

    }
  }
}
</script>

<style scoped>

</style>
