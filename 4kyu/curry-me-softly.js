function CurryIt(func) {
  let fn = func
  let that

  return function(...args) {
    if (!that) that = this

    if (args.length === 0) {
      const result = fn()
      fn = func
      return result
    }

    fn = fn.bind(that, ...arg)
  }
}
