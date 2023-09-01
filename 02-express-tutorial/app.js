const express = require('express')
const app = express()

const {people} = require('./data')

app.get('/api/people',(req,res)=>{
    //res.status(200).send(people)
    res.status(200).json({sucess : true,data:people})
})

app.listen(3001,()=>console.log("server is listening to port 3001..."))
