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
    // console.log(req.query)

    const text = "INSERT INTO doadores (tipodealimento, prazodevalidade, endereco, cep, numero, horario, usuario) \
    VALUES ($1, $2, $3, $4, $5, $6, 'danielTESTE')";
    const values = [tipodealimento, validade, endereco, cep, numero, horario];

    //TABELA DOADORES
    client.query(text, values, (err, res) => {
        if(err) {
            console.log(err.stack)
        } else {
            // console.log(res)
            atualizarTabelaAlimentos()
        }
    });
});


//EXCLUIR DADOS TABELA DOADORES
app.delete("/doacao3/:id", (req, res) => {
    const text = "DELETE FROM doadores WHERE id=$1"
    const values = [req.params.id];

    client.query(text, values, (err, res) => {
        if(err) {
            console.log(err.stack)
        } else {
            console.log(res)
        }
    })
});

//ATUALIZAR TABELA ALIMENTOS A PARTIR DE TABELA DOACAO
const atualizarTabelaAlimentos = () => {

    let id1;
    let id2;

    //CAPTURANDO ID TABELA DOACAO
    const text1 = "SELECT id FROM doadores ORDER BY id DESC LIMIT 1";
        
    function getId1() {
        const promise = new Promise((resolve, reject) => {
            client.query(text1, [], (err, result) => {
                if(err) {
                    console.log(err.stack);
                } else {
                    resolve(result.rows[0].id);
                }
            });
        });
        return promise;
    };

    //CAPTURANDO ID TABELA ALIMENTOS
    const text2 = "SELECT idAlimento FROM alimentos ORDER BY idAlimento DESC LIMIT 1";

    function getId2() {
        const promise = new Promise((resolve, reject) => {
            client.query(text2, [], (err, result) => {
                if(err) {
                    console.log(err.stack);
                } else {
                        if(result.rows[0].idalimento == undefined) {
                            resolve(null)
                        } else {
                            resolve(result.rows[0].idalimento); 
                        }
                        
                }
            }) 
        })
        return promise;
    };


    async function compararDados() {
        const id1 = await getId1()
        const id2 = await getId2()
        console.log(id1, id2)

        if(id1 != id2) {
            client.query("INSERT INTO alimentos (idalimento, disponivel) VALUES ($1, $2)", 
            [id1, true], (err, res) => {
                if(err) {
                    console.log(err.stack);
                }
            });
        }

    };
    compararDados()
};

//REQ DE DADOS DE ALIMENTOS
app.get("/alimentos1", (req, res) => {

    const text = "SELECT * FROM alimentos"
    client.query(text, [], (err, result) => {
        if(err) {
            console.log(err.stack);
        }else {
            // console.log(result)
            res.send(result.rows)
        }
    })
});




app.listen(8080, () => {
    console.log('listening')
});
