<template>
<div class="infoList">
  <el-form :inline="true" :model="formInline" class="topform" size="mini">
    <el-form-item>
    <el-button type="primary" @click="addStu" size="mini">新增</el-button>
  </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
    </el-form-item>
    <el-form-item label="父亲">
      <el-input v-model="formInline.fat" placeholder="请输入学生父亲姓名查询"></el-input>
    </el-form-item>
    <el-form-item label="母亲">
      <el-input v-model="formInline.mat" placeholder="请输入学生母亲姓名查询"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="findStu" size="mini">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column prop="name" label="姓名" align="center"  ></el-table-column>
    <el-table-column prop="sex" label="性别" align="center" ></el-table-column>
    <el-table-column prop="age" label="年龄" align="center" ></el-table-column>
    <el-table-column prop="dat" label="出生日期" align="center" ></el-table-column>
    <el-table-column prop="nub" label="身份证号" align="center" ></el-table-column>
    <el-table-column prop="fat" label="父亲" align="center" ></el-table-column>
    <el-table-column prop="mat" label="母亲" align="center" ></el-table-column>
    <el-table-column prop="adr" label="家庭住址" align="center"  ></el-table-column>
    <el-table-column prop="tim" label="入校时间" align="center"  ></el-table-column>
    <el-table-column prop="pho" label="联系方式" align="center"  ></el-table-column>
    <el-table-column label="操作" align="center"  width="160px">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="dele(scope.row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
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
      <el-form-item label="出生日期" :label-width="formLabelWidth" prop="dat">
        <el-input v-model.number="form.dat" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" :label-width="formLabelWidth" prop="nub">
        <el-input v-model="form.nub" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="父亲" :label-width="formLabelWidth" prop="fat">
        <el-input v-model.number="form.fat" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="母亲" :label-width="formLabelWidth" prop="mat">
        <el-input v-model.number="form.mat" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址" :label-width="formLabelWidth" prop="adr">
        <el-input v-model.number="form.adr" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="入校时间" :label-width="formLabelWidth" prop="tim">
        <el-input v-model.number="form.tim" autocomplete="off" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" :label-width="formLabelWidth" prop="pho">
        <el-input v-model="form.pho" autocomplete="off" size="mini"></el-input>
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
  name: 'InfoList',
  data () {
    return {
      formLabelWidth: '80px',
      dialogFormVisible: false,
      state: true,
      formInline: {
        name: '',
        fat: '',
        mat: ''
      },
      tableData: [],
      form: {
        name: '',
        sex: '',
        age: '',
        dat: '',
        nub: '',
        fat: '',
        mat: '',
        adr: '',
        tim: '',
        pho: ''
      },
      rules: {
        name: [{required: true, message: '请输入姓名'}],
        sex: [{required: true, message: '请选择性别'}],
        age: [{required: true, message: '请输入年龄'},
          {type: 'number', message: '年龄必须是数字'}],
        dat: [{required: true, message: '请输入入学日期'}],
        nub: [{required: true, message: '请输入身份证号'},
          {type: 'number', message: '身份证号必须是数字'}],
        fat: [{required: true, message: '请输入学生父亲姓名'}],
        mat: [{required: true, message: '请输入学生母亲姓名'}],
        adr: [{required: true, message: '请输入学生家庭住址'}],
        tim: [{required: true, message: '请输入入校时间'}],
        pho: [{required: true, message: '请输入联系方式'},
          {type: 'number', message: '学号必须是数字'}]
      }
    }
  },
  methods: {
    updateInfo (row) {
      console.log(row)
      this.state = false
      this.dialogFormVisible = true
      this.form = row
    },
    dele (row) {
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
            // 调用新增信息接口
            console.log(this.error)
            this.tableData.push()
            this.dialogFormVisible = false
          } else {}
          // 调用修改接口
          this.tableData.add(this.form)
          this.dialogFormVisible = false
        } else {
          console.log(this.error)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.infoList {
  .topform ,.el-form-item{
    text-align: left;
  }
  .el-select{
    width: 100%;
  }
}
</style>
