const importedSentence = require("./practice2")
const os = require("os")
const { writeFile } = require("fs")

// console.log("this imported!", importedSentence)
const user = os.userInfo().username
console.log(user)
// const practice = readFile("./content/practice.txt", "utf8")
// console.log(practice)
//setup write file
writeFile(
  "../content/practice.txt",
  `${importedSentence} "from" ${user}`,
  (err, result) => {
    if (err) {
      console.log(result)
      return
    }
    // console.log("done with this task")
  }
)

// console.log("starting next tasks")
