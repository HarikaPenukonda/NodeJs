const http = require('http')

const server = http.createServer((request,response)=>{
    console.log('user hit the server')
    response.end("Home Page")
})
server.listen(3000,()=>console.log("Server listening at port 3000..."))
// port is a communication endpoint