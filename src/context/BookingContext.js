import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');

    const openBookingModal = (packageName = '') => {
        setSelectedPackage(packageName);
        setIsModalOpen(true);
    };

    const closeBookingModal = () => {
        setIsModalOpen(false);
        setSelectedPackage('');
    };

    return (
        <BookingContext.Provider
            value={{
                isModalOpen,
                selectedPackage,
                openBookingModal,
                closeBookingModal
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};
