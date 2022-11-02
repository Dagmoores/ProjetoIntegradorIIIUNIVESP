import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode"

//CSS
import "../style/profile.css"
import "../style/loginAndRegister.css"

const SECRET_KEY = process.env.REACT_APP_CHAVE_GOOGLE


function LoginAndRegister() { 

  const [user, setUser] = useState({});
  const navigate = useNavigate()



  //GOOGLE
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    let userObject = jwt_decode(response.credential);
    setUser(userObject);
    navigate("/profile", {state: userObject})
  }; 

  //BOTAO GOOGLE
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: SECRET_KEY,
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("login"),
      {theme: "outline", size: "large"
    });
  });


    return (

      <div className="loginAndRegister">
        <header className="headerLoginAndRegister">
          <h4 className="h4botaoHome">
            <a className="botaoHome" href="/"> Projeto Mais Alimentos </a> { /* botaoHome */ }
          </h4> { /* h4botaoHome */ }
        </header> { /* headerLoginAndRegister */ }

        <h2 className="tituloLogin"> Faça seu login, ou registre-se,
         utilizando sua conta Google!</h2>

      { /* section Login */ }
      <section id="login" className="loginGoogle"></section> { /* login */ }

    <div className="textAbaixoLogin">
      <h4 className="infoUsoDeDados">Ao realizar o registro você concorda em nos fornecer dados 
      essenciais para uso de nossos serviços, em especial, seu nome, e-mail e a foto de sua 
      conta do Google. Para mais informações, consulte nossa página de termos de uso: 
      <p><Link className="linkTermsOfUSe" to="../termsOfUse">Termos de Uso</Link></p>
      </h4>
    </div>


      </div>
    );
  }
  
  export default LoginAndRegister;