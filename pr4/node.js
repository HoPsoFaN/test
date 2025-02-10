const fs = require('fs/promises')
const greeting = require("./greeting")
const age = require("./age")

async function run(){
    try{
        let data = await fs.readFile('users.txt', 'utf8')
        let users = data.split(',')
        for (let i = 0; i < users.length; i++) {
            let user = users[i].split('-')
            let userAge = await age.ages(user[0])
            console.log(greeting.greet(user[0] + ' ' + userAge))
        }
    } catch(error){
        console.log(error)
    }
}

run()