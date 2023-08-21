const buffer = new Buffer.from("Harry","utf-8")

buffer.write("codeMac")

console.log(buffer.toJSON()) // { type: 'Buffer', data: [ 72, 97, 114, 114, 121 ] }

console.log(buffer) // <Buffer 48 61 72 72 79> Hexadecimal values

console.log(buffer.toString()) // Harry , codey

