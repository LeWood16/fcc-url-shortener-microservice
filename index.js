'use strict';
var express = require('express');
var googl = require('goo.gl');
var flash = require('express-flash');
var app = express();
var testURL = "http://google.com";
    
// Set a developer key (_required by Google_; see http://goo.gl/4DvFk for more info.) 
googl.setKey('AIzaSyABWIT81tLxcPPvoyZO0N-oMWfXnH53ISY');
 
// Get currently set developer key 
googl.getKey();
 

 
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/new', function(req, res) {
  res.send("new route success");


});

app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening on port ' + process.env.PORT + '!');
});



  /*
  res.setHeader('Content-Type', 'application/json');
  var t = 'https://www.npmjs.com/package/valid-url';
// Shorten a long url and output the result 
googl.shorten(t)
    .then(function (shortUrl) {
      res.send(JSON.stringify({shortUrl}));
    })
    .catch(function (err) {
        res.send(err.message);
    });
    */