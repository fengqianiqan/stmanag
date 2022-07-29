export function getData (root, url, params) {
  console.log(params)
  root.service.get(url + '/count')
    .then(res => {
      // + '?limit' + root.total
      // eslint-disable-next-line standard/object-curly-even-spacing
      res.status === 200 ? root.total = res.data : root.total = 0
      root.service.get(url, {params: params})
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            res.data.forEach(item => {
              item.completion = item.completedNumber / (item.completedNumber + item.uncompletedNumber)
              item.checkRate = 1 - item.check / (item.completedNumber + item.uncompletedNumber)
            })
            root.tableData = [...res.data]
          } else {
            // ..
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
}
export function changeInfo (root, method, url, msg, form, callback) {
  let _url = ''
  method === 'post' ? _url = url : _url = url + '/' + root.form.id
  // 调用新增信息接口
  if (method === 'patch') {
    delete root.form.createdDate
    delete root.form.lastModifiedDate
  }
  root.service[method](_url, root.form)
    .then(res => {
      if (res.status === 201 || res.status === 200) {
        root.dialogFormVisible = false
        root.form = {}
        root.$message({
          message: msg,
          type: 'success'
        })
        callback(root, url)
      }
    })
    .catch(err => {
      console.error(err)
    })
}
export function remove (root, row, url) {
  root.$alert('你确定删除数据吗？', '提示', {
    confirmButtonText: '确定',
    callback: () => {
      root.service.delete(url + '/' + row.id)
        .then(res => {
          if (res.status === 204) {
            root.$message({
              message: '删除成功',
              type: 'success'
            })
            getData(root, url)
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
}
