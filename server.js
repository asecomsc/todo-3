var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sql.db');
db.run("INSERT into tareas VALUES(null,'tercer tarea.. desde node')");
db.close();
