// Dependencies
// -----------------------------------------------------
var express         = require('express');
var port            = process.env.PORT || 8000;
var app             = express();

// Express Configuration


// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public




// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);

