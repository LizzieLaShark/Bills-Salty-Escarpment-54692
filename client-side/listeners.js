var $ = require('jquery')
var controller = require('./controlListeners')
var scrapeParagraphs = require('scrapeParagraphs')

function listener(){
  console.log('listening')

  $('.listHeadings').click(function(e) {
  e.preventDefault()
  var linkInfo = $(e).find('a:first').attr('href')
  console.log(linkInfo)
  //client-side render it to the page


  listen()
})

}
