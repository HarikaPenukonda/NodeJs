const express = require('express')
const app = express()

const {people} = require('./data')


// static assets
app.use(express.static('./methods-public'))

// parse form data 
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{
    //res.status(200).send(people)
    res.status(200).json({sucess : true,data:people})
})


app.post('/login',(req,res)=>{
    console.log(req.body) // [Object: null prototype] { name: 'Harry' }
    const {name} =  req.body
    if(name){
        return res.status(200).send(`Welcome ${name}!`)
    }
    res.status(401).send("Please provide credentials")
})

app.listen(3001,()=>console.log("server is listening to port 3001..."))
