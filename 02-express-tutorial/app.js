const express = require('express')
const app = express()

// req => middleware => res

const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time) // GET / 2023
    // res.send('Testing')
    next()
}

app.get('/',logger,(req,res)=>{
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})


app.listen(3001,()=>console.log("server is listening to port 3001..."))
