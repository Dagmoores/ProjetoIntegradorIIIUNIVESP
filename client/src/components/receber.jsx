//CSS
import "../style/receber.css";

//IMAGE 
import autoColetar from "../assets/images/auto-coletar.png";



function Receber(dadosDoacao, dadosAlimentos) {



    //RENDERIZAR ELEMENTOS LI
    const renderizarLi = (dadosDoacao, dadosAlimentos) => {
      
        const arrayRenderizar = []

        //JUNCAO DOS DADOS DE DUAS TABELAS EM UM MESMO ARRAY PARA A RENDERIZACAO
        dadosDoacao.map((itemDoacao, i) => {
            let nomeDoAlimento = itemDoacao.tipodealimento;
            let prazoDeValidade = itemDoacao.prazodevalidade;
            let endereco = itemDoacao.endereco;
            let numero = itemDoacao.numero;
            let disponivel;

        dadosAlimentos.map((itemAlimentos, i) => {
            disponivel = itemAlimentos.disponivel;
        });
            arrayRenderizar.push({
                nomeDoAlimento, prazoDeValidade, endereco, numero, disponivel
            });
        });

        return (
            arrayRenderizar.map((item, i) => {
                if(item.disponivel === true) {
                    return (
                        <li key={i}>
                            <button className="aceitarDoacao">
                                <img className="autoColetar" src={autoColetar}></img>
                            </button>
                            {item.nomeDoAlimento}, {" "}
                            {item.prazoDeValidade}, {" "}
                            {item.endereco}, {" "}
                            {item.numero} 
                    </li>
                    );
                };
            })
        );
         
    };
    

    return (
        <div className="Receber">
            <section className="doacoesDisponiveis">
                <h2 className="h2doacoesDisponiveis">Doações Disponíveis</h2>
                <h4 className="h4doacoesDisponiveis">Caso tenha coletado alguma doação, 
                lembre-se de marca-la como concluída!</h4>
                <h4 className="h4avisoFormatacao">(Tipo de Alimento, Data de Validade, Endereço para Coleta)</h4>

                <ul className="ulDoacoesDisponiveis">
                {renderizarLi(dadosDoacao, dadosAlimentos)}

                </ul>
            </section>{ /* minhasDoacoes */ }
        </div>
    );
};

export default Receber;