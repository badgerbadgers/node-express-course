//Modules
//commonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

//use require to get module.exports
//require is a function and you are passing in where the module is located where data is coming from
//when setting up module always use dot forward slash or dot dot (./, ..)

//destructured
// const { john, peter } = require("./4-names")
const names = require("./4-names")
//can have option to not include js if name structure matches
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
//this will run add values function and you can see console.log in terminal
require("./7-mind-grenade")
// console.log(data)
// console.log(names)
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)
