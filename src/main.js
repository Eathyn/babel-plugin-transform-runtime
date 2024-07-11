const promise = new Promise((resolve) => resolve(1))
promise.finally(() => {
  console.log('success')
})
