const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    // res.json(products)
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((data)=>{
        const {id,name,image} = data
        return {id,name,image}
    })
    res.json(newProducts)
})

app.listen(3000,()=>console.log("server is listening to port 3000..."))