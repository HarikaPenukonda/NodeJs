const fs = require("node:fs/promises")

async function readFile(){
    try{
        const data = await fs.readFile("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/file.txt", "utf-8")
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

// console.log("first")

// fs.readFile("/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/file.txt","utf-8")
// .then(data => console.log(data))
// .catch(error => console.log(error,"No such file"))

//console.log("second")

readFile()