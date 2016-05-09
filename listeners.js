var $ = require('jquery')
var controller = require('./controlListeners')

function lister(){
  console.log('listening')

  $('.listHeadings').click(function(e) {
  e.preventDefault()
  controller.newAccountForm()
  listen()
})

}
