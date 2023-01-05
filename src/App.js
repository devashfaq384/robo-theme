import './App.css';
import Blog from './components/Blog/Blog';
import Brand from './components/Brand/Brand';
import CTA from './components/CTA/Cta';
import Features from './components/features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import Possibility from './components/Posibility/Posibility';
import WhatGPT3 from './components/WhatGPT3/WhatGPT3';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg' >
        <Navbar/>
        <Header />
      </div>
      <WhatGPT3/>
      <Brand />
      <Features />
      <Possibility/>
      <CTA/>
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
