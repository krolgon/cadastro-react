import React from 'react';
import './Logo.css';
import logo from '../../assets/imagens/logo.png';

const Logo = (props) => {
  return (
    <aside className='logo'>
      <a href='#' className='logo'>
        <img src={logo} alt='logo' />
      </a>
    </aside>
  );
};

export default Logo;
