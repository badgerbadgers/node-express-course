const express = require("express")
const app = express()

const people = require("./routers/people")
const auth = require("./routers/auth")

//static assets
app.use(express.static("./methods-public"))
//parse data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.use("/api/people", people)
app.use("/login", auth)

app.post("/login", (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Provide a name")
})

app.listen(5200, () => {
  console.log(`Server is listening on port 5200`)
})
