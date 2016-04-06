var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')


request.get('http://www.parliament.nz/en-nz/pb/sc/make-submission') //gets the website using superagent
  .then(function(results){
      var $ = cheerio.load(results.text)
      var links = []
      $('a').each(function(i, elem) {       //special cheerio documentation that is getting links
        links[i] = $(this).attr('href')     //cheerio documentation pushing all 'a' things with href
                                            //attributes into the previously declared links array
  })
    console.log(links)
  })
  .catch(function(err){
    console.log("Uh ooh...")
  })
