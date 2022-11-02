import React from "react";
import "../style/mainPage.css"

//import de imagens
import coracao from "../assets/images/coracao.png"
import doacao from "../assets/images/doacao.png"
import consumo from "../assets/images/consumo.jpg"

function MainPage() {
    return (
      <div className="mainPage">

        <header>
          <a className="cadastroLogin" href="/cadastroELogin">Cadastro / Login</a>
        </header>{/* CadastroLogin */}
        
        <main>

          <img className="imgCoracao" 
            src={ coracao }
            alt="erro ao carregar imagem" 
            aria-label="A imagem de um coracao formado por um conjunto de legumes e verduras"
          />{ /* imgCoracao */ }

          <div className="tituloESubTitulo">
            <h1 className="titulo">Mais Alimentos</h1> { /* titulo */}
            <h4 className="subTitulo">A Plataforma de Doação de Alimentos</h4> { /* subTitulo */}
          </div> { /* tituloESubTitulo */}

        </main>{ /* Main */}

      <section className="apresentacao">

        <h2 className="tituloApresentacao"> Conheça Nosso Projeto</h2> { /* tituloApresentacao */ }
        <div className="container"></div> { /* container */ }

        <p className="textoApresentacao">
        O website tem como objetivo atender a grade curricular dos cursos do Eixo Computação da
        Universidade Virtual de São Paulo - UNIVESP e disponibilizar um website para que empresas
        que comercializam alimentos perecíveis (frutas, verduras e legumes) para entidades 
        filantrópicas, etc. do município de Bebedouro-SP.
        Os alimentos perecíveis comercializados que não apresentarem um aspecto atraente para o 
        consumidor, mais em condições de consumo e que provavelmente seriam descartados, com o 
        website podem ser doados.

        </p> { /* textoApresentacao */ }
      </section>{ /* apresentacao */ }
      

      <section className="textoAcimaDasIlustracoes">

        <h2 className="tituloIlustracoes"> Uma plataforma para unir esforços!</h2> { /* tituloIlustracoes */ }
        <div className="container2"></div> { /* container2 */ }


      </section> { /* textoAcimaDasIlustracoes */ }


      <section className="ilustracoes">
        <img className="imagemDoacao"
          src={ doacao }
          alt="erro ao carregar imagem" 
          aria-label=""
        /> { /* imagemDoacao */ }

        <img className="imagemConsumo"
          src={ consumo }
          alt="erro ao carregar imagem" 
          aria-label=""
        /> { /* imagemConsumo */ }

        <h5 className="legendaDoacao">Doação</h5> { /* legendaDoacao */}
        <h5 className="legendaConsumo">Consumo</h5> { /*legendaConsumo */}

      </section> { /* ilustracoes */ }


      <section className="facaParte">

        <h1 className="tituloFacaParte"> Faça Parte deste Projeto!</h1> { /* tituloFacaParte */ }

        <p className="textoFacaParte">
        Lorem ipsum et justo felis quis sed taciti suspendisse, nunc pellentesque eget facilisis 
        gravida scelerisque vestibulum turpis, eleifend rutrum laoreet tempus ornare pretium dui. 
        vitae himenaeos suspendisse bibendum phasellus nostra libero aliquam luctus vulputate erat, 
        a mi cubilia augue dui urna pretium placerat donec 
        </p> { /* textoFacaParte */ }

      </section>{ /* facaParte */ }



      </div>
    );
  }
  
  export default MainPage;