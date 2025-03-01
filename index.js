const express = require('express');
const app = express();

/*
Verbos HTTP
GET
POST ->No se puede ejecutar desde un navegador simple, cuando queremos guardar algo
PATCH-> Verbos destinados a la actualizacion de datos, SOLO MODIFICA UNOS ELEMENTOS
PUT-> Modifica todos los elementos
DELETE->Eliminar un registro
*/

app.get("/",(req /*Peticion que noos hace el cliente*/,res/*Respuesta que nosotros daremos, objeto que tien funciones para contestar peticiones*/, next)=>{
    res.status(200);
    res.send("Bienvenido  :)");
});
app.listen(3000, () =>{
    console.log ("Server is running..");

});

