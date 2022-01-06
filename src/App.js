import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SessionAbout from './Pages/Sobre/SessionAbout';
import Episodios from './Pages/Contato/SearchCharacters/SearchCharacters';

import Header from './Pages/Home/Header';
import Footer from './Pages/Home/Footer';
import MainHome from './Pages/Home/Main';

const App = () => {

  return (
 
      <div>
        <Header/>
        <Routes>
            <Route exact path="/Inicio" element={<MainHome/>}/>
            <Route exact path="/Sobre" element={<SessionAbout/>}/>
            <Route exact path="/Episodios" element={<Episodios/>}/>
        </Routes>
        <Footer/>
      </div>
    )
}
export default App;
