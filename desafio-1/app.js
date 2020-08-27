var express = require ('express'); 
var app = express ();
app.get ('/', function (req, res) { 
  res.send ('Eu sou Full Cycle'); 
});
app.listen (3000, function () { 
//   console.log ('Eu sou Full Cycle'); 
});