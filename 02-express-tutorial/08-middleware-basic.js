const express = require("express")
const app = express()

//middleware sits between
//req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  //passes to next middleware
  //either terminate or next middleware
  next()
}
//when working with middleware pass to next middleware
app.get("/", logger, (req, res) => {
  res.send("Home")
})

app.get("/about", (req, res) => {
  res.send("About")
})

app.listen(5200, () => {
  console.log(`Server is listening on port 5200`)
})
