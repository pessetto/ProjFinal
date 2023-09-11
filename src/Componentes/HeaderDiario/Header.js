import React, { useState } from 'react';
import './Header.css';
import menuIcon from '../../Assets/menu.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  const goBack = ()=>{navigate('/Home')};
  const Forum = ()=>{navigate('/Forum')}; 
  const Emoçoes = ()=>{navigate('/Emoçoes')}; 
  const Diario = ()=>{navigate('/Diario')}; 
  const Rede = ()=>{navigate('/Rede')}; 
  const PageDiario = ()=>{navigate('/PageDiario')}; 
  const PagePesquisa = ()=>{navigate('/PagePesquisa')}; 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="header">
      <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      <nav className='conteiner_menu'>
            <a className='menu2' onClick={PageDiario}> Diário</a>
            <a  className='menu2' onClick={PagePesquisa}> Pesquisa </a>
        </nav>

        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={goBack}>Home</li>
          <li onClick={Forum}>Forum</li>
          <li onClick={Emoçoes}>Emoções em cores</li>
          <li onClick={Diario}>Diário</li>
          <li onClick={Rede}>Rede de Apoio</li>
          </ul>
      </nav>
    </div>
  );
};

export default Header;
