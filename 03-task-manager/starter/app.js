require("./db/connect")
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
//get middleware

app.use(express.json())

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App")
})

//routes
app.use("/api/v1/tasks", tasks)

//app.get('/api/v1/tasks')  - get all tasks
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id') - get single task
//app.patch('/api/v1/tasks/:id') - update task
//app.delete('/api/v1/tasks/:id') - delete task

const port = 5200
const start = async () => {
  try {
    await connectDB()
    app.listen(port, console.log(`Server is listening ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
