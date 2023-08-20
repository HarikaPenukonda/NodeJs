// console.log("statement-1")
// process.nextTick(()=>console.log("this is process.next 1"))
// console.log("statement-2")

// sync is given priority over async
// statement-1
// statement-2
// this is process.next 1


Promise.resolve().then(()=>console.log("this is Promise.resolve 1"))
process.nextTick(()=>console.log("this is process.next 1"))
// this is process.next 1
// this is Promise.resolve 1