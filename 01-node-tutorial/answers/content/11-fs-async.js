const { writeFile, readFile } = require("fs")
// //log for before code
console.log("start")

//the way synchronous methods works
//you need to provide a callback, this is run when you are done
//whatever functionality you are running is complete then we run the callback
//invoke readFile method
//readfile takes two arguments first is the path
//second is a callback function
//and inside arugment first is error
//if no error you have aaccess to result
//callbackhell nesting callback in callback
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    //setup write file
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(result)
          return
        }
        console.log("done with this task")
      }
    )
  })
})
console.log("starting next tasks")
//now running the node app.js you will get output
//of
//tim.almacen@Tims-Air node-tutorial % node app.js
//<Buffer 48 65 6c 6c 6f 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//we dont get the text we get the buffer if we dont provide the utf-8 encoding you add between path and content readFile (path, utf-8)
//adding that line prints out :
//tim.almacen@Tims-Air node-tutorial % node app.js
//Hello first text file
//how to setup same functionality in result-sync.txt
//in callback you need to setup functionality in callback only way to setupt is inside of callback
