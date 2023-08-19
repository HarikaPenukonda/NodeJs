const path = require("path")
// const path = require("node:path") - optional

console.log(__filename) // /Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules/path-module.js
console.log(__dirname) // /Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules
// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command

// basename - Return the last portion of a path.
console.log(path.basename(__filename)) // path-module.js
console.log(path.basename(__dirname)) // built-in-modules

// extname - Returns the extenstion of the path
console.log(path.extname(__filename)) // .js
console.log(path.extname(__dirname)) //

// parse - Returns an object from a path string.
console.log(path.parse(__filename))
// {
//     root: '/',
//     dir: '/Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules',
//     base: 'path-module.js',
//     ext: '.js',
//     name: 'path-module'
//   }

// format - Returns a path string from an object, the opposite of path.parse 
console.log(path.format(path.parse(__filename))) // /Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules/path-module.js

// isAbsolute - Determines whether the path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
console.log(path.isAbsolute(__filename)) //true
console.log(path.isAbsolute("./data.json")) //false

// join - join all the arguments together and normalize the resulting path.
console.log(path.join("/folder1","folder2","index.html")) // folder1/folder2/index.html
console.log(path.join("/folder1","//folder2","index.html")) // /folder1/folder2/index.html
console.log(path.join("/folder1","//folder2","../index.html")) ///folder1/index.html
console.log(path.join(__dirname,"data.json")) // /Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules/data.json

// resolve - Resolves to an absolute path.
console.log(path.resolve("folder1","folder2","index.html")) // /Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules/folder1/folder2/index.html
console.log(path.resolve("/folder1","folder2","index.html")) // /folder1/folder2/index.html
console.log(path.resolve("/folder1","//folder2","index.html")) // /folder2/index.html
console.log(path.resolve("/folder1","//folder2","../index.html")) // /index.html
console.log(path.resolve(__dirname,"data.json")) // /Users/matthewhinthorn/Desktop/NodeProjects/NodeJS/built-in-modules/data.json