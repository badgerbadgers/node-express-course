//built in node
const http = require("http")
const { readFileSync } = require("fs")

//get all files
//used fs because this is not invoked
const homePage = readFileSync("./navbar-app/index.html")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeLogic = readFileSync("./navbar-app/browser-app.js")
const server = http.createServer((req, res) => {
  const url = req.url

  //home
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homePage)
    res.end("welcome to the home page")
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write("<h1>about </h1>")
    res.end("about page")
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" })
    res.write(homeStyles)
    res.end()
  }
  //homeImage
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" })
    res.write(homeImage)
    res.end()
  }
  //logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" })
    res.write(homeLogic)
    res.end()
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" })
    res.write("<h1>error</h1>")
    res.end("error page")
  }
})

//setup the port in dev number dont really matter then pass port into listen
server.listen(5200)
