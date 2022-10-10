const express = require("express");
const app = express();

//cors policy
var cors = require('cors');
app.use(cors()); // Use this after the variable declaration

//dotenv para variaveis de ambiente
require('dotenv').config()

//pg (postgres node)
const { Pool, Client } = require('pg');
const pool = new Pool();

//config dos dados para conexao
const client = new Client();
//solicitacao de conexao com o postgres
client.connect(error => {
    if (error) {console.log(error);}
    else {console.log('conectado');}
});


app.get("/teste1", ( req, res) => {

    client.query("SELECT * FROM doadores", (err, result) => {
        if (err) {
            console.log(err.stack);
        }
        else { 
            res.send(result.rows)
        }
    });
});










app.listen(8080, () => {
    console.log('listening')
});
