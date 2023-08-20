const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((request,response)=>{
    // request.url gives us the url query string
    // response.end(request.url) // / - root
    if(request.url === "/"){
        response.writeHead(200,{"Content-type" : "text/plain"})
        response.end("Home Page")
    }
    else if(request.url === "/about"){
        response.writeHead(200,{"Content-type" : "text/plain"})
        response.end("About Page")
    }else if(request.url === "/api"){
        response.writeHead(200,{"Content-type" : "application/json"})
        response.end(JSON.stringify({
            firstName : "Bruce",
            lastName : "Wayne"
        }))
    }
    else{
        response.writeHead(404)
        response.end("Page Not Found")
    }
}) 

server.listen(3000,()=>console.log("server running on port 3000.."))

/*
    This is how we can map requests to the appropriate response in code

    The http module gives us access to the request object which in turn gives us access to the URL property

    request. also gives us access to the HTTP method such as GET,PUT,POST,DELETE which we can use to route different requests

    A combinatation of request.url and request. method can help us handle any type of routing with http module

    However, In real world app we typically rely on a web framework to handle all such request for us
*/