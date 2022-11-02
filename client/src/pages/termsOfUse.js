import React from "react";


//CSS
import "../style/profile.css"
import "../style/termsOfUse.css"



function TermsOfUse() {

        
    



    return (
        
        
        <div className="TermsOfUse">
        <header className="headerLoginAndRegister">
          <h4 className="h4botaoHome">
            <a className="botaoHome" href="/"> Projeto Mais Alimentos </a> { /* botaoHome */ }
          </h4> { /* h4botaoHome */ }
        </header> { /* headerLoginAndRegister */ }

        <div className="textTermsOfUse">


        <p className="pTitleTemsOfUse"> <h2 className="titleTemsOfUse">Termos e condições de uso do website</h2></p>


                <p>
                Seja bem-vindo ao nosso website. Leia com atenção todos os termos abaixo.
                Este documento, e todo o conteúdo do website é oferecido pelos desenvolvedores do website, 
                neste termo regulamenta todos os direitos e obrigações de todos os USUÁRIOS, 
                resguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como 
                requisito para acesso.
                </p>

                <h4 className="itensTerms">1. DA FUNÇÃO DO WEBSITE</h4>

                <p>Este website foi criado e desenvolvido com a função cadastrar doadores de 
                alimentos e instituições sociais dispostas a receber tais doações conforme 
                LEI Nº 14.016, DE 23 DE JUNHO DE 2020.
                É de responsabilidade do USUÁRIO pelas informações descritas no cadastro.
                </p>

                <h4 className="itensTerms">2. DO ACEITE DOS TERMOS</h4>

                <p>
                Este documento, chamado “Termos de Uso”, aplicáveis a todos os usuários, foi 
                desenvolvido pelos criadores do website.
                Este termo especifica e exige que todo USUÁRIO ao fazer o cadastro no website,
                leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre 
                a DOADORES e o RECEPTORES direitos e obrigações entre ambas as partes.
                Ao realizar o cadastro, o USUÁRIO expressa que aceita e entende todas as 
                cláusulas, assim como concorda integralmente com cada uma delas, sendo este 
                aceite imprescindível para a conclusão do mesmo. Caso o USUÁRIO discorde de 
                alguma cláusula ou termo deste contrato, o mesmo deve imediatamente 
                interromper o processo cadastral.
                Este termo pode e irá ser atualizado periodicamente pelos desenvolvedores, 
                que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e 
                comunicação, sempre que houver alteração na legislação. É importante que o 
                USUÁRIO confira sempre se houve movimentação e qual foi a última atualização 
                do mesmo no começo da página.
                </p>



                <h4 className="itensTerms">3. DO ACESSO AO WEBSITE</h4>

                <p>
                O website funciona normalmente 24 (vinte e quatro) horas por dia, porém podem 
                ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, 
                mudança de servidores, falhas técnicas ou por ordem de força maior, que podem 
                deixar o website indisponível por tempo limitado.
                Os desenvolvedores não se responsabilizam por nenhuma perda de oportunidade ou 
                prejuízos que esta indisponibilidade temporária possa gerar aos usuários.
                Em caso de manutenção que exigirem um tempo maior, os desenvolvedores irão 
                informar previamente aos USUÁRIOS da necessidade e do tempo previsto em que o 
                website offline.
                O website tem finalidade exclusiva de cadastrar USUÁRIOS para doar e receber 
                alimentos, onde será esse USUÁRIO deverá preencher um formulário com seus dados 
                e informações, para ter acesso a tela de login.
                Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao 
                realizar o cadastro junto ao website, o USUÁRIO concorda integralmente com a 
                coleta de dados conforme a Lei e com a Política de Privacidade do website.
                </p>
                

                <h4 className="itensTerms">4. DAS OBRIGAÇÕES</h4>

                <p>
                O USUÁRIO ao utilizar o website, concorda integralmente em:
                De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, 
                hackear, destruir ou prejudicar a estrutura do website. Incluindo-se, mas não 
                se limitando, ao envio de vírus de computador, de ataques de DDOS, de acesso 
                indevido por falhas da mesma ou quaisquer outras forma e meio.
                De não realizar divulgação indevida dos dados recebidos através dos cadastros
                Da proibição em reproduzir qualquer conteúdo do website ou plataforma sem 
                autorização expressa, podendo responder civil e criminalmente pelo mesmo.
                </p>
                
        </div>

        </div>

        

        
    )
}



export default TermsOfUse;