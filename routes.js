var express = require('express');
var router = express.Router();

var app = express();
//get all data for main page


router.get('/', function(req, res){
  res.render(links.js, {
    title: 'testing'
  })
})
