const fs = require('fs')

/*
let fileContent = fs.readFileSync('file.txt', 'utf8')
console.log(fileContent)
*/

/*
let fileContent = fs.readFile('file.txt', 'utf8', function (err, data) {
    console.log(data)
})
*/

/*
fs.writeFileSync('hello1.txt', 'Hello, world!')

fs.writeFile('hello2.txt', 'Hello, world 2!', function (error) {
    console.log('Asynchronous creating of file.')
})
*/

/*
fs.appendFileSync('hello1.txt', ' continuation of file 1')

fs.appendFile('hello2.txt', ' continuation of file 2', function (error) {
    console.log('Asynchronous continuation of file 2.')
})
*/

/*
fs.unlinkSync('hello1.txt')

fs.unlink('hello2.txt', function (error) {
    console.log('Asynchronous deleting of hello2.txt.')
})
*/

///*
let files1 = fs.readdirSync('../pr4')
console.log(files1)

fs.readdir('../pr4', 'utf8', function (err, data) {
    console.log(data)
})
//*/