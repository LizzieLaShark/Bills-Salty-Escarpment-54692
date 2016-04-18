var scraper = require('./JS/scraper.js')
var links = require('./links.js')


function matchSubmission(value) {
  if (value.match(/make-submission/)) {
    return value
  }
}

var filter = links.filter(matchSubmission)

// console.log(filter)
