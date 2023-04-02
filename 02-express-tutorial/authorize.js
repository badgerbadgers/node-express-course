const authorize = (req, res, next) => {
  //setup query string
  //in browser you need to provide user start with ?/user=john
  //else error msg
  const { user } = req.query
  if (user === "john") {
    req.user = { name: "john", id: 3 }
    next()
  } else {
    res.status(401).send("Unauthorized")
  }
  console.log("authorized")
  next()
}

module.exports = authorize
