const fs = require("node:fs")
console.log("first")

// read the contents of a file, the fs module internally uses buffer
//readFileSync is synchronous way of reading a file
const fileContents = fs.readFileSync("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/file.txt","utf-8")
console.log(fileContents) 

console.log("second")

// for asynchronous way of reading a file
fs.readFile("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})

console.log("third")
// Overwrite existing content
fs.writeFileSync("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/greet.txt","Hello World")

fs.writeFile(
    "/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/greet.txt",
    " Happy NodeJS Practice.. All the best",
    {flag:"a"},
    (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("File written")
        }
})