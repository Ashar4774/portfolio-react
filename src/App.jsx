import React, {useEffect, useRef} from "react";
import { motion, useScroll } from 'framer-motion';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const imageRef = useRef(null);

    useEffect(()=>{
        AOS.init({
         duration: 1000,
        });

        console.log(imageRef.current);

        // First scroll animation (Hero to About)
        gsap.to(imageRef.current, {
            y: 100,
            scale: 1.05,
            scrollTrigger: {
                trigger: "#aboutSection",
                start: "top center",
                end: "bottom center",
                scrub: true,
                // markers: true, // for debugging
            },
        });

        // Second scroll animation (About to Skills)
        gsap.to(imageRef.current, {
            x: 100,
            rotation: 10,
            scrollTrigger: {
                trigger: "#skillsSection",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });
    }, [])

    const { scrollYProgress } = useScroll();

  return (

      <main className='bg-gray-950'>
          <motion.div className="progress-bar" style = {{ scaleX: scrollYProgress }} />
        <Hero ref={imageRef} />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
  )
}

export default App
