const EventEmitter = require('node:events') // returns a class EventEmitter

const emitter = new EventEmitter()

// register a listener
emitter.on("order-pizza",(size,topping)=>{
    console.log(`order-recieved!, Baking a ${size} pizza with ${topping}`)
})

emitter.on("order-pizza", (size)=>{
    if(size === "large"){
        console.log("Serving complimentary drink")
    }
})

console.log("Do work before event occurs in the system")
emitter.emit("order-pizza","large","mushroom")

