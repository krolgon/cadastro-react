import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from './componentes/template/Logo';
import Nav from './componentes/template/Nav';
import Main from './componentes/template/Main';
import Footer from './componentes/template/Footer';

function App() {
  return (
    <div className='App'>
      <Logo />
      <Nav />
      <Main icon='home' title='ìnicio' subtitle='Segundo Projeto' />
      <Footer />
    </div>
  );
}

export default App;
