const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  //passes to next middleware
  //either terminate or next middleware
  next()
}
module.exports = logger
