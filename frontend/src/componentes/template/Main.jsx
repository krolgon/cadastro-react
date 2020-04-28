import React from 'react';
import './Main.css';
import Header from './Header';

const Main = (props) => {
  return (
    <React.Fragment>
      <Header {...props}/>
      <main className='content'>Conteudo</main>
    </React.Fragment>
  );
};

export default Main;
