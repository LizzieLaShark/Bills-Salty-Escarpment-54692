var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var port = 5000;
var hbs = require('handlebars');
var scrapeParagraphs = require('./scrapeParagraphs')

var env = process.env.NODE_ENV || 'development' // string
var knexConfig = require('./knexfile'); //big object
var knexGenerator = require('knex')
var knexDbConfig = knexConfig[env] //small object
console.log("env:", env, "config:", knexConfig, "db config:", knexDbConfig)
global.knex = knexGenerator(knexDbConfig)

var scraper = require('./scraper.js')
var scrapeParagraphs = require('./scrapeParagraphs')

var app = express();
app.use(express.static('public'));
var hbs = require('express-hbs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

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

// app.get('/submission/:id', function (req, res) {
//   res.send('testing')
// })

app.post('/scrape', function (req, res){
  //console.log("this is req.body", req.body)
  scrapeParagraphs(req.body.linkToScrape, function(subInfo){
    res.json(subInfo)
    //res.render('list-view', {paragraphData: subInfo})
    //console.log("here's sub info",  subInfo)
  })
})

app.post('/submit', function(req, res){
  console.log('hitting knex submission entry function')
  console.log("here's req.body type", req.body)
  knex('submission_entries').insert(req.body)
  .then(function(data){
    res.send("hello")
  })


})
