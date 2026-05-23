import React from 'react';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyBookingBar from './components/layout/StickyBookingBar';
import ScrollToTop from './components/utils/ScrollToTop';
import RouteScrollToTop from './components/utils/RouteScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <BrowserRouter>
            <RouteScrollToTop />
            <div className="App app-shell">
                <Header />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <StickyBookingBar />
                <Footer />
                <ScrollToTop />
            </div>
        </BrowserRouter>
    );
}

export default App;
