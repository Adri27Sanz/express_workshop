const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { pokemon} = require ('./pokedex.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*GET - Obtener recursos
POST - amacenar recursos
PATCH - modificar una parte del recurso
PUT -  Modificar un recurso 
DELETE - Borrar n recurso */

app.get("/",(req /*Peticion que noos hace el cliente*/,res/*Respuesta que nosotros daremos, objeto que tien funciones para contestar peticiones*/, next)=>{
    return res.status(200.).send("Bienvenido al Pokedex");
});

app.post("/pokemon",(req,res,next) =>{
    return res.status(200).send(req.body);
});

app.get('/:pokemon',(req,res,next) => {
    return res.status(200).send(pokemon);
});



app.get('/pokemon/:id([0-9]{1,3})',(req,res,next) => {
    const id = req.params.id - 1; 
    if (id >= 0 && id <= 150) {
    return res.status(200).send(pokemon[req.params.id - 1]) 
    }
    return  res.status(404).send("Pokemon no encontrado")
});


app.get('/pokemon/:name([A-aZ-z]+)',(req, res, net) =>{

    //Condicion ? valor si verdaadero : valor si falso
    const name = req.params.name;

    const pk = pokemon.filter((p) =>{
      return  (p.name.toUpperCase () == name.toUpperCase()) && p;
        
    });


    if (pk.length > 0) {
        return res.status(200).send(pk)
    }
    return res.status(404).send("Pokémon no encontrado");
});

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