const add = (a,b) => {
    return a + b
}

const subract = (a,b) => {
    return a - b
}

exports = {add,subract} // TypeError: add is not a function

/*
    from a module Node.js only returns module.exports but not exports object
*/

// exports.add  = (a,b) =>{
//     return a+b
// }

// exports.subract  = (a,b) =>{
//     return a-b
// } 

//module.exports = {add,subract}