var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')


var env = process.env.NODE_ENV || 'development' // string
var knexConfig = require('./knexfile'); //big object
var knexDbConfig = knexConfig[env] //small object
var knexGenerator = require('knex') //function
global.knex = knexGenerator(knexDbConfig)
console.log('this is process.env.NODE_ENV', process.env.NODE_ENV)


var scraper = function(){
  request.get('http://www.parliament.nz/en-nz/pb/sc/make-submission')  //gets the website using superagent
  .then(function(results){
      var $ = cheerio.load(results.text)
      var linksArray = []
      //cheerio getting links
      $('a').each(function(i, elem) {
        linksArray[i] = {
         title: $(this).text(),
         url: $(this).attr('href')
        }
      })
    return linksArray
  })
  .then(function(results){
      var sliced = results.slice(35, -9)
      console.log(sliced)

      knex('submissions').del().then(function(){
          console.log("ran the deletions function")
      })
      knex('submission_data').insert(sliced).then(function(){
        console.log("done")
      })
  })
  .catch(function(err){
    console.log(err)
  })
}


scraper();

module.exports = scraper
