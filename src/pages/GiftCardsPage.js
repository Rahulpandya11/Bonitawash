import React from 'react';
import GiftCards from '../components/sections/GiftCards';
import PageHero from '../components/layout/PageHero';

const GiftCardsPage = () => {
    return (
        <>
            <PageHero
                title="Gift Cards & Package Deals"
                subtitle="Give the gift of a clean car or save with our multi-wash packages"
                ctaText="Contact Us"
                secondaryText="View Pricing"
                secondaryPath="/pricing"
            />
            <GiftCards />
        </>
    );
};

export default GiftCardsPage;
