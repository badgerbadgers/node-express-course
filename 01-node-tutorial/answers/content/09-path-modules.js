const path = require("path")
//prints platform specific separator
console.log(path.sep)

//using path.join method and pass values as a string
//in example we are looking for content folder /content
//and inside content folder the subfolder and eventually test.txt
//subfolder, test.txt
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)

//next we get the base name
const base = path.basename(filePath)
console.log(base)

//absolute path
//this will point to directory where app.js is located
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
//gives absolute path to test.txt why do we care? this app runs in different environments
console.log(absolute)
