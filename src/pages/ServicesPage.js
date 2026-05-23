import React from 'react';
import Services from '../components/sections/Services';
import PageHero from '../components/layout/PageHero';

const ServicesPage = () => {
    return (
        <>
            <PageHero
                title="Service Menu Designed Around Your Vehicle"
                subtitle="From fast hand washes to deep restoration, pick exactly what your car needs and book instantly."
                ctaText="Book Your Service"
                secondaryText="See Pricing"
                secondaryPath="/pricing"
            />
            <Services />
        </>
    );
};

export default ServicesPage;
