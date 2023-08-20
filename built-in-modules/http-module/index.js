// 1. import the http module
const http = require("node:http")

// invoke the create sever method on the module, which accepts callback function as an argument
// the callback function has 2 arguments request and response
// http module also extends eventemitter class, the callback function specified is a request listener
// whenever the request reaches the server this callback function is executed

const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type" : "text/plain"})
    response.end("Hello world")
})

// inform server to listen to any incoming requests
server.listen(3000,()=>{
    console.log("server running on port 3000..")
})