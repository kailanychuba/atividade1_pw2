import React from "react";
import { useState } from "react";
import { LayoutComponents } from "../layout/LayoutComponents.js"

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
  
    return (
      <LayoutComponents >
        <form className="login-form">
          <span className="login-form-title"><h1>Crie sua conta</h1></span>
        <br/>
          <h4>Nome:</h4>
          <div className="wrap-input">
            <input
              className={name !== "" ? "has-val input" : "input"}
              type="email"
              placeholder="ex: joão da silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input" placeholder="Nome"></span>
          </div>
        <br/>
          <h4>E-mail:</h4>
          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              placeholder="usuario@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" placeholder="Email"></span>
          </div>
        <br/>
          <h4>Senha:</h4>
          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              placeholder="senha com pelo menos 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" placeholder="Senha"></span>
          </div>
        <br/>
          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
        </form>
      </LayoutComponents>
    )
  }

export default Cadastro;