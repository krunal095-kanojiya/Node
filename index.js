// var app = require('./app')
// console.log("Hello");
// var a = 5;
// var b = 6;
// var c = 7;
// var d = a + b + c;
// if (d <= 10) {
//     console.log("sorry you are fail");
// }

// console.log(app)

// var arr = [2, 4, 5, 6, 24, 3, 34, 354, 345, ];
// var arr = arr.filter((items) => {
//     console.log(items)
//     return items === 3
// })
// console.log(arr)

const fs = require('fs');
fs.writeFileSync("hello.txt", "Here one file is create new");
console.log(fs)
