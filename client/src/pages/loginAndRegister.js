import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"

//import css file
import "../style/loginAndRegister.css"

//import env e instancia da chave google secreta
const SECRET_KEY = process.env.REACT_APP_CHAVE_GOOGLE

function LoginAndRegister() { 

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("login").hidden = true;
  }; 

  function handleSignOut(event) {
    setUser({});
    document.getElementById("login").hidden = false;

  };

  useEffect(() => {

    /* global google */
    google.accounts.id.initialize({
      client_id: SECRET_KEY,
      callback: handleCallbackResponse
    });

    /* global google */
    google.accounts.id.renderButton(
      document.getElementById("login"),
      {theme: "outline", size: "large"
    });

  }, []);

  //If we have user show the button sign in
  //If we don't show the sign out button


    return (
      <div className="loginAndRegister">
        <header className="headerLoginAndRegister">
          <h4 className="h4botaoHome">
            <a className="botaoHome" href="/"> Projeto Mais Alimentos </a> { /* botaoHome */ }
          </h4> { /* h4botaoHome */ }
        </header> { /* headerLoginAndRegister */ }


      { /* section Login */ }
      <section id="login"></section> { /* login */ }

      { /* section informacoes usuario e logOut */ }
      <section className="sectionInformacaoUsuarioELogOut">
        { user && 
          <div className="imagemENomeGoogle">
            <img className="imagemGoogle" src= {user.picture}></img> { /* imagemGoogle */ }
            <h3 className="h3Google"> {user.name} </h3> { /* h3Google */ }
          </div> /* imagemENomeGoogle */ 
        }
        <div className="sair">
          { Object.keys(user).length != 0 && 
            <button className="botaoSairGoogle" onClick = { e => handleSignOut(e)}> 
            Sair 
            </button> /* botaoSairGoogle */
          }
        </div> { /* sair */ }
      </section> { /* sectionInformacaoUsuarioELogOut */ }


      { Object.keys(user).length != 0 && 
        <main className="mainLoginAndRegister">

          <button className="botaoTableDoacaoDistribuicaoConsumo">Doar Alimentos</button>
          <button className="botaoTableDoacaoDistribuicaoConsumo">Ajudar na Distribuição</button>
          <button className="botaoTableDoacaoDistribuicaoConsumo">Receber Alimentos</button>

        </main>
      }







      </div>
    );
  }
  
  export default LoginAndRegister;