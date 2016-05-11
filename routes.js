// TODO - when all routes are working, import them in here
// to nicely modularise your work


  app.get('/form', function(req, res){
  console.log("hello!")
  res.render('submissionform')
})


// var express = require('express');
// var router = express.Router();
//
// var app = express();
// //get all data for main page
//
//
// router.get('/', function(req, res){
//   res.render(links.js, {
//     title: 'testing'
//   })
// })
