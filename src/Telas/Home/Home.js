import React from 'react';
import Header from '../../Componentes/Header 1/Header'; 
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home(){
  const navigate = useNavigate()

  const goToCadastro = () => {navigate('/cadastro')}
  const goToLogin = () => {navigate('/login')}

  return (
    <>
    <Header/>
    <div className="homeContainer">
      <h1 className="h1">BEM-VINDO!</h1>
      <div className="buttonBox">
        <button className="enterButton" onClick={goToLogin}>ENTRAR</button>
        <button className="registerButton" onClick={goToCadastro}>CADASTRAR</button>
      </div>
    </div>
    </>
  );
};

export default Home;
