//destructured methods synchronous
const { readFileSync, writeFileSync } = require("fs")
//log for before code
console.log("start")
//this is the same
//const fs = require('fs');
//accessing the method
//fs.read

//read from filesystem
//using utf-8
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")

//in terminal will print both files
console.log(first, second)

//creates new file provides two arguments
//if file is not there
//create new if present node will overwrite by default
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first}, ${second}`
// )
//now if you go to your result-sync.txt whatever you write will be overwritten withthis string interpolated text
//if you want to append to the file you need to pass in one more argument
//an options object example has flag
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
)
console.log("done with this task")
console.log("starting next one")
//if you run node and check result-sync.txt
//you will notice a new line because by default
//you will create a new file
