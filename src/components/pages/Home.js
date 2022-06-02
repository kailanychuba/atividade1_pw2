import React from 'react';
import '../../App.css'
import foto1 from '../../img/mapa2.jpg'

function Home() {
    return (
        <div className="conteudo-single">
            <h1>Seja bem-vindo estudante!</h1>
            <br/>
            <p>Teste 1, 2, 3...</p>
            <br/>
            <div className='foto'>
            <img src={foto1} width="500" />
            </div>
        </div>
    )
}

export default Home;