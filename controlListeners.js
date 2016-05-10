var $ = require('jquery')
var view = require('./views/linkParagraphs.hbs')
var scrapeParagraphs = require('./scrapeParagraphs')
var request = require('superagent')

function subInfoClick(listen, linkToScrape){
  console.log('listening to controller')

  console.log(linkToScrape)
  request.post('/scrape')
    .send({linkToScrape: linkToScrape})
    .end(function(err, res){
       console.log('this should be html rendered', view({paragraphs: res.body}))
      $('.listHeadings').html(view({paragraphs: res.body}))
    })
}
module.exports = {
  subInfoClick: subInfoClick
}

//the above function links directly to both the listeners.js listener and
//the '/scrape' route in the app.js folder. It does a post request to the /scrape route
//sends the linkToScrape. The linkToScrape gets sent to the route function
//where it is passed into scrapeParagraphs, which then scrapes the data.
