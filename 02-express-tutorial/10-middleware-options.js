const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")
const morgan = require("morgan")
//req => middleware => res

//1. use vs route
//2. options - our own / express / third party

// app.use([logger, authorize])
// our own express auth using static method
// app.use(express.static("./public"))
// third party
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.send("Home")
})

app.get("/about", (req, res) => {
  res.send("About")
})

//any of the routes has access to the 'user'
app.get("/api/products", (req, res) => {
  res.send("Products")
})

app.get("/api/items", (req, res) => {
  console.log(req.user)
  res.send("Items")
})

app.listen(5200, () => {
  console.log(`Server is listening on port 5200`)
})
