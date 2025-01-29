const fs = require('fs')
const path = require('path')

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

/*
let fileContent

fs.appendFileSync('hello.txt', '\nКонец')

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) throw (err)
    fileContent = data
    console.log(fileContent)
    fs.unlinkSync('hello.txt')
})
*/

/*
for (let i =  1; i < 4; i++) {
    fs.writeFile(path.join(__dirname, 'files', `hello${i}.txt`), `Hello ${i}`, err => {
        if (err) {
            throw err
        }
    
        console.log(`Файл ${i} создан`)
    })
}
*/

///*
for (let i =  1; i <= 3; i++) {
    fs.writeFile(path.join(__dirname, 'files', `hello${i}.txt`), `Hello ${i}`, err => {
        if (err) {
            throw err
        }
    
        //console.log(`Файл ${i} создан`)
        console.log(fs.readFileSync(`files/hello${i}.txt`, 'utf-8'))
    })
}
//*/