'use strict';
var express = require('express');
var googl = require('goo.gl');
var app = express();
var testURL = "http://google.com";
    
// Set a developer key (_required by Google_; see http://goo.gl/4DvFk for more info.) 
googl.setKey('avsufviKUVBILUBiuvsiuILUSVBIusbvuvLISUVBFi');
 
// Get currently set developer key 
googl.getKey();
 

 
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/:string', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

// Shorten a long url and output the result 
googl.shorten(testURL)
    .then(function (shortUrl) {
      res.send(JSON.stringify({shortUrl}));
    })
    .catch(function (err) {
        res.send(err.message);
    });

});

app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening on port ' + process.env.PORT + '!');
})