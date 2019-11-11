const express = require('express');
const path = require('path');
const app = express();



// Serve static files....
app.use(express.static(__dirname + '/dist/Alpaca-Trading-Analytics-Dashboard'));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Alpaca-Trading-Analytics-Dashboard/index.html'));
});

// default Heroku PORT
// app.listen(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
