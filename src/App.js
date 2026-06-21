import React from 'react';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyBookingBar from './components/layout/StickyBookingBar';
import ScrollToTop from './components/utils/ScrollToTop';
import RouteScrollToTop from './components/utils/RouteScrollToTop';
import BookingModal from './components/utils/BookingModal';
import { BookingProvider, useBooking } from './context/BookingContext';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import GiftCardsPage from './pages/GiftCardsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
    const { isModalOpen, selectedPackage, openBookingModal, closeBookingModal } = useBooking();

    // Listen for custom booking events
    React.useEffect(() => {
        const handleBookingEvent = (event) => {
            openBookingModal(event.detail.packageName);
        };
        
        window.addEventListener('openBookingModal', handleBookingEvent);
        
        return () => {
            window.removeEventListener('openBookingModal', handleBookingEvent);
        };
    }, [openBookingModal]);

    return (
        <>
            <RouteScrollToTop />
            <div className="App app-shell">
                <Header />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/gift-cards" element={<GiftCardsPage />} />
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
            <BookingModal 
                isOpen={isModalOpen} 
                onClose={closeBookingModal}
                selectedPackage={selectedPackage}
            />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <BookingProvider>
                <AppContent />
            </BookingProvider>
        </BrowserRouter>
    );
}

export default App;
