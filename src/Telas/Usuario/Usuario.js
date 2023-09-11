import React, { useState } from 'react';
import './Usuario.css';
import Header from '../../Componentes/Header 1/Header'
import { useNavigate } from 'react-router-dom';

function Usuario() {
  const navigate = useNavigate()
  const BemVindo = ()=>{navigate('/BemVindo')};


  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cidade, setCidade] = useState('');
  const [novaSenha, setNovaSenha] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar as informações do usuário aqui
    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Cidade:', cidade);
  };

  return (
    <>
    <Header/>
    <div className="usuario-container">
      <h2>Atualizar Informações do Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="data-nascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="data-nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />

        <div className="campo">
          <label htmlFor="nova-senha">Nova Senha:</label>
          <input
            type="password"
            id="nova-senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />
        </div>
          
        </div>
        <button className='button' type="submit" onClick={BemVindo}>Salvar</button>
        <button className='button2' onClick={BemVindo}>Voltar</button>
      </form>
    </div>
    </>
  );
}

export default Usuario;
