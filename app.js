//this file should start the server and assign the routing.

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var port = 5000;
var hbs = require('express-hbs')

var routes = require('./routes');

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
      console.log("soft Serve, bitchez!")
    }
});

app.get('/index', function (req, res) {
  res.render('index', ({name: 'Lizzie'}))

})

app.get('/list-data', function (req, res) {
  // have some logic
  fs.readFile('./links.json', (err, data) => {
    if (err) throw err;

    // returning a response with some data

    var parseData = JSON.parse(data) //need to tell it to render just the titles?
    console.log(parseData)
    res.send(parseData);

  });
  //do the readFile then render the data using the
  //{{links}} thing from the handlebars temp. maybe data.title or somethng
})
