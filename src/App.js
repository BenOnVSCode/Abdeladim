import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Featured from './Components/Featured'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Skills />
      <Projects  />
      <Footer />
    </>
    

  );
}

export default App;
