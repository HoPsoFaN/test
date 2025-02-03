const fs = require('fs')
const greeting = require("./greeting")
const age = require("./age")

console.log(age.ages('Илья'))

fs.readFile('users.txt', 'utf8', function (error, data) {
    let users = data.split(',')
    for (let i = 0; i < users.length; i++) {
        let user = users[i].split('-')
        console.log(greeting.greet(user[0] + age.ages(user[0])))
    }
})