-write a scraper script that scrapes
    -call it scraper.js and run it from command line

-store links in a json

-write some code that reads the json and renders that data into a webpage

-write some code so that the user can click on a submission and is taken to a new page with:
-1-2 paragraphs about the submission
-A link to make a submission
-Link to govt press release

-note, currently links are relative, not absolute.

-ask about:

 -filtering the make-submission links?


-json beautifier => pretty json

http://www.parliament.nz/en-nz/syndication?posting=/en-nz/pb/sc/make-submission/
http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
http://doc.scrapy.org/en/0.14/intro/overview.html
http://www.parliament.nz/en-nz/pb/sc/make-submission?Criteria.PageNumber=1&Criteria.ViewDetails=1
http://www.parliament.nz/en-nz/pb/sc/make-submission

Make the .json file store data as an array of objects.

server side rendering to render the subs list. Instead of using id, can just use index in the array. Can use database if have time.

when they click on the submission they want to view, create a new route, which corresponds with
1. view all submissions
  in each(hbs) docs, look for position of item.

2. view submission form for id
  get id from params (:id), render it on template using hidden field.

3. post submission
  id will get saved ALONG WITH other data.

  video: api folder containing and index and a 'controller to define each route'

Next Steps:
  -get the paragraphs to match the urls.
  -render list view onto page prettily using hbs.
    -use params id's
  -link titles, paragraphs and url links so you can click a title, and get taken to a new page
  -render paragraphs to correct page corresponding with index in array???







//"dev": "budo s.js:bundle.js --live"
