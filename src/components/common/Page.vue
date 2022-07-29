<template>
<div class="page">
  <!-- 分页-->
  <el-pagination
    background
    @size-change="hanldSizeChange"
    @current-change="hanldCurrentChange"
    :current-page="currentPage"
    :page-size="pageSize"
    :page-sizes="[5,10,20,30]"
    layout="total,sizes,prev, pager, next, jumper"
    :total="total"
    :url="url"
  >
  </el-pagination>
</div>
</template>

<script>
import {getData} from '../../api/api'
export default {
  name: 'Page',
  props: {
    'total': Number,
    'url': String
  },
  data () {
    return {
      // 分页数据
      currentPage: 1,
      pageSize: 5
    }
  },
  methods: {
    // 分页函数
    hanldSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
      getData(this.$parent, this.url, {offset: (this.currentPage - 1), limit: val})
      console.log(val)
    },
    hanldCurrentChange (val) {
      this.currentPage = val
      getData(this.$parent, this.url, {offset: (val - 1) * this.pageSize, limit: this.pageSize})
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
.page{
  .el-pagination {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
