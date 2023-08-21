const express = require('express')
const app = express()

//app.get
app.get('/',(request,respond)=>{
    console.log('user hit the resource')
    respond.status(200).send('Home Page')
})

app.get('/about',(request,respond)=>{
    //console.log('user hit the resource')
    respond.status(200).send('About Page')
})

//app.all - handles all the http methods
app.all('*',(request,response)=>{
    response.status(404).send('<h1>resource not found</h1>')
})

//app.listen
app.listen(3000,()=>{
    console.log('server is listening on port 3000..')
})


//app.post
//app.put
//app.delete

//app.use
