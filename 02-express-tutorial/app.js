const http = require('http')
const {readFileSync} = require('fs')


const homePage = readFileSync('./index.html')

const server = http.createServer((request,response)=>{
    //console.log(request.method) // GET
    //console.log(request.url)
    const url = request.url
    if(url === '/home'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write(homePage)
        response.end()
    }
    
})
server.listen(3000,()=>console.log("Server listening at port 3000..."))
// port is a communication endpoint