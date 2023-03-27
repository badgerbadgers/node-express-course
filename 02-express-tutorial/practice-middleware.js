const consoleLog = (req, res, next) => {
  console.log(`this is a consoleLog middleware test. \n
  consoleLog is a function that has been exported and imported to another file. \n

  the practice-express file then uses this function with the require keyword. \n
  and then invoked before every request with an app.use statement.`)
  //passes to next middleware
  //either terminate or next middleware
  next()
}

module.exports = consoleLog
