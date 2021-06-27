var express = require('express');
var app = express();
var fs = require("fs");
var home = fs.readFileSync('final.html');

app.get('/', function(req,res) {
  res.end(home);
});

app.get('/getData', function (req, res) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'palash',
    password : 'Palash@123',
    database : 'eniac'
  });
 
connection.connect();
 
console.log(`SELECT * from viewRecharge where RechargeDate='${req.query.RequestId}'`);
connection.query(`SELECT * from viewRecharge where RechargeDate='${req.query.RequestId}'`, function (error, results, fields) {
  if (error) throw error;
  
  // console.log('The solution is: ', results[0].solution);
  res.send(results);
});

});

var server = app.listen(8000, function () {
    console.log('Server is running..');
});


