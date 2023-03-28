
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
//components
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';



function App() {

  console.log('HELLO   ')

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <CTA />
      <Clients />
      <About />
      <Contact />
      <Footer />
   

    </div>
  );
}

export default App;
