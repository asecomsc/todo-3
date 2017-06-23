var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sql.db');
var express = require('express');
var restapi = express();

var bodyParser = require("body-parser");
restapi.use(bodyParser.urlencoded({ extended: false }));
restapi.use(bodyParser.json());

restapi.use(express.static('public'));

restapi.get('/data', function(req, res){
    db.all("SELECT descr FROM tareas", function(err, rows){
        res.json(rows);
    });
});

restapi.post('/data', function(req, res){
	console.log(req.body);
	var elarr = req.body.elArr;
	for (var key in elarr) {
		console.log(elarr[key]);
	}
	res.end();
});

restapi.listen(3000);
console.log("Submit GET or POST to http://localhost:3000/data");

