const obj1 = {
    name : "Bruce wayne"
}

// const obj2 = obj1;
// obj2.name = "Clark kent"

//console.log(obj1) // { name: 'Clark kent' }
// when you assign an object to another, both objects point at the same address in memory. Modifying one will lead
// to another

let obj2 = obj1
obj2 = {
    name : "Clark kent"
}

console.log(obj1) // { name: 'Bruce wayne' }
/*
    when we assign the object literal, the reference was broken, modifying obj2 will not affect obj1
*/