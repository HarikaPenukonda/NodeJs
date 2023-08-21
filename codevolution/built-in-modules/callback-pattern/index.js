function greet(name){
    console.log(`Hello! ${name}`)
}

function higherOrderDunction(callback){
    const name = "Harry"
    callback(name)
}

higherOrderDunction(greet)

/*
    A function which access a function as an argument and return a function is called as Higher Order Argument.
    A function passed as an argument to another function is called a callback function
*/