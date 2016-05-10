//n.b. this file and everything in it (inc controlListeners) is what is currently being bundled.

var $ = require('jquery')
var controller = require('./controlListeners')

$('document').ready(function() {
  listen()

  function listen() {
    console.log("listening")

    $('.listHeadings a').click(function(e) {
      var linkToScrape = $(e.target).attr('href')
      e.preventDefault()
      controller.subInfoClick(listen, linkToScrape)
      console.log("listener fired")
    })
  }
})
