const http = require('http')
const {readFileSync} = require('fs')



const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((request,response)=>{
    const url = request.url
    console.log(url)
    // home page
    if(url === '/'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write(homePage)
        response.end()
    // about page
    }else if(url === '/about'){
            response.writeHead(200,{'content-type' : 'text/html'})
            response.write('<h1>About Page</h1>')
            response.end()
    // styles
    }else if(url === '/styles.css'){
        response.writeHead(200,{'content-type' : 'text/css'})
        response.write(homeStyle)
        response.end()
    // image/logo
    }else if(url === '/logo.svg'){
        response.writeHead(200,{'content-type' : 'image/svg+xml'})
        response.write(homeImage)
        response.end()
    //logic
    }else if(url === '/browser-app.js'){
        response.writeHead(200,{'content-type' : 'text/javascript'})
        response.write(homeLogic)
        response.end()
    // 404
    }else{
    response.writeHead(404,{'content-type' : 'text/html'})
    response.write('<h1>Page Not Found</h1>')
    response.end()
}
    
})
server.listen(3000,()=>console.log("Server listening at port 3000..."))
// port is a communication endpoint

/*
    console.log(url)
    /home
    /styles.css
    /logo.svg
    /browser-app.js

    we are requesting a home page and we are serving file - ./navbar-app/index.html
    we have 3 more requests 
    /styles.css
    /logo.svg
    /browser-app.js

    initially we send html content and the browser starts reading the content and every time we have a path to 
    our server browser 

    we are not handling above requests by our server

    so manually we need to request all the files and assign to some variable and setup these paths

*/