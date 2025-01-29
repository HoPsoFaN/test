const Emitter = require('events')

/*
const emitter = new Emitter()

let evetName = 'Hello'

emitter.on(evetName, function(){
    console.log('Hello')
})

emitter.emit('Hello')
*/

/*
const emitter = new Emitter()

let evetName = 'Hello'
let dates = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

emitter.on(evetName, function(name, date){
    for (let i = 0; i < dates.length; i++){
        console.log(`Hello ${name} сегодня ${date[i]}`)
    }
})

emitter.emit('Hello', 'Илья', dates)
*/

///*
const handlerClick = new Emitter()

let evetName = 'click'

handlerClick.on(evetName, function(text, object){
    console.log(text)
    console.log(object.event)
})

handlerClick.emit('click', 'вызов события клик', {event: 'click'})
//*/