const path = require('path');
const fs = require('fs')

console.log(path.parse(__dirname))

// console.log(__dirname)

fs.writeFileSync('notes.txt','These are notes for nodejs learning series')

console.log(path.resolve(__dirname))
console.log(path.resolve(__filename))