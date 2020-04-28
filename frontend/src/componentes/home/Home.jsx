import React from 'react';
import Main from '../template/Main';

const Home = (props) => {
  return (
    <Main icon='home' title='ìnicio' subtitle='Segundo Projeto'>
      <div className='display-4'>Bem vindo</div>
      <hr />
      <p className='mb-0'>
        Sistema para explificar a construção de um cad desenvolvido em React!
      </p>
    </Main>
  );
};

export default Home;
