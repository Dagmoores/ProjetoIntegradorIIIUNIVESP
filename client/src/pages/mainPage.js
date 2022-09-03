import React from "react";
import "../style/mainPage.css"

//import de imagens
import coracao from "../assets/images/coracao.png"
import doacao from "../assets/images/doacao.png"
import distribuicao from "../assets/images/caminhao.png"
import consumo from "../assets/images/consumo.png"

function MainPage() {
    return (
      <div className="mainPage">

        <header>
          <a className="cadastroLogin" href="#">Cadastro / Login</a>
        </header>{/* CadastroLogin */}
        
        <main>

          <img className="imgCoracao" 
            src={ coracao }
            alt="erro ao carregar imagem" 
            aria-label="A imagem de um coracao formado por um conjunto de legumes e verduras"
          />{ /* imgCoracao */ }

          <div className="tituloESubTitulo">
            <h1 className="titulo">Projeto Mais Alimentos</h1> { /* titulo */}
            <h4 className="subTitulo">A Plataforma de Doação de Alimentos</h4> { /* subTitulo */}
          </div> { /* tituloESubTitulo */}

        </main>{ /* Main */}

      <section className="apresentacao">

        <h2 className="tituloApresentacao"> Conheça Nosso Projeto</h2> { /* tituloApresentacao */ }
        <div className="container"></div> { /* container */ }

        <p className="textoApresentacao">
           Lorem ipsum et justo felis quis sed taciti suspendisse, nunc pellentesque eget facilisis 
           gravida scelerisque vestibulum turpis, eleifend rutrum laoreet tempus ornare pretium dui. 
           vitae himenaeos suspendisse bibendum phasellus nostra libero aliquam luctus vulputate erat, a 
           mi cubilia augue dui urna pretium placerat donec senectus, porta nulla felis eleifend tempor 
           phasellus etiam lacus hendrerit. dictum praesent tellus etiam curabitur hac semper mauris leo 
           suscipit, aliquam mi vehicula tincidunt sagittis praesent eleifend pellentesque, elementum 
           cursus conubia donec dictumst fringilla cras molestie. 
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

        <img className="imagemDistribuicao"
          src={ distribuicao }
          alt="erro ao carregar imagem" 
          aria-label=""   
        /> { /* imagemDistribuicao */ }


        <img className="imagemConsumo"
          src={ consumo }
          alt="erro ao carregar imagem" 
          aria-label=""
        /> { /* imagemConsumo */ }

        <h5 className="legendaDoacao">Doação</h5> { /* legendaDoacao */}
        <h5 className="legendaDistribuicao">Distribuição</h5> { /* legendaDistribuicao */}
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