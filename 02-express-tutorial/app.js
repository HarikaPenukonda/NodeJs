const http = require('http')

const server = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type' : 'text/html'})
    response.write('<h1>My Home Page</h1>')
    response.end()
})
server.listen(3000,()=>console.log("Server listening at port 3000..."))
// port is a communication endpoint