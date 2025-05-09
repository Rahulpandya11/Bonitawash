import React from 'react';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Testimonials from './components/sections/Testimonials';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import About from './components/sections/About';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Compare from './components/sections/Compare';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Testimonials />
            <Services />
            <Gallery />
            <Pricing />
            <Compare />
            <About />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
