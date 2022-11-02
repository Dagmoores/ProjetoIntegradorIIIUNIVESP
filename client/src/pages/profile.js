import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from "axios";

//import components
import Doadores from "../components/doadores"
import Receber from '../components/receber';

function Profile() { 


    const location = useLocation();
    const navigate = useNavigate();
    const [ active, setActive ] = useState(false);
    const [ dadosDoacao, setDadosDoacao ] = useState("");
    const [ dadosAlimentos, setDadosAlimentos ] = useState("");
    const { register, handleSubmit, setValue } = useForm();
    const [ disponibilidade, setDisponibilidade ] = useState("");



    //REDIRECT CASO NAO HAJA LOGIN
    const testarLogin = () => {
        if(location.state === null) {
           return navigate("/")
        }
    }
    
    useEffect(() => testarLogin())

    //BOTAO SAIR
    function handleSignOut(event) {
        location.state = {};
        navigate("/");
      };


    //FORMATAR DADOS ANTES DE ENVIAR AO COMPONENTE
    const formatarDados = (dados) => {
        for (let i = 0 ; i < dados.length; i++) {

            //HORARIO
            const strHorario = dados[i].horario;
            dados[i].horario = strHorario.split(":00")[0];

            //VALIDADE
            const strValidade = dados[i].prazodevalidade;
            dados[i].prazodevalidade = strValidade.split("T")[0];
        };
    };

    //REQUISICAO PARA O BACKEND DE DADOS DE DOACAO DO USUARIO 
    useEffect(() => {
        Axios.get("https://maisalimentos-server.herokuapp.com/doacao1").then(
            res => {
                formatarDados(res.data)
                setDadosDoacao(res.data)
            }
        );
    }, [active]);

    //REQUISICAO PARA O BACKEND DE DADOS DE ALIMENTOS
    useEffect(() => {
        Axios.get("https://maisalimentos-server.herokuapp.com/alimentos1").then(
            res => setDadosAlimentos(res.data)
        );
    }, [active]);
    

    

    return (

        <div className="Profile">

            <header className="headerLoginAndRegister">
            <h4 className="h4botaoHome">
                <a className="botaoHome" href="/"> Projeto Mais Alimentos </a> { /* botaoHome */ }
            </h4> { /* h4botaoHome */ }
            </header> { /* headerLoginAndRegister */ }


            { location.state && 
            <div className="imagemENomeGoogle">
                <img className="imagemGoogle" alt="Imagem do Usuário"
                src= {location.state.picture}></img> { /* imagemGoogle */ }
                <h3 className="h3Google"> {location.state.name} </h3> { /* h3Google */ }
            </div> /* imagemENomeGoogle */ 
            }

            { /* section informacoes usuario e logOut */ }
            <section className="sectionInformacaoUsuarioELogOut">

                <div className="sair">
                { Object.keys(location).length !== 0 && 
                    <button className="botaoSairGoogle" onClick = { e => handleSignOut(e)}> 
                    Sair 
                    </button> /* botaoSairGoogle */
                }
                </div> { /* sair */ }
            </section> { /* sectionInformacaoUsuarioELogOut */ }


            <main className="mainLoginAndRegister">
            <button onClick={() => setActive(Doadores(dadosDoacao, register, 
            setValue, handleSubmit))}
            className="botaoTableDoacaoDistribuicaoConsumo">Doar Alimentos</button>

            <button onClick={() => setActive(Receber(dadosDoacao, dadosAlimentos, 
            disponibilidade, setDisponibilidade))}
            className="botaoTableDoacaoDistribuicaoConsumo">Receber Alimentos</button>

            <div className="renderElement"> {active}
            </div>  {/* renderElement */}

            </main>
        </div> /* Profile */


    );
};
  
  export default Profile;