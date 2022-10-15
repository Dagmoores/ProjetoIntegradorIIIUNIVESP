import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from "axios";

//import components
import Doadores from "../components/doadores"

function Profile() { 


    const location = useLocation();
    const navigate = useNavigate();
    const [ active, setActive ] = useState(false);
    const [ dados, setDados ] = useState("");

    


    //REDIRECT CASO NAO HAJA LOGIN
    function testarLogin() {
        // console.log(location.state)
        if(location.state === null) {
           return navigate("/")
        }
    }
    useEffect(() => testarLogin(),[])

    //BOTAO SAIR
    function handleSignOut(event) {
        location.state = {};
        navigate("/");
      };

    //REQUISICAO PARA O BACKEND DE DADOS DO USUARIO 
    useEffect(() => {
        Axios.get("http://localhost:8080/teste1").then(
            res => {
                setDados(res.data)
            }
        );
    }, []);

    //SETAR TABELA A SER RENDERIZADA
    function renderizar(param) {
        setActive(param)
    }




    

    return (

        <div className="Profile">

            <header className="headerLoginAndRegister">
            <h4 className="h4botaoHome">
                <a className="botaoHome" href="/"> Projeto Mais Alimentos </a> { /* botaoHome */ }
            </h4> { /* h4botaoHome */ }
            </header> { /* headerLoginAndRegister */ }


            { location.state && 
            <div className="imagemENomeGoogle">
                <img className="imagemGoogle" src= {location.state.picture}></img> { /* imagemGoogle */ }
                <h3 className="h3Google"> {location.state.name} </h3> { /* h3Google */ }
            </div> /* imagemENomeGoogle */ 
            }

            { /* section informacoes usuario e logOut */ }
            <section className="sectionInformacaoUsuarioELogOut">

                <div className="sair">
                { Object.keys(location).length != 0 && 
                    <button className="botaoSairGoogle" onClick = { e => handleSignOut(e)}> 
                    Sair 
                    </button> /* botaoSairGoogle */
                }
                </div> { /* sair */ }
            </section> { /* sectionInformacaoUsuarioELogOut */ }


            <main className="mainLoginAndRegister">
            <button onClick={() => renderizar(Doadores(dados))}
            className="botaoTableDoacaoDistribuicaoConsumo">Doar Alimentos</button>
            <button className="botaoTableDoacaoDistribuicaoConsumo">Ajudar na Distribuição</button>
            <button className="botaoTableDoacaoDistribuicaoConsumo">Receber Alimentos</button>

            <div className="renderElement"> {active}
            </div>  {/* renderElement */}

            </main>
        </div> /* Profile */


    );
};
  
  export default Profile;