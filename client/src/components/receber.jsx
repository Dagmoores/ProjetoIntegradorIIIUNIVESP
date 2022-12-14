import Axios from "axios";

//CSS
import "../style/receber.css";

function Receber(dadosDoacao, dadosAlimentos) {

    //RENDERIZAR ELEMENTOS LI
    const renderizarLi = (dadosDoacao, dadosAlimentos) => {


        const arrayRenderizar = []
        let nomeDoAlimento;
        let prazoDeValidade;
        let endereco;
        let numero;
        let id;
        let disponivel;

        //JUNCAO DOS DADOS DE DUAS TABELAS EM UM MESMO ARRAY PARA A RENDERIZACAO
        dadosDoacao.forEach((itemDoacao, i) => {


            nomeDoAlimento = itemDoacao.tipodealimento;
            prazoDeValidade = itemDoacao.prazodevalidade;
            endereco = itemDoacao.endereco;
            numero = itemDoacao.numero;
            id = itemDoacao.id;

        arrayRenderizar.push({
            nomeDoAlimento, prazoDeValidade, endereco, numero, disponivel, id
        });
    });

    dadosAlimentos.forEach((itemAlimento, i) => {
        arrayRenderizar[i].disponivel = itemAlimento.disponivel        
    });
    

    const setarIndisponivel = (id) => {
        console.log(id)
        Axios.get(`https://maisalimentos-server.herokuapp.com/setarIndisponivel?ID=${id}`).then(
            window.location.reload(true)
        );
    };

        return (
            arrayRenderizar.map((item, i) => {
                if(item.disponivel === true) {
                    return (
                        <li key={i} >
                            <button id={item.id} className="ButtonAceitarDoacao" 
                            onClick={(event) => setarIndisponivel(event.target.id)}>
                            </button>
                            {item.nomeDoAlimento}, {" "}
                            {item.prazoDeValidade}, {" "}
                            {item.endereco}, {" "}
                            {item.numero} 
                    </li>
                    );
                }
            })
        );
         
    };
    

    return (
        <div className="Receber">
            <section className="doacoesDisponiveis">
                <h2 className="h2doacoesDisponiveis">Doa????es Dispon??veis</h2>
                <h4 className="h4doacoesDisponiveis">Caso tenha coletado alguma doa????o, 
                lembre-se de marca-la como conclu??da!</h4>
                <h4 className="h4avisoFormatacao">(Tipo de Alimento, Data de Validade, Endere??o para Coleta)</h4>

                <ul className="ulDoacoesDisponiveis">
                {renderizarLi(dadosDoacao, dadosAlimentos)}

                </ul>
            </section>{ /* minhasDoacoes */ }
        </div>
    );
};

export default Receber;