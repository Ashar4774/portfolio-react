import {React, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    useEffect(()=>{
        AOS.init({
         duration: 1000,
        })
    }, [])

  return (
      <main className='bg-gray-950'>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
  )
}

export default App
