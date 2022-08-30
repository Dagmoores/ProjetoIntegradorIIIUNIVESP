import React from "react";
import "../style/mainPage.css"

//import de assets
import coracao from "../assets/images/coracao.png"

function MainPage() {
    return (
      <div className="mainPage">

        <header>
          <a className="cadastroLogin" href="#">Cadastro / Login</a>
        </header>{/* CadastroLogin */}
        
        <main>

          <img className="imgCoracao" src={ coracao }></img> { /* imgCoracao */ }
          <h1>Projeto Mais Alimentos</h1>

        </main>{ /* Main */}

      </div>
    );
  }
  
  export default MainPage;