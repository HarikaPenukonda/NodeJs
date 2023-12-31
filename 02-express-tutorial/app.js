const express = require('express')
const app = express()

const {people} = require('./data')


// static assets
app.use(express.static('./methods-public'))

// parse form data 
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json())

app.get('/api/people',(req,res)=>{
    //res.status(200).send(people)
    res.status(200).json({success : true,data:people})
})

app.post('/api/people',(req,res)=>{
    console.log(req.body)
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,message:'please provide valid data'})
    }
    res.status(201).send({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,message:'please provide valid data'})
    }
    res.status(201).send({success:true,data:[...people,name]})
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
