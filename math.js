const add = (a,b) => {
    return a + b
}

const subract = (a,b) => {
    return a - b
}

exports = {add,subract} // TypeError: add is not a function

// exports.add  = (a,b) =>{
//     return a+b
// }

// exports.subract  = (a,b) =>{
//     return a-b
// } 

//module.exports = {add,subract}