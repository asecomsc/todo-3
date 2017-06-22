var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sql.db');

var express = require('express');
var restapi = express();
restapi.use(express.static('public'));

restapi.get('/data', function(req, res){
    db.all("SELECT descr FROM tareas", function(err, rows){
        res.json(rows);
		console.log(rows);
    });
});

restapi.listen(3000);
console.log("Submit GET or POST to http://localhost:3000/data");

