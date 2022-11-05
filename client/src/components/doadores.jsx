import Axios from "axios";
import buttonX from "../assets/images/buttonX.png"


function Doadores(dadosDoacaoUsuario, register, setValue, handleSubmit, usuario) {
    
    //API CHECAR CPF
    function checarCep(e) {
        let CEP = e.target.value.replace(/\D/g, '');
        Axios.get(`https://viacep.com.br/ws/${CEP}/json/`).catch(
            error => {
                if(error) {
                    console.log(error.message)
                }
            }).then(
            res => setValue("endereco", res.data.logradouro)
        );
    };          

    //FORM SUBMIT
    const onSubmit = data => {
        data.usuario = usuario
        enviarReqDoacao(data)
        window.location.reload(true)
    };

    //ENVIAR DADOS FORM AO BACKEND
    const enviarReqDoacao = (data) => {
        console.log(data)
        Axios.get("http://localhost:8080/doacao2", {
            params: {
                    tipodealimento: data.tipoDeAlimento,
                    validade: data.validade,
                    cep: data.CEP,
                    endereco: data.endereco,
                    numero: data.numero, 
                    horario: data.horario,
                    usuario: data.usuario, 
            }
        }); 
    };  

    //EXCLUIR DOACAO
    function excluirDoacao(id) {
        Axios.delete(
            `https://maisalimentos-server.herokuapp.com/doacao3/${id}`
        ).then(
            window.location.reload(true))
    };

    return (
       <div className="doadores">
       <section className="minhasDoacoes">
            <h3 className="h3MinhasDoacoes">Minhas Doações</h3>

            <table className="tabelaDoacoes">
                <thead className="tabelaDoacoesThead">
                    <tr className="tabelaDoacoesTr">
                        <th className="tabelaDoacoesTh">Tipo de Alimento</th>
                        <th className="tabelaDoacoesTh">Prazo de Validade</th>
                        <th className="tabelaDoacoesTh">Endereço para Coleta</th>
                        <th className="tabelaDoacoesTh">Horários para retirada</th>
                        <th className="tabelaDoacoesThNula"></th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {
                    dadosDoacaoUsuario.map((item, i) => 
                        <tr key={i}>
                        <td>{item.tipodealimento}</td>
                        <td>{item.prazodevalidade}</td>
                        <td>{`${item.endereco}, ${item.numero}`}</td>
                        <td>{item.horario}</td>
                        <td className= "tabelaDoacoesTdNula">
                            <input className="tabelaDoacoesInputButtonX" id={item.id}
                            onClick={(event) => excluirDoacao(event.target.id)}
                            type="image" alt="Excluir Doação" title="Excluir Doação" src={buttonX} 
                            />
                        </td>
                    </tr>
                    
                )}
                </tbody>
            </table>
        </section>{ /* minhasDoacoes */ }




        <section className="incluirDoacao">
            <h3 className="h3IncluirDoacao">Incluir Novas Doações</h3> { /* h3IncluirDoacao */} 

            <form className="formIncluirDoacao" name="formIncluirDoacao" id="formDoacao"
            onSubmit={handleSubmit(onSubmit)}>
                <label> Tipo de Alimento 
                    <br></br>  
                    <select {...register("tipoDeAlimento")}>
                        <option value="Verduras ou Leguminosas"> Verduras ou Leguminosas</option>
                        <option value="Frutas"> Frutas </option>
                        <option value="Carnes"> Carnes </option>
                        <option value="Ovos ou Leite"> Ovos ou Leite</option>
                        <option value="Óleos"> Óleos </option>
                        <option value="Doces"> Doces </option>
                        <option value="Pratos Prontos"> Pratos Prontos </option>
                    </select>
                </label> 

                <label className="doacaoRadio"> O alimentos está em boas condições de consumo?
                <br></br>
                    Sim <input name="condicoes" type="radio" value="sim" className="doacaoRadioSim"></input>
                    Não <input name="condicoes" type="radio" value="nao" className="doacaoRadioNao"></input>
                </label>

                <label className="validade" htmlFor="validade">Qual é a data de validade do alimento?
                    <input type="date" id="validade" name="validade" lang="pt-BR"
                    {...register("validade", {required: true})}></input> 
                </label> 

                <label className="CEP"> CEP do endereço para coleta do alimento
                    <input type="number" 
                    {...register("CEP", {required:true, max:999999999})} onBlur={checarCep}/> 
                </label>

                <label className="endereco">Qual é o endreço para coleta do alimento? 
                    <input type="text" 
                    {...register("endereco")}/>  
                </label> 

                <label className="numero"> Número do logradouro
                    <input type="number" 
                    {...register("numero")}></input> 
                </label>

                <label className="horario"> Qual é o melhor horário para a retirada do alimento?
                    <input type="time" 
                    {...register("horario")}></input> 
                </label>

                <input type="submit" value="Enviar" ></input>
                
            </form>   
        
        </section> { /* incluirDoacao */}

       </div> /* doadores */ 
    );

};
export default Doadores;