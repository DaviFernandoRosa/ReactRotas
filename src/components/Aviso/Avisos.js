import React from 'react';
import '../../App.css';


const Aviso = () => {
    return(
        <div className='aviso'>
            <h3>Chamou aviso!!!</h3>
            
                <p>Quando começamos a desenvolver um SPA, uma das primeiras coisas que precisamos definir é
                    a forma como controlamos as rotas da aplicação. Em React isso não é diferente. 
                    O React Router é uma lib completa para controle de rotas que permite que você 
                    consiga configurar as rotas utilizando o formato JSX e também disponibiliza 
                    uma API para você configurar diretamente via Javascript.
                </p>
        </div>
    )
}

export default Aviso;