import React, { useState } from 'react';
import './Header.css';
import menuIcon from '../../Assets/menu.png';
import logo from '../../Assets/logo.png';
import userIcon from '../../Assets/user.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const goBack = ()=>{navigate('/Home')};
  const Config = ()=>{navigate('/Config')}; 
  const Forum = ()=>{navigate('/Forum')}; 
  const Emoçoes = ()=>{navigate('/Emoçoes')}; 
  const Diario = ()=>{navigate('/Diario')}; 
  const Rede = ()=>{navigate('/Rede')}; 


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
    <div className="header">
      <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      <center><img src={logo} alt="Logo" className="logo" /></center>
      <div className="user-container">
        <img src={userIcon} alt="User" className="user-icon" onClick={toggleUserMenu} />
        {isUserMenuOpen && (
          <ul className="user-menu">
            <li onClick={Config}>Configurações</li>
            <li onClick={goBack}>Sair</li>
          </ul>
        )}
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={Forum}>Forum</li>
          <li onClick={Emoçoes}>Emoções em cores</li>
          <li onClick={Diario}>Diário</li>
          <li onClick={Rede}>Rede de Apoio</li>
          </ul>
      </nav>
    </div>
    </>
  );
};

export default Header;
