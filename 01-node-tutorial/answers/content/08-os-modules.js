//os module helpful when dealing with operating system
//os is built in so no ./
const os = require("os")
//multiple options run methods with variables
//os.
//or destructure

//info about current user
//no need to pass arg just invoke it
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
