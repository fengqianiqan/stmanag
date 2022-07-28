export function getData (root, url, params) {
  root.service.get(url + '/count')
    .then(res => {
      // + '?limit' + root.total
      // eslint-disable-next-line standard/object-curly-even-spacing
      root.service.get(url, {params: params})
        .then(res => {
          if (res.status === 200) {
            console.log(res)
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
