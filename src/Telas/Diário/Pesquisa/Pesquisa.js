import React, { useState } from 'react';
import './Pesquisa.css';
import Header from "../../../Componentes/HeaderDiario/Header"
import { useNavigate } from 'react-router-dom';

function Pesquisa() {
  const navigate = useNavigate()
  const PageResposta = ()=>{navigate('/PageResposta')};

  // Definir estados para armazenar as seleções do usuário
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  // Função para lidar com a pesquisa quando o botão é clicado
  const handlePesquisar = () => {
    // Aqui, você pode implementar a lógica para realizar a pesquisa com base nas seleções do usuário
    // Por exemplo, você pode enviar uma solicitação para o servidor com os valores selecionados
    // e exibir os resultados na tela.
    alert(`Pesquisando: Dia ${dia}, Mês ${mes}, Ano ${ano}`);
  };

  return (
    <>
    <Header/>
    <center><h1>Selecione uma data</h1></center>
    <div className="pesquisa-container">
      <div className="select-container">
        <select value={dia} onChange={(e) => setDia(e.target.value)}>
          <option value="">DIA</option>
          {/* OPCÇOES DE DIAS */}
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>


        </select>
        <select value={mes} onChange={(e) => setMes(e.target.value)}>
          <option value="">MÊS</option>
          {/* OPÇÕES DE MESES */}
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
        <select value={ano} onChange={(e) => setAno(e.target.value)}>
          <option value="">ANO</option>
          {/* OPÇÕES ANO */}
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <button onClick={PageResposta}>Pesquisar</button>
    </div>
    </>
  );
}

export default Pesquisa;
