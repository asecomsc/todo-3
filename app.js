var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sql.db');

db.each("SELECT * FROM tareas", function(err, row) {
  console.log(row.id + ": " + row.descr);
});
  
db.close();
