import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from './componentes/template/Logo';
import Nav from './componentes/template/Nav';
import Home from './componentes/home/Home';
import Footer from './componentes/template/Footer';

function App() {
  return (
    <div className='App'>
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
