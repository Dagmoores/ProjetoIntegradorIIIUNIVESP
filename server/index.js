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


//REQ DE DADOS PARA PREENCHER TABELA DOACAO
app.get("/doacao1", ( req, res) => {

    client.query("SELECT * FROM doadores", (err, result) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            res.send(result.rows)
        }
    });
});

//RECEBIMENTO DE DADOS DO FORM DOACAO
app.get("/doacao2", (req, res) => {

    const tipodealimento = req.query.tipodealimento;
    const validade = req.query.validade;
    const cep = req.query.cep;
    const endereco = req.query.endereco;
    const numero = req.query.numero;
    const horario = req.query.horario;
    console.log(req.query)

    const text = "INSERT INTO doadores (tipodealimento, prazodevalidade, endereco, cep, numero, horario, usuario) VALUES ($1, $2, $3, $4, $5, $6, 'danielTESTE')";
    const values = [tipodealimento, validade, endereco, cep, numero, horario];

    client.query(text, values, (err, res) => {
        if(err) {
            console.log(err.stack)
        } else {
            console.log(res)
        }
    }
         
    )
});

//EXCLUIR DADOS TABELA DOADORES
app.delete("/doacao3/:id", (req, res) => {
    const text = "DELETE FROM doadores WHERE id=$1"
    const values = [req.params.id]

    client.query(text, values, (err, res) => {
        if(err) {
            console.log(err.stack)
        } else {
            console.log(res)
        }
    })
});




app.listen(8080, () => {
    console.log('listening')
});
