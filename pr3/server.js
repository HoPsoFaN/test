const Emitter = require('events')

const emitter = new Emitter()

let evetName = 'greet'

emitter.on(evetName, function(){
    console.log('Hello')
})

emitter.emit('greet')