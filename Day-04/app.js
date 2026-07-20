const fs = require('fs');

// //utf8 tells nodejs to convert those bytes to readable text
// // const data = fs.readFileSync("message.txt","utf8");

// //without utf8 it return raw binary data
// // const data = fs.readFileSync("message.txt");

// fs.writeFileSync('message.txt', 'This is our fourth day of learning node js series')

// const data = fs.readFileSync('message.txt','utf8')

// fs.writeFileSync('message.txt','Updated Data')

// const Newdata = fs.readFileSync('message.txt','utf8')

// //Appending Data
// fs.appendFileSync('message.txt','\nLearning Node and Express')

// const appendData = fs.readFileSync('message.txt','utf8')


// //Renaming file
// fs.renameSync('message.txt','notes.txt')

// const renamedFile = fs.readFileSync('notes.txt','utf8')

// console.log('Message file' ,fs.existsSync('message.txt'));
// console.log('Notes File', fs.existsSync('notes.txt'))
// //Deleting file
// // fs.unlinkSync('message.txt')

// // console.log(renamedFile)
// // console.log(data)
// // console.log(Newdata)
// console.log(appendData)



// Synchronous vs Asynchronous


// Synchronous
// const data = fs.readFileSync('notes.txt','utf8');

// console.log(data);

// console.log('Finished')

// Asynchronous
fs.readFile('notes.txt', 'utf8', (err, data) => {
    console.log(data)
});

console.log('Finished');