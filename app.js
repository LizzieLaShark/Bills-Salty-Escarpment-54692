//this file should start the server and assign the routing.

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var port = 5000;
var hbs = require('handlebars');

var env = process.env.NODE_ENV || 'development' // string
var knexConfig = require('./knexfile'); //big object
var knexDbConfig = knexConfig[env] //small object
var knexGenerator = require('knex') //function
global.knex = knexGenerator(knexDbConfig)


var scrapeParagraphs = require('./scrapeParagraphs')

var app = express();


var hbs = require('express-hbs');

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.listen(port, function(err, res){  //Setting up server.
    if (err) {
      console.log("bitch, yo server broke.")
    }
    else {
      console.log("soft Serve 5000, bitchez!")
    }
});


app.get('/', function (req, res) {
      knex.select('title', 'url').from('submissions')
      .then(function(data){
      res.render('list-view', {submissions: data, name: 'Lizzie'} );
    })
  })

app.get('/submission/:id', function (req, res) {
  res.send('testing')

})
