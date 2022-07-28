<template>
<div class="studentList">
  <el-form :inline="true" :model="formInline" class="topform" size="mini">
    <el-form-item>
      <el-button type="primary" @click="addStu" size="mini">新增</el-button>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="formInline.name" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="学号">
      <el-input v-model="formInline.num" placeholder="学号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="findStu" size="mini">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="tableData.slice((currentPage - 1) * pageSize, currentPage*pageSize)"
    border
    style="width: 100%">
    <el-table-column prop="name" label="姓名" align="center"  ></el-table-column>
    <el-table-column prop="sex" label="性别" align="center" ></el-table-column>
    <el-table-column prop="age" label="年龄" align="center" ></el-table-column>
    <el-table-column prop="num" label="学号" align="center" ></el-table-column>
    <el-table-column prop="cla" label="班级" align="center" ></el-table-column>
    <el-table-column prop="sta" label="状态" align="center" ></el-table-column>
    <el-table-column prop="adr" label="地址" align="center" ></el-table-column>
    <el-table-column prop="pho" label="联系方式" align="center"  ></el-table-column>
    <el-table-column label="操作" align="center"  width="180px">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="dele(scope.row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页-->
  <el-pagination
    background
    @size-change="hanldSizeChange"
    @current-change="hanldCurrentChange"
    :current-page="currentPage"
    :page-size="pageSize"
    :page-sizes="[5,10,20,30]"
    layout="total,sizes,prev, pager, next, jumper"
    :total="total">
  </el-pagination>
<!--  新增信息嵌套表单-->
  <el-dialog :title="state ? '新增学生信息' : '修改学生信息'" :visible.sync="dialogFormVisible" width="400px">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
        <el-radio v-model="form.sex" label="男" size="mini">男</el-radio>
        <el-radio v-model="form.sex" label="女" size="mini">女</el-radio>
      </el-form-item>
      <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
        <el-input v-model.number="form.age" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="学号" :label-width="formLabelWidth" prop="num">
        <el-input v-model.number="form.num" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="班级" :label-width="formLabelWidth" prop="cla">
        <el-select v-model="form.cla" size="mini"  placeholder="选择班级">
          <el-option label="物联网1001" value="物联网1001"></el-option>
          <el-option label="物联网1002" value="物联网1002"></el-option>
          <el-option label="物联网1003" value="物联网1003"></el-option>
          <el-option label="物联网1004" value="物联网1004"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth" prop="sta">
        <el-select v-model="form.sta" size="mini"  placeholder="选择状态">
          <el-option label="已入学" value="已入学"></el-option>
          <el-option label="未入学" value="未入学"></el-option>
          <el-option label="休学中" value="休学中"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth" prop="adr">
        <el-input v-model="form.adr" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" :label-width="formLabelWidth" prop="pho">
        <el-input v-model.number="form.pho" autocomplete="off" size="mini"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false" size="mini">取消</el-button>
      <el-button type="primary" @click="sure('form')" size="mini">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'StudentList',
  data () {
    return {
      formLabelWidth: '80px',
      dialogFormVisible: false,
      state: true,
      form: {
        name: '',
        sex: '',
        age: '',
        num: '',
        cla: '',
        sta: '',
        adr: '',
        pho: ''
      },
      rules: {
        name: [{required: true, message: '请输入姓名'}],
        sex: [{required: true, message: '请选择性别'}],
        age: [{required: true, message: '请输入年龄'},
          {type: 'number', message: '年龄必须是数字'}],
        num: [{required: true, message: '请输入学号'},
          {type: 'number', message: '学号必须是数字'}],
        cla: [{required: true, message: '请选择班级'}],
        sta: [{required: true, message: '请选择状态'}],
        adr: [{required: true, message: '请输入地址'}],
        pho: [{required: true, message: '请输入联系方式'},
          {type: 'number', message: '联系方式必须是数字'}]
      },
      // 分页数据
      total: 100,
      currentPage: 1,
      pageSize: 10,
      tableData: [{
      }],
      formInline: {
        name: '',
        num: ''
      }
    }
  },
  created () {
    this.getCount()
    this.getData()
  },
  methods: {
    // 分页函数
    hanldSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
      console.log(val)
    },
    hanldCurrentChange (val) {
      this.currentPage = val
      console.log(val)
    },
    getCount () {
      this.service.get('/students/count')
        .then(res => {
          res.status === 200 ? this.total = res.data : this.total = 0
          console.log(this.total)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getData () {
      this.service.get('/students/count')
      this.service.get('/students?limit' + this.total)
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            this.tableData = [...res.data]
          } else {
            // ..
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateInfo (row) {
      console.log(row)
      this.state = false
      this.dialogFormVisible = true
      this.form = {...row}
    },
    dele (row) {
      this.service.delete('/students/' + row.id)
        .then(res => {
          if (res.status === 204) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getData()
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    addStu () {
      this.state = true
      this.dialogFormVisible = true
    },
    findStu () {
      console.log(this.formInline)
    },
    sure (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.state) {
            delete this.form.createdDate
            delete this.form.lastModifiedDate
            // 调用新增信息接口
            this.service.post('/students', this.form)
              .then(res => {
                if (res.status === 201) {
                  this.dialogFormVisible = false
                  this.form = {}
                  this.$message({
                    message: '新增成功',
                    type: 'success'
                  })
                  this.getData()
                }
              })
              .catch(err => {
                console.error(err)
              })
          } else {
            // 调用修改接口
            this.service.patch('/students/' + this.form.id, this.form)
              .then(res => {
                this.dialogFormVisible = false
                this.form = {}
                this.getData()
              })
              .catch(err => {
                console.error(err)
              })
          }
          /* this.tableData.add(this.form)
          this.dialogFormVisible = false */
        } else {
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.studentList{
  .topform ,.el-form-item{
    text-align: left;
  }
  .el-select{
    width: 100%;
  }
  .el-pagination{
    text-align: right;
    margin-top: 20px;
  }
}
</style>
