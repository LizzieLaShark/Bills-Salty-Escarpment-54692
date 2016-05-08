//This file starts the server and assigns the routes.

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var port = 5000;
var hbs = require('handlebars')
var hbs = require('express-hbs');
var router = express.Router();
var app = express();

//set up HBS
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//Set up server
app.listen(port, function(err, res){
    if (err) {
      console.log("Dang, a server error!")
    }
    else {
      console.log("soft Serve, bitchez. Listening on port 5000")
    }
});

module.exports = {
  app: app
}

//Here are the routes:

var scrapeParagraphs = require('./scrapeParagraphs')

  app.get('/home', function (req, res) {
    res.send('HOMEPAGE')
  })

  app.get('/index', function (req, res) {
    res.render('index', ({name: 'Lizzie'}))

  })

  app.get('/list-data', function (req, res) {
    fs.readFile('./links.json', (err, data) => {
      if (err) throw err;
      var parsedtitles = JSON.parse(data)
        var titles = parsedtitles.map(function(submission){
          return submission.title
        })

      console.log("parsed Titles", parsedtitles)
      scrapeParagraphs('http://www.parliament.nz' + parsedtitles[0].url, function(paragraphs){
        console.log("hello")
      })
      res.render('list-view', ({sub: titles }) );

  // [i].title + ': www.parliament.nz' + parseData[i].url
    });
  })

  app.get('/submission/:id', function (req, res) {
    res.send('testing')
    // res.render('subs-view', ({paragraph: paragraphs[0]}) )

  })
