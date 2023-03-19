const { readFileSync } = require("fs")
const express = require("express")
//function and server instance
const app = express()

const homePage = readFileSync("./new-public/index.html")

app.get("/", (req, res) => {
  res.status(200).write(homePage)
  res.end()
})

app.get("/sample", (req, res) => {
  res.status(200).write("This is working.")
  res.end()
})

app.listen(3000, () => {
  console.log("server is listening on 3000")
})
