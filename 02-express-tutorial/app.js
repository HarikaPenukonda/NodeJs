const express = require('express')
const {products} = require('./data')
const app = express()


app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map(data=>{
        const {id,name,price} = data
        return {id,name,price}
    })
    res.json(newProducts)
})

app.listen(3001,()=>console.log("server is listening to port 3001..."))