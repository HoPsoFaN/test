function greet (name){
    let date = new Date()
    if (date.getHours() < 12){
        return('Доброе утро, ' + name)
    } else if (date.getHours() > 12 && date.getHours() < 17){
        return('Доброе день, ' + name)
    } else if (date.getHours() > 17){
        return('Доброе вечер, ' + name)
    }
}

module.exports = { greet }