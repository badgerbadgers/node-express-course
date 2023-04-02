const express = require("express")
const path = require("path")
const app = express()

//for setting up middleware
//static file server doesnt need to change
app.use(express.static("./public"))

// app.get("/", (req, res) => {
//   //send file index.html
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// adding to static assets
// SSR
// })

app.all("*", (req, res) => {
  res.status(404).send("resource aint found")
})

app.listen(5200, () => {
  console.log("server is listening on port 5000")
})
