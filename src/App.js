import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import RecuperacaoSenha from './components/pages/RecuperacaoSenha';
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'

import banner from './img/img.png'

function App() {
  return ( <>
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h2>EDUCARE</h2>
            </div>
            <div className="banner">
            <img src={banner} width="100" />
          </div>
            <div className="item-menu">
              <a href="Login">Login</a>
            </div>
          </div>
        </div>
      </div>

      <div className="conteudo">
        <div className="center">
        </div>
      </div>
    </div>
    
      <BrowserRouter>
      <Navbar />
        <Switch>
            <Container customClass="min-height">
              <Route exact path="/" component={Home} />
              <Route path="/Empresa" component={Empresa} />
              <Route path="/Contato" component={Contato} />
              <Route path="/Login" component={Login} />
              <Route path="/Cadastro" component={Cadastro} />
              <Route path="/RecuperacaoSenha" component={RecuperacaoSenha} />
            </Container>
        </Switch>
      </BrowserRouter>

    </>
  );
}



export default App;
