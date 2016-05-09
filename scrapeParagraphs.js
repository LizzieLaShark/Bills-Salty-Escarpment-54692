var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs')
var cheerio = require('cheerio')

// $(document).ready(function() {


var scrapeParagraphs = function() {
  request.get('http://www.parliament.nz/en-nz/pb/sc/make-submission/51SCMA_SCF_00DBSCH_INQ_68557_1/inquiry-into-whanau-access-to-and-management-of-tupapaku')  //gets the website using superagent
  .then(function(results){
    console.log("getting to line 12 of function")
      var $ = cheerio.load(results.text)
      var subInfo = []
      $('p').each(function(i, elem) {
        subInfo[i] = {
          subInfo: $(this).text(),
        }
      })
      console.log(subInfo)
      return subInfo
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


scrapeParagraphs();

module.exports = scrapeParagraphs

//
// $('.section').attr('p')
// console.log ($(this).text())
// paragraphs[i] = {
//  info: $(this).text(),
// //  url: $(this).attr('href')
