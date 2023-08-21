const EventEmitter = require('node:events')

const customeEmitter = new EventEmitter()

customeEmitter.on('response',()=>{
    console.log(`data recieved`)
})

customeEmitter.emit('response')