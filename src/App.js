import React from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Home from './componentes/home/Home';
import About from './componentes/about/About';
import Skills from './componentes/skills/Skills';
import Qualification from './componentes/qualification/Qualification';
import Portfolio from './componentes/portfolio/Portfolio';
import Recommendation from './componentes/recommendation/Recommendation';
import Contact from './componentes/contact/Contact';
import Footer from './componentes/footer/Footer';
import ScrollUp from './componentes/scrollup/ScrollUp';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Recommendation />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
