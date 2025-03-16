const bodyParser = require('body-parser');
const parser = require('morgan');
const express = require('express');
const app = express();
const pokemon =require('./routes/pokemon');
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",(req /*Peticion que noos hace el cliente*/,res/*Respuesta que nosotros daremos, objeto que tien funciones para contestar peticiones*/, next)=>{
    return res.status(200.).send("Bienvenido al Pokedex");
});

app.use("/pokemon",pokemon);

app.listen(process.env.PORT || 3000, () =>{
    console.log ("Server is running....");

});
/*
Verbos HTTP
GET
POST ->No se puede ejecutar desde un navegador simple, cuando queremos guardar algo
PATCH-> Verbos destinados a la actualizacion de datos, SOLO MODIFICA UNOS ELEMENTOS
PUT-> Modifica todos los elementos
DELETE->Eliminar un registro
*/

/*GET - Obtener recursos
POST - amacenar recursos
PATCH - modificar una parte del recurso
PUT -  Modificar un recurso 
DELETE - Borrar n recurso */