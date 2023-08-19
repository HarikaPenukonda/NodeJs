const add = (a,b) => {
    return a + b
}

const subract = (a,b) => {
    return a - b
}

exports = {add,subract} // TypeError: add is not a function

/*
    from a module Node.js only returns module.exports but not exports object, exports is just an reference to module.exports
    If we assign a new object to exports, that reference is broken and module.exports will be an empty object that is exported
    
    
    In index.js math becomes an empty object, if we access add, subrat from empty object we get error
    TypeError: add is not a function
*/

// exports.add  = (a,b) =>{
//     return a+b
// }

// exports.subract  = (a,b) =>{
//     return a-b
// } 

//module.exports = {add,subract}