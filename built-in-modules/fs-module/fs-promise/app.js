const {readFile} = require('fs')

readFile("./file.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})