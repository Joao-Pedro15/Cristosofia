import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components

import Header from './components/Header.js';
import Home from './components/pages/Home'
import Legado from './components/pages/Legado';
import Footer from './components/Footer';
import Sobre from './components/pages/Sobre';

//capitulos

import Capitulo1 from './components/pages/capitulos/Capitulo1';
import Capitulo2 from './components/pages/capitulos/Capitulo2';
import Capitulo3 from './components/pages/capitulos/Capitulo3';
import Capitulo4 from './components/pages/capitulos/Capitulo4';
import Capitulo5 from './components/pages/capitulos/Capitulo5';
import Capitulo6 from './components/pages/capitulos/Capitulo6';
import Capitulo7 from './components/pages/capitulos/Capitulo7';
import Capitulo8 from './components/pages/capitulos/Capitulo8';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/sobre" exact element={<Sobre/>} />
          <Route path="/legado" element={<Legado/>} />
          <Route path="/capitulo1" element={<Capitulo1/>} />
          <Route path="/capitulo2" element={<Capitulo2/>} />
          <Route path="/capitulo3" element={<Capitulo3/>} />
          <Route path="/capitulo4" element={<Capitulo4/>} />
          <Route path="/capitulo5" element={<Capitulo5/>} />
          <Route path="/capitulo6" element={<Capitulo6/>} />
          <Route path="/capitulo7" element={<Capitulo7/>} />
          <Route path="/capitulo8" element={<Capitulo8/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
