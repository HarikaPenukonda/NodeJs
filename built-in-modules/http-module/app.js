// import the http module
const http = require("node:http")

// invoke the create sever method on the module, which accepts callback function as an argument
// the callback function has 2 arguments request and response
// request - gives us information about the incomming requests
// response - send back a response to client
// http module also extends eventemitter class, the callback function specified is a request listener
// whenever the request reaches the server this callback function is executed

const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type" : "text/html"})
    response.end("<h1>Hello world</h1>")
})

// inform server to listen to any incoming requests
server.listen(3000,()=>{
    console.log("server running on port 3000..")
})