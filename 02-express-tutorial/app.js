const express = require('express')
const app = express()
const logger = require('./logger')

// req => middleware => res

app.get('/',logger,(req,res)=>{
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})


app.listen(3001,()=>console.log("server is listening to port 3001..."))
