//n.b. this file and everything in it (inc controlListeners) is what is currently being bundled.

var $ = require('jquery')
var controller = require('./controlListeners')
var request = require('superagent')

$('document').ready(function() {
  listen()

  function listen() {
    $('.listHeadings a').click(function(e) {
      e.preventDefault()
      var linkToScrape = $(e.target).attr('href')
      controller.subInfoClick(linkToScrape)
      console.log("subInfo listener fired")
    })
  }
})
