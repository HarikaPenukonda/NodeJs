const EventEmitter = require('node:events')

const customeEmitter = new EventEmitter()

customeEmitter.on('response',(name,age)=>{
    console.log(`data recieved ${name} and ${age}`)
    
})

customeEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customeEmitter.emit('response','harry',28)

/*
    1. we can use any number of functions, that are listening for the events
    2. The order matters, first listen for event then emit
*/