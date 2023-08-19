const fs = require("node:fs")

// read the contents of a file, the fs module internally uses buffer
//readFileSync is synchronous way of reading a file
const fileContents = fs.readFileSync("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/file.txt","utf-8")
console.log(fileContents) 

// for asynchronous way of reading a file
fs.readFile("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})