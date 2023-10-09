import React, { useState } from 'react';
import Header from '../../Componentes/Header 1/Header'; 
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const goBack = ()=>{navigate('/home')};
  const BemVindo = ()=>{navigate('/bemVindo')};


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };


  return (
   <>

    <Header />
    <div className='all'>
    <h1 className="h1">DIGITE SEU LOGIN</h1>
      <div className="login-page">
      <div className="login-container">
        <div className="input-container">
          <label>E-MAIL</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>SENHA</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={BemVindo
        }>
          ENTRAR
        </button>
      </div>
      <text className='voltar' onClick={goBack}>VOLTAR</text>
    </div>
    </div>
   </>
  );
};

export default Login;
