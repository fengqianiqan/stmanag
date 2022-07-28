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
