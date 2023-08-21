const {readFile,writeFile} = require("node:fs")

console.log("first")
readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./result.txt',`Here is the result : ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }else{
                console.log(result)
            }
        })
    })
})