//set up with variable and require keyword looking for express lib
const express = require("express")
//function and server instance
const app = express()

app.get("/", (req, res) => {
  //invoked each time makes req to root
  res.status(200).send("Home Page")
})

app.get("/about", (req, res) => {
  res.status(200).send("About Page")
})

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>")
})
app.listen(5200, () => {
  console.log("server is listening on 5200")
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
