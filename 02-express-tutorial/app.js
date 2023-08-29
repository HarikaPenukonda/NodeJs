const express = require('express')
const {products} = require('./data')
const app = express()


app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.listen(3001,()=>console.log("server is listening to port 3001..."))