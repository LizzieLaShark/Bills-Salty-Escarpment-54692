//n.b. this file and everything in it (inc controlListeners) is what is currently being bundled.

var $ = require('jquery')
var controller = require('./controlListeners')
var request = require('superagent')


$('document').ready(function() {
  listen()

  function listen() {
    console.log("listening")
    $('.listHeadings a').click(function(e) {
      e.preventDefault()
      var linkToScrape = $(e.target).attr('href')
      controller.subInfoClick(subscribeToSubmitButtonClick, linkToScrape)
      console.log("listener fired")
    })
  }

  function subscribeToSubmitButtonClick(){
    $('#submissionSubmit').click(function(e){
        e.preventDefault()
        var formData = controller.getFormData()
        //post to /submit route, sending the form data.
        request.post('/submit')
          .send(formData)
          .end(function(err, res){
            cnosole.log("form data sent to submit route")
          })
        console.log("you clicked Submit!")
    })
  }

//listen for submit submission. When fired, use jquery
//to grab data and put it into db? or use just knex.


})
