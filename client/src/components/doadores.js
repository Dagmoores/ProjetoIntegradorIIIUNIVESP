import { React, useState, useEffect } from "react";
import Axios from "axios";




function Doadores() {



    //Requisicoes para o servidor (puxando dados do bd)

    Axios.get("http://localhost:8080/teste1").then(
         res => console.log(res)
    );



    return (
       <div className="doadores">


     

       <section className="minhasDoacoes">
            <h3 className="h3MinhasDoacoes">Minhas Doações</h3>

            <table className="tabelaDoacoes">
                <thead>
                    <tr>
                        <th>Número da Doação</th>
                        <th>Status</th>
                        <th>Tipo de Alimento</th>
                        <th>Endereço para Coleta</th>
                        <th>Horários para retirada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>teste numero</td>
                        <td>teste status</td>
                        <td>teste tipo</td>
                        <td>teste endereço</td>
                        <td>teste horário</td>
                    </tr>
                    <tr>
                        <td>teste numero2</td>
                        <td>teste status2</td>
                        <td>teste tipo2</td>
                        <td>teste endereço2</td>
                        <td>teste horário2</td>
                    </tr>
                </tbody>
            </table>
        
        </section>{ /* minhasDoacoes */ }

        <section className="incluirDoacao">
            <h3 className="h3IncluirDoacao">Incluir Novas Doações</h3> { /* h3IncluirDoacao */} 

            <form className="formIncluirDoacao" name="formIncluirDoacao">
                <label> Tipo de Alimento    
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

                <label> O alimentos está em boas condições de consumo?
                    Sim <input type="checkbox" id="sim" value="sim"></input>
                    Não <input type="checkbox" id="nao" value="nao"></input>
                </label>

                <label className="validade" htmlFor="validade">Qual é a data de validade do alimento?
                    <input type="date" id="validade" lang="pt-BR"></input> 
                </label> { /* validade */}

                <label className="CEP"> CEP do endereço para coleta do alimento
                    <input type="number"></input> { /* CEP */}
                </label>

                <label className="endereco">Qual é o endreço para coleta do alimento? 
                    <input type="text"></input>
                </label> { /* endereço */}

                <input type="submit" value="Enviar"></input>
                
            </form>   
        
        </section> { /* incluirDoacao */}

       </div> /* doadores */ 
    );

};
export default Doadores;