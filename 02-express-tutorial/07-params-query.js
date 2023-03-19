const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send(`<h1>Home Page </h1><a href="/api/products">products</a>`)
})

//set up with route paramter
app.get("/api/products/:productID", (req, res) => {
  //single product using find()
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send("Product does not exist")
  }
  //gets all items
  // const newProducts = products.map((product) => {
  //   const { id, name, image } = product
  //   return { id, name, image }
  // })
  res.json(singleProduct)

  app.get("/api/product/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params)
    res.send("hello world")
  })
})
app.listen(5200, () => {
  console.log("server is listening 5200")
})
