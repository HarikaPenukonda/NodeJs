const superHero = require('./super-hero') // loaded and cached(remembered)
console.log(superHero.getName()); // Batman

superHero.setName("Harry Potter")
console.log(superHero.getName()); // HarryPotter

const newSuperHero = require('./super-hero') // create another instance
console.log(newSuperHero.getName()); // HarryPotter

/*
    we are creating new instance of super hero which should recieve batman as the name
    module caching
    when we require new module, it is loaded and cached(remembered) for subsequent loading
    
*/



// require('./batman')
// require('./superman')

// const addFn = require('./add')
// console.log("hello from index.js")

// const sum = addFn(1,2)
// const sum2= addFn(3,2)
// console.log(sum)
// console.log(sum2)





