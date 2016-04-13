var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')
var $ = require('jquery')

// $(document).ready(function() {



request.get('http://www.parliament.nz/en-nz/pb/sc/make-submission')  //gets the website using superagent
  .then(function(results){
      var $ = cheerio.load(results.text)
      var linksArray = []
      $('a').each(function(i, elem) {       //special cheerio documentation that is getting links
        linksArray[i] = $(this).attr('href')     //cheerio documentation pushing all 'a' things with href
      })                                    //attributes into the previously declared links array

    console.log(linksArray)
    return linksArray

  })
  .then(function(results){
     fs.writeFile('./links.json', JSON.stringify(results), function(err, data) {
        if (err) console.log(err);
     })
  })
  .catch(function(err){
    console.log("Uh ooh...")
  })





//   // var jsonLinks = JSON.parse(linksArray)
//   // console.log(jsonLinks)
//
//
//   // module.exports = scrapes
