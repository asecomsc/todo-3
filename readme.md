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