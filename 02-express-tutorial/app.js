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

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query) // http://localhost:3001/api/v1/query?name=john&id=4, { name: 'john', id: '4' }
    const{search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
        return sortedProducts = sortedProducts.filter(products=>products.name.startsWith(search))
    }
    if(limit){
        return sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        //res.status(200).send('no products matched')
         return res.status(200).json({success:true,data:[]}) // Cannot set headers after they are sent to the client
    }
    res.status(200).json(sortedProducts)
    //res.send('Hello World')
})


app.listen(3001,()=>console.log("server is listening to port 3001..."))

/*
    In Javascript if we dont explicitly `return`, then ofcourse javascript just keeps reading the code 
    If we are going to omit the `return` we will get server error - Cannot set headers after they are sent to the client
    where we send one response and then javascript just keeps reading the code and then express in confused.
    As express already sent the response so why are we sending another.

    It is happening in the same request, we cannot send basically two responses in the same request, one after the
    other.

    we can have only one request per response.In order to avoid this error we add return 
*/ 