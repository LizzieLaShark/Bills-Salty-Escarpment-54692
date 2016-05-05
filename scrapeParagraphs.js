var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')

// $(document).ready(function() {


var scrapeParagraphs = function(url, callback) {
  request.get(url)  //gets the website using superagent
  .then(function(results){
      var $ = cheerio.load(results.text)
      var paragraphs = []
      $('p').each(function(i, elem) {
        paragraphs[i] = $('.section').attr('p')
        console.log ($(this).text())
        paragraphs[i] = {
         info: $(this).text(),
        //  url: $(this).attr('href')
        }
      })

    console.log(paragraphs)
    callback(paragraphs)
  })

  .then(function(results){
    console.log("here are the paragraphs: ", results)
     fs.writeFile('./paragraphs.json', JSON.stringify(results), function(err, data) {
        if (err) console.log(err);
     })
  })
  .catch(function(err){
    console.log("Uh ooh...")
  })
}


// scrapeParagraphs();

module.exports = scrapeParagraphs
