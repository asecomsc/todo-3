## API POST

1. node: body-parser
2. api post - code
3. postman send JSON array y compruebo recepcion en node
4. chrome send JSON array y compruebo recepcion en node 
son los mismos datos que el paso 3.
5. envio de una forma diferente el objeto JSON que el value es un array.
lo voy a necesitar para transformar <li> en Array y enviarlo JSON
****** antes *******
data = { miarr:["2","4","5"] };
JSON.stringify(data);
****** ahora *******
miarr = ["1","2","3"];
JSON.stringify({ elArr: miarr });
6. estuve batallando mucho con el INSERT INTO porque no me estaba
asignando bien la "primary key" hasta que encapsulé todo el codigo en
db.serialize

7. CUANDO QUISE COPIAR LA VERSION ANTERIOR (TERMINADA EN MI PC ) HACIA
RASPBERRY NO FUNCIONO, TUVE QUE HACER LOS SIGS AJUSTES:
  * no se puede usar en raspberry app.listen(3000)
  * no funciono jquery ajax get/post con localhost, porque la pc es ahora localhost y
  la app ( server.js/todo.js/default.html ) está en raspberry/10.0.0.56
    * edite el codigo para que no use localhost sino 10.0.0.56 en la llamada a la api
	y de esta manera funciono bien.
	* nokia ie mobile, api call debe hacerse:  http://10.0.0.56:3000/default.html ( batallé
	muchisimo porque yo ponia:  10.0.0.56:3000/default   )
