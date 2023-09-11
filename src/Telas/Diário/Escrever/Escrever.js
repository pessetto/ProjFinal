import React, { useState } from 'react';
import './Escrever.css';
import lixoImg from '../../../Assets/lixo.png'; 
import Header from '../../../Componentes/HeaderDiario/Header'

const Escrever = () => {
  const [data, setData] = useState('');
  const [texto, setTexto] = useState('');

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleTextoChange = (event) => {
    setTexto(event.target.value);
  };

  const handleEnviar = () => {
    console.log('Data:', data);
    console.log('Texto:', texto);
  };

  return (
    <>
    <Header/>
    <div className="container">
      <h1 className="title">Como você está hoje?</h1>
      <div className="input-container">
        <input
          type="date"
          value={data}
          onChange={handleDataChange}
          className="input-date"
        />
        <textarea
          value={texto}
          onChange={handleTextoChange}
          className="input-text"
          placeholder="Escreva algo..."
        />
      </div>
      <div className="button-container">
        <button onClick={handleEnviar} className="button-enviar">
          Enviar
        </button>
        <img src={lixoImg} alt="Lixeira" className="icon-trash" />
      </div>
    </div>
    </>
  );
};

export default Escrever;
