const fs = require("node:fs")

const readableStream = fs.createReadStream("./file1.txt",{
    encoding:"utf-8"
})

const writableStream = fs.createWriteStream("./file2.txt")

readableStream.on("data",(chunkOfData)=>{
    console.log(chunkOfData)
    writableStream.write(chunkOfData)
})

