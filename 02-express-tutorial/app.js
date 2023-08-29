const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    res.json(products)
})



app.listen(3001,()=>console.log("server is listening to port 3001..."))