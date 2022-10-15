import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

//CSS
import "../style/profile.css"

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
    /* global google */
    google.accounts.id.renderButton(
      document.getElementById("login"),
      {theme: "outline", size: "large"
    });
  }, []);


    return (

      <div className="loginAndRegister">
        <header className="headerLoginAndRegister">
          <h4 className="h4botaoHome">
            <a className="botaoHome" href="/"> Projeto Mais Alimentos </a> { /* botaoHome */ }
          </h4> { /* h4botaoHome */ }
        </header> { /* headerLoginAndRegister */ }

      { /* section Login */ }
      <section id="login"></section> { /* login */ }

      </div>
    );
  }
  
  export default LoginAndRegister;