var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sql.db');
var express = require('express');
var restapi = express();

var bodyParser = require("body-parser");
restapi.use(bodyParser.urlencoded({ extended: false }));
restapi.use(bodyParser.json());

restapi.set('port', (process.env.PORT || 3000));
restapi.use(express.static('public'));

restapi.get('/data', function(req, res){
    db.all("SELECT * FROM tareas ORDER BY id", function(err, rows){
		res.send(rows);
    });
});

restapi.post('/data', function(req, res){
db.serialize(function() {	// batallé mucho porque no estaba usando esta instruccion
	db.run("DELETE FROM tareas");
	var elarr = req.body.elArr;
	for (var key in elarr) {
		sql = "INSERT INTO tareas (descr) VALUES('" + elarr[key] + "')";
		db.run(sql);
	}
});	
	res.end();
});

restapi.listen(restapi.get('port'), function() {
        console.log('Web app running on port', restapi.get('port'));
});

console.log("Submit GET or POST to http://192.168.0.2:3000/default.html");

