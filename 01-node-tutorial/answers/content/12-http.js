//built in module for building web server
const http = require("http")

//this server method creates a server, looks for callback
//and takes in two parameters req and res the incoming
//request and response is what method sends back
//also need to define what port to listen to

const server = http.createServer((req, res) => {
  //lets console.log the req object
  //notice how we dont see console.log because server is waiting for those req go to browser and refresh
  //we see now a giant object we are looking of url
  //property to see the endpoint client is requesting
  console.log(req)
  if (req.url === "/") {
    res.end("Welcome to the party")
  }
  //sends different text
  if (req.url === "/about") {
    res.end("Here is our short history")
  }
  //what happens if user access resource that dont exist
  //once we send response we have sent response we end request
  res.end(`
  <h2>nah nothing here</h2>
  <p>this does not exist</p>
  <a href="/">back home</a>
  `)
})

//the port to listen for your method
server.listen(5200)

//now run node app and check terminal and go to browser
//test different urls
//going to default will direct you to default page
//about will direct to history message
//page that doesnt exist will display error page
