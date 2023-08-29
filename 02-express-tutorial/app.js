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
    const {productID} = req.params
    const singleProduct = products.find(data => data.id === Number(productID))
    if(!singleProduct){
         res.status(404).send('Product id does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params) // { productID: '1', reviewID: 'abc' }
    res.send('Hello World')
})



app.listen(3001,()=>console.log("server is listening to port 3001..."))