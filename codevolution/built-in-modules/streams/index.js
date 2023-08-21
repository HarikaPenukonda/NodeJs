const fs = require("node:fs")
const zlib = require("node:zlib") // allows us to use zip files

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./file1.txt",{
    encoding:"utf-8",
    highWaterMark : 2
})

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz")) // chaining with pipe

const writableStream = fs.createWriteStream("./file2.txt")
readableStream.pipe(writableStream)

// readableStream.on("data",(chunkOfData)=>{
//     console.log(chunkOfData)
//     writableStream.write(chunkOfData)
// })

