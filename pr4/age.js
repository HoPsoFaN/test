const fs = require('fs/promises')

async function ages (name){
    let date = new Date()
    try{
        let data = await fs.readFile('users.txt', 'utf8')
        let users = data.split(',')
        for (let i = 0; i < users.length; i++) {
            let user = users[i].split('-')
            if (user[0] === name) {
                let answer = (date.getFullYear() - user[1])
                return answer.toString()
            }
        }
    } catch(error){
        console.log(error)
        throw error
    }
}

module.exports = { ages }