
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//components
import Home from './pages/Home';
import Products from './pages/Products';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

  console.log('HELLO   ')

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Header />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={ <Home />}
            />
            <Route 
              path="/products"
              element={ <Products />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
