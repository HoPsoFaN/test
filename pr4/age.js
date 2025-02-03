const fs = require('fs')

function ages (name){
    let date = new Date()
    fs.readFile('users.txt', 'utf8', function (error, data) {
        let users = data.split(',')
        for (let i = 0; i < users.length; i++) {
            let user = users[i].split('-')
            if (user[0] == name) {
                let test  = (date.getFullYear() - user[1])
                console.log(test)
                return toString(test)
                //return(' ' + (date.getFullYear() - user[1]))
            }
        }
    })
}

module.exports = { ages }