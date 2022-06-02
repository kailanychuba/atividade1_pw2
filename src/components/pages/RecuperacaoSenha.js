import React from "react"
import "./RecuperacaoSenha.css"
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md"

function RecuperacaoSenha() {
    const [email, setEmail] = useState("")

    return (

        <div className="recuperacao">
            <div className="recuperacao-right">
                <h1>Esqueci minha senha</h1>
                <div className="text">
                    <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
                </div>
                <div className="recuperacao-InputEmail">
                <MdEmail />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Enviar
                </button>
            </div>
        </div>

        

    );
}

export default RecuperacaoSenha
