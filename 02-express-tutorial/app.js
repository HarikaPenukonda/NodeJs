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
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req)
    // console.log(req.params) // { productID: '1' }
    const {productID} = req.params
    const singleProduct = products.find(data => data.id === Number(productID))
    res.json(singleProduct)
})



app.listen(3001,()=>console.log("server is listening to port 3001..."))