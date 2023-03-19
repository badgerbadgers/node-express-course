//get events module it is assigned to variable
const EventEmitter = require('events')

//emits an event create an instance listen for event
//on - listen for an event, emit - emit an event
const customEmitter = new EventEmitter()

//takes in string and callback 
customEmitter.on('response', (name, id) => {
console.log(`data received user ${name} with ${id}`)
})

//you can have multiple emitters
//can access args in params
customEmitter.on('response', () => {
  console.log(`some other logic here`)
  })

//the order matters for emitters
//first listen to event then emit
//you can pass arguments when emitting the event
//events core building block of node
customEmitter.emit(`response`, 'john', 34)