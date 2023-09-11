import React, { useState } from 'react';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';



const Cadastro = () => {
  const navigate = useNavigate()
  const goBack = ()=>{navigate('/login')};
  const BemVindo = ()=>{navigate('/bemVindo')};

  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    telefone: '',
    cidade: '',
    uf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <>
    <div className='all'>
    <h1 className="h1">FAÇA SEU CADASTRO</h1>
    <div className="cadastro-page">
      <div className="cadastro-container">
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-half">
              <label>Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="input-half">
              <label>Data de Nascimento</label>
              <input
                type="date"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-half">
              <label>Telefone (com DDD)</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
            <div className="input-half">
              <label>Cidade</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-half">
              <label>Estado</label>
              <input
                type="text"
                name="uf"
                value={formData.uf}
                onChange={handleChange}
                maxLength="2"
              />
            </div>
            <div className="input-half">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-half">
              <label>Senha</label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>
            <div className="input-half">
              <label>Confirmar Senha</label>
              <input
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="cadastro-button" type="submit" onClick={BemVindo}>
            Cadastrar
          </button>
        </form>
      </div>
      <text className='voltar' onClick={goBack}>IR PARA LOGIN</text>
    </div>
    </div>
    </>
  );
};

export default Cadastro;
