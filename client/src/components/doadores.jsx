import Axios from "axios";


function Doadores(dados, register, setValue, handleSubmit) {
    

    function checarCep(e) {
        let CEP = e.target.value.replace(/\D/g, '');
        Axios.get(`https://viacep.com.br/ws/${CEP}/json/`).catch(
            error => {
                if(error) {
                    console.log(error.message)
                }
            }).then(
            res => setValue("example", res.data.logradouro)
        )
    };          

    const onSubmit = data => console.log(data)


    return (
       <div className="doadores">
       <section className="minhasDoacoes">
            <h3 className="h3MinhasDoacoes">Minhas Doações</h3>

            <table className="tabelaDoacoes">
                <thead>
                    <tr>
                        <th>Tipo de Alimento</th>
                        <th>Prazo de Validade</th>
                        <th>Endereço para Coleta</th>
                        <th>Horários para retirada</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {
                    dados.map((item, i) => 
                        
                        <tr key={i}>
                            <td>{item.tipodealimento}</td>
                            <td>{item.validade}</td>
                            <td>{item.endereco}</td>
                            <td>{item.horarioParaRetirada}</td>
                        </tr>
                )}
                </tbody>
            </table>
        </section>{ /* minhasDoacoes */ }




        <section className="incluirDoacao">
            <h3 className="h3IncluirDoacao">Incluir Novas Doações</h3> { /* h3IncluirDoacao */} 

            <form className="formIncluirDoacao" name="formIncluirDoacao" onSubmit={handleSubmit(onSubmit)}>
                <label> Tipo de Alimento 
                    <br></br>  
                    <select>
                        <option value="verdurasOuLeguminosas"> Verduras ou Leguminosas</option>
                        <option value="frutas"> Frutas </option>
                        <option value="carnes"> Carnes </option>
                        <option value="ovosOuLeite"> Ovos ou Leite</option>
                        <option value="oleos"> Óleos </option>
                        <option value="doces"> Doces </option>
                        <option value="Pratos Prontos"> Pratos Prontos </option>
                    </select>
                </label> 

                <label className="doacaoRadio"> O alimentos está em boas condições de consumo?
                <br></br>
                    Sim <input name="condicoes" type="radio" value="sim" className="doacaoRadioSim"></input>
                    Não <input name="condicoes" type="radio" value="nao" className="doacaoRadioNao"></input>
                </label>

                <label className="validade" htmlFor="validade">Qual é a data de validade do alimento?
                    <input type="date" id="validade" lang="pt-BR"></input> 
                </label> 

                <label className="CEP"> CEP do endereço para coleta do alimento
                    <input type="number" {...register("CEP", {required:true, max:999999999})} onBlur={checarCep}/> 
                </label>

                <label className="endereco">Qual é o endreço para coleta do alimento? 
                    <input type="text" {...register("example")}/>  
                </label> 

                <label className="numero"> Número do logradouro
                    <input type="number" ></input> 
                </label>

                <input type="submit" value="Enviar" ></input>
                
            </form>   
        
        </section> { /* incluirDoacao */}

       </div> /* doadores */ 
    );

};
export default Doadores;