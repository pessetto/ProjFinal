import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png'

const Header = () => {
  return (
    <>
    <header className="header">
        <img className="logo" src={logo} />
    </header>
    </>
  );
}

export default Header;
