import React from 'react';
import Pricing from '../components/sections/Pricing';
import PageHero from '../components/layout/PageHero';

const PricingPage = () => {
    return (
        <>
            <PageHero
                title="Clear Packages, Premium Results"
                subtitle="Choose a package based on your vehicle condition, then reserve your slot through our booking form."
                ctaText="Book A Package"
                secondaryText="Contact Team"
                secondaryPath="/contact"
            />
            <Pricing />
        </>
    );
};

export default PricingPage;
