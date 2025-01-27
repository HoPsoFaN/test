const fs = require('fs')

/*
fs.rename('hello.txt', 'async operation.txt', function (error) {
    if (error) {
        console.log(error)
    }
})

fs.renameSync('hello.txt', 'sync operation.txt')
*/

/*
let fileContent

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) throw (err)
    fileContent = data
    console.log(fileContent)
})
//*/

///*
let fileContent

fs.appendFileSync('hello.txt', '\nКонец')

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) throw (err)
    fileContent = data
    console.log(fileContent)
    fs.unlinkSync('hello.txt')
})
//*/