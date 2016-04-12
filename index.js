var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')
var $ = require('jquery')

//http://www.parliament.nz/en-nz/syndication?posting=/en-nz/pb/sc/make-submission/
//http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
//http://doc.scrapy.org/en/0.14/intro/overview.html
//http://www.parliament.nz/en-nz/pb/sc/make-submission?Criteria.PageNumber=1&Criteria.ViewDetails=1
//http://www.parliament.nz/en-nz/pb/sc/make-submission

$(document).ready(function() {


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

  var extractSubs = function() {
    var subLinks = []
    subLinks.push($("links:contains(make-submission)"))
  }

  extractSubs();

  });
