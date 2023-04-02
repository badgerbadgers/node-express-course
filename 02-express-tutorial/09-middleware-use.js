const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")
//req => middleware => res
//method that gets middleware passed in
//app.use invokes this for any route
//order matters here for EXPRESS
//can pass path
//use array to use multi middleware
//will be executed in order

app.use([logger, authorize])
//api/home/about/products
//if no path applies middleware to all
app.get("/", (req, res) => {
  res.send("Home")
})

app.get("/about", (req, res) => {
  res.send("About")
})

//any of the routes has access to the 'user'
app.get("/api/products", (req, res) => {
  console.log(req.user)
  res.send("Products")
})

app.get("/api/items", (req, res) => {
  res.send("Items")
})

app.listen(5200, () => {
  console.log(`Server is listening on port 5200`)
})
