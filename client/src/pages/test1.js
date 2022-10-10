import React from "react";
import Axios from 'axios';

import Teste2 from "./test2";


function Teste1() {

        
    
    Axios.get("http://localhost:8080/teste1").then(
        res => console.log(res)
    );



    return (
        
        
        <div >53W53</div>
        // <Teste2 variavel1={variavel1} variavel2={variavel2} />
        

        
    )
}



export default Teste1;