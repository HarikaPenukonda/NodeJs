const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try{
        const first = await readFilePromise("./first.txt",'utf8')
        const second = await readFilePromise("./second.txt",'utf8')
        await writeFilePromise('./result.txt-async.txt',`THIS IS AWESOME : ${first} , ${second}`)
        console.log(first,second)
    }catch(err){
        console.log(err)
    }
    
}

start()

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf8",(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText("./file.txt")
// .then((result)=>console.log(result))
// .catch(err => console.log(err))

