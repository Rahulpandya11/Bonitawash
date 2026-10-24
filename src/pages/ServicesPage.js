import React from 'react';
import Services from '../components/sections/Services';
import PageHero from '../components/layout/PageHero';

const ServicesPage = () => {
    return (
        <>
            <PageHero
                title="Car Wash Menu"
                subtitle="No appointment needed. Walk in anytime and pay the same price you see here, with a 24-hour rain guarantee on every wash."
                ctaText="Book A Detail"
                secondaryText="See Detail Packages"
                secondaryPath="/detailing"
            />
            <Services />
        </>
    );
};

export default ServicesPage;
