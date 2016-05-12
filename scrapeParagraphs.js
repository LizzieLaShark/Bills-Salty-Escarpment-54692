var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')

var scrapeParagraphs = function(url, callback) {
  request.get(url)  //gets the website using superagent
  .then(function(results){
      var $ = cheerio.load(results.text)    
      var subInfo = []
      $('p').each(function(i, elem) {
        subInfo[i] = {
          subInfo: $(this).text(),
        }
      })
      callback(subInfo)
  })
  .catch(function(err){
    console.log("Uh ooh...")
  })
}

module.exports = scrapeParagraphs
