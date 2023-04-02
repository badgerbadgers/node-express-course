const mongoose = require("mongoose")

const connectDB = (url) => {
  return mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("CONNECTED TO DB..."))
    .catch((err) => console.log(err))
}

module.exports = connectDB
